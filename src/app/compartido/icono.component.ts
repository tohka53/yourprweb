import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type NombreIcono =
  | 'atleta'
  | 'gimnasio'
  | 'trofeo'
  | 'reloj'
  | 'rayo'
  | 'grafica'
  | 'escudo'
  | 'check'
  | 'flecha';

/** Set de iconos de trazo, a 24x24 y con currentColor. */
@Component({
  selector: 'app-icono',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="tam"
      [attr.height]="tam"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="grosor"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true">
      @switch (nombre) {
        @case ('atleta') {
          <path d="M4 10v4M20 10v4M7 7v10M17 7v10M7 12h10" />
        }
        @case ('gimnasio') {
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-6h6v6" />
        }
        @case ('trofeo') {
          <path d="M8 21h8M12 17v4M6 4h12v5a6 6 0 0 1-12 0V4Z" />
          <path d="M18 5h2.5a2.5 2.5 0 0 1 0 5H18M6 5H3.5a2.5 2.5 0 0 0 0 5H6" />
        }
        @case ('reloj') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        }
        @case ('rayo') {
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        }
        @case ('grafica') {
          <path d="M3 21h18M6 17V9M11 17V5M16 17v-6M21 17v-9" />
        }
        @case ('escudo') {
          <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('check') {
          <path d="m4 12.5 5 5L20 6.5" />
        }
        @default {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
      }
    </svg>
  `,
})
export class IconoComponent {
  @Input({ required: true }) nombre!: NombreIcono;
  @Input() tam = 24;
  @Input() grosor = 1.9;
}
