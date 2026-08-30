import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * La marca YP en SVG.
 *
 * La geometría es la misma que `lib/src/core/marca/yp_logo.dart` en la app
 * Flutter, portada de la caja de 1000x1000 a un viewBox recortado a la marca:
 *
 *   trazo  = ojo de la P ∪ brazo de la Y ∪ asta con barra olímpica
 *   discos = los dos discos de la barra, en amarillo
 *
 * Si tocas una constante en el Dart, tócala aquí: el ícono de las tiendas y
 * este SVG tienen que seguir coincidiendo.
 */
@Component({
  selector: 'app-logo',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="tam"
      [attr.height]="tam"
      viewBox="38.39 120 784.11 800"
      [class.animado]="animado"
      role="img"
      [attr.aria-label]="etiqueta"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient [attr.id]="idGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0B3FA8" />
          <stop offset="0.45" stop-color="#1565FF" />
          <stop offset="1" stop-color="#00C853" />
        </linearGradient>
      </defs>

      <g [attr.fill]="degradado ? 'url(#' + idGrad + ')' : 'currentColor'">
        <!-- Ojo de la P: media corona elíptica a la derecha del asta -->
        <path class="p1" d="M470 120 A352.5 225 0 0 1 470 570 L470 415 A197.5 70 0 0 0 470 275 Z" />
        <!-- Brazo izquierdo de la Y, recortado recto por la línea del hombro -->
        <path class="p2" d="M38.39 120 L231.62 120 L532.17 523.72 L407.83 616.28 Z" />
        <!-- Asta común -->
        <rect class="p3" x="392.5" y="120" width="155" height="760" />
        <!-- Barra olímpica -->
        <rect class="p4" x="225" y="788" width="490" height="92" rx="46" />
      </g>

      <!-- Discos, siempre en el amarillo de la marca -->
      <g [attr.fill]="acento">
        <rect class="p5" x="178" y="748" width="94" height="172" rx="26" />
        <rect class="p6" x="668" y="748" width="94" height="172" rx="26" />
      </g>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }

      svg.animado path,
      svg.animado rect {
        opacity: 0;
        animation: aparecer 0.62s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      svg.animado .p3 { transform-origin: 470px 880px; animation-name: crecer;  animation-delay: 0.02s; }
      svg.animado .p1 { transform-origin: 470px 345px; animation-delay: 0.22s; }
      svg.animado .p2 { transform-origin: 285px 368px; animation-delay: 0.34s; }
      svg.animado .p4 { transform-origin: 470px 834px; animation-name: ancho;  animation-delay: 0.46s; }
      svg.animado .p5 { animation-name: rebote; animation-delay: 0.62s; }
      svg.animado .p6 { animation-name: rebote; animation-delay: 0.72s; }

      @keyframes aparecer {
        from { opacity: 0; transform: scale(0.7); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes crecer {
        from { opacity: 0; transform: scaleY(0); }
        to   { opacity: 1; transform: scaleY(1); }
      }
      @keyframes ancho {
        from { opacity: 0; transform: scaleX(0.1); }
        to   { opacity: 1; transform: scaleX(1); }
      }
      @keyframes rebote {
        0%   { opacity: 0; transform: scale(0.2); }
        60%  { opacity: 1; transform: scale(1.18); }
        100% { opacity: 1; transform: scale(1); }
      }

      @media (prefers-reduced-motion: reduce) {
        svg.animado path,
        svg.animado rect {
          opacity: 1;
          animation: none;
        }
      }
    `,
  ],
})
export class LogoComponent {
  @Input() tam = 40;
  @Input() degradado = true;
  @Input() animado = false;
  @Input() acento = '#FFC400';
  @Input() etiqueta = 'yourpr';

  /** Un id por instancia: dos <linearGradient> con el mismo id se pisan. */
  readonly idGrad = `yp-grad-${Math.random().toString(36).slice(2, 9)}`;
}
