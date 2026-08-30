import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * Halo que sigue al puntero dentro de una tarjeta. Solo actualiza dos
 * custom properties; el degradado lo pinta CSS (.tarjeta-halo).
 */
@Directive({
  selector: '[appHalo]',
  standalone: false,
  host: { class: 'tarjeta-halo' },
})
export class HaloDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener('pointermove', ['$event'])
  mover(evento: PointerEvent): void {
    const nodo = this.el.nativeElement as HTMLElement;
    const caja = nodo.getBoundingClientRect();
    nodo.style.setProperty('--mx', `${evento.clientX - caja.left}px`);
    nodo.style.setProperty('--my', `${evento.clientY - caja.top}px`);
  }
}
