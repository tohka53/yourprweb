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
 * Cuenta de 0 hasta [hasta] la primera vez que el número entra en pantalla.
 * Escribe directo en el DOM para no disparar detección de cambios en cada
 * cuadro de la animación.
 */
@Directive({
  selector: '[appContador]',
  standalone: false,
})
export class ContadorDirective implements OnInit, OnDestroy {
  @Input({ required: true }) hasta!: number;
  @Input() duracion = 1400;
  @Input() sufijo = '';

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private observador?: IntersectionObserver;
  private cuadro = 0;

  ngOnInit(): void {
    const nodo = this.el.nativeElement as HTMLElement;
    nodo.textContent = `0${this.sufijo}`;

    const reducido =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reducido) {
      nodo.textContent = `${this.hasta}${this.sufijo}`;
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observador = new IntersectionObserver(
        (entradas) => {
          if (!entradas.some((e) => e.isIntersecting)) return;
          this.observador?.disconnect();
          this.animar(nodo);
        },
        { threshold: 0.6 },
      );
      this.observador.observe(nodo);
    });
  }

  private animar(nodo: HTMLElement): void {
    const inicio = performance.now();
    const paso = (ahora: number) => {
      const avance = Math.min(1, (ahora - inicio) / this.duracion);
      // easeOutExpo: arranca rápido y frena, que es como se leen bien las cifras.
      const suave = avance === 1 ? 1 : 1 - Math.pow(2, -10 * avance);
      nodo.textContent = `${Math.round(this.hasta * suave)}${this.sufijo}`;
      if (avance < 1) this.cuadro = requestAnimationFrame(paso);
    };
    this.cuadro = requestAnimationFrame(paso);
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
    cancelAnimationFrame(this.cuadro);
  }
}
