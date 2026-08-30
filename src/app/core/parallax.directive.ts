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
 * Desplazamiento suave contra el scroll. Se calcula en un rAF encolado, no en
 * cada evento de scroll, y siempre fuera de la zona de Angular.
 */
@Directive({
  selector: '[appParallax]',
  standalone: false,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  /** Fracción del scroll que se aplica. Negativo invierte el sentido. */
  @Input() factor = 0.12;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private pendiente = false;
  private readonly alScroll = () => this.encolar();

  ngOnInit(): void {
    const reducido =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido) return;

    this.zone.runOutsideAngular(() => {
      addEventListener('scroll', this.alScroll, { passive: true });
      this.encolar();
    });
  }

  private encolar(): void {
    if (this.pendiente) return;
    this.pendiente = true;
    requestAnimationFrame(() => {
      this.pendiente = false;
      const nodo = this.el.nativeElement as HTMLElement;
      const caja = nodo.getBoundingClientRect();
      const centro = caja.top + caja.height / 2 - innerHeight / 2;
      nodo.style.transform = `translate3d(0, ${(-centro * this.factor).toFixed(2)}px, 0)`;
    });
  }

  ngOnDestroy(): void {
    removeEventListener('scroll', this.alScroll);
  }
}
