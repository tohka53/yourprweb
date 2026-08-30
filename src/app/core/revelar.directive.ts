import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';

/**
 * Aparición al entrar en pantalla. Añade la clase `visible` una sola vez y se
 * desconecta, así el scroll no paga nada después de la primera pasada.
 *
 * <div appRevelar [retraso]="120">…</div>
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

  ngOnInit(): void {
    const nodo = this.el.nativeElement as HTMLElement;

    // Sin IntersectionObserver (o con movimiento reducido) se muestra y ya.
    const reducido =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reducido) {
      nodo.classList.add('visible');
      return;
    }

    if (this.retraso) nodo.style.transitionDelay = `${this.retraso}ms`;

    // Fuera de la zona: el observador dispara seguido y no cambia estado de Angular.
    this.zone.runOutsideAngular(() => {
      this.observador = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            if (!entrada.isIntersecting) continue;
            nodo.classList.add('visible');
            this.observador?.disconnect();
          }
        },
        { threshold: this.umbral, rootMargin: '0px 0px -8% 0px' },
      );
      this.observador.observe(nodo);
    });
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
  }
}
