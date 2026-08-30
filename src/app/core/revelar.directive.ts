import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';

/** Cuánto esperamos antes de rendirnos y mostrar el contenido igual. */
const RED_DE_SEGURIDAD_MS = 2500;

/**
 * Aparición al entrar en pantalla. Añade la clase `visible` una sola vez y se
 * desconecta, así el scroll no paga nada después de la primera pasada.
 *
 *   <div appRevelar [retraso]="120">…</div>
 *
 * Hay tres caminos, y los tres terminan con el contenido a la vista. Importa
 * porque una animación de entrada que no dispara no es una animación que falta:
 * es la página en blanco.
 *
 * 1. Lo que ya nace dentro de la ventana se revela sin esperar al observador.
 * 2. El resto lo dispara IntersectionObserver al hacer scroll.
 * 3. Si el documento está oculto —una pestaña abierta en segundo plano, un
 *    panel de vista previa— el navegador congela el pintado: no hay layout
 *    (getBoundingClientRect devuelve ceros), requestAnimationFrame no corre y
 *    el observador no dispara. Ahí la red de seguridad muestra todo tal cual.
 *    No se pierde nada: nadie está viendo la animación.
 */
@Directive({
  selector: '[appRevelar]',
  standalone: false,
  host: { class: 'revelar' },
})
export class RevelarDirective implements OnInit, OnDestroy {
  /** Milisegundos de retraso, para escalonar una fila de tarjetas. */
  @Input() retraso = 0;

  /** Cuánto del elemento tiene que verse para disparar (0 a 1). */
  @Input() umbral = 0.15;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);

  private observador?: IntersectionObserver;
  private readonly temporizadores: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    const nodo = this.el.nativeElement as HTMLElement;

    const reducido =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reducido) {
      nodo.classList.add('visible');
      return;
    }

    if (this.retraso) nodo.style.transitionDelay = `${this.retraso}ms`;

    // Nada de esto toca estado de Angular, así que va fuera de la zona.
    this.zone.runOutsideAngular(() => {
      // setTimeout y no requestAnimationFrame: rAF está atado al ciclo de
      // pintado y se congela en segundo plano. Un turno basta para que el
      // layout esté resuelto antes de medir.
      this.temporizadores.push(
        setTimeout(() => {
          const caja = nodo.getBoundingClientRect();
          // Una caja de alto cero significa que el navegador todavía no hizo
          // layout; no es que el elemento esté fuera de pantalla.
          const medible = caja.height > 0 || caja.width > 0;

          if (medible && caja.top < innerHeight && caja.bottom > 0) {
            nodo.classList.add('visible');
            return;
          }

          this.observador = new IntersectionObserver(
            (entradas) => {
              for (const entrada of entradas) {
                if (!entrada.isIntersecting) continue;
                this.mostrar(nodo);
              }
            },
            { threshold: this.umbral, rootMargin: '0px 0px -8% 0px' },
          );
          this.observador.observe(nodo);
        }, 0),
      );

      this.temporizadores.push(
        setTimeout(() => {
          if (nodo.classList.contains('visible')) return;
          // Si seguimos sin poder medir, mostramos y ya. Vale más una página
          // completa sin animación que una animación que nunca llega.
          const caja = nodo.getBoundingClientRect();
          if (document.visibilityState === 'hidden' || (caja.height === 0 && caja.width === 0)) {
            // Sin transición: una transición que arranca con el pintado
            // congelado se queda a medias, y el elemento seguiría en opacidad 0
            // aunque ya tenga la clase.
            nodo.classList.add('sin-transicion');
            this.mostrar(nodo);
          }
        }, RED_DE_SEGURIDAD_MS),
      );
    });
  }

  private mostrar(nodo: HTMLElement): void {
    nodo.classList.add('visible');
    this.observador?.disconnect();
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
    for (const t of this.temporizadores) clearTimeout(t);
  }
}
