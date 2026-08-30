import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Logo + wordmark, tal como se lee en el header y en el pie. */
@Component({
  selector: 'app-marca',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="flex items-center gap-2.5">
      <app-logo [tam]="tam" [animado]="animado" />
      <span
        class="display font-extrabold tracking-tight leading-none"
        [style.fontSize.px]="tam * 0.78">
        <span class="text-blanco">your</span><span class="texto-degradado">pr</span>
      </span>
    </span>
  `,
})
export class MarcaComponent {
  @Input() tam = 34;
  @Input() animado = false;
}
