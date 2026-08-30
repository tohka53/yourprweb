import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';

import { I18nService } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  private readonly i18n = inject(I18nService);
  private readonly seo = inject(SeoService);

  readonly t = this.i18n.t;
  readonly idioma = this.i18n.idioma;

  /** Pestaña activa de la sección de funciones. */
  readonly pestana = signal(0);

  constructor() {
    // El título vive en un effect para que también cambie al alternar idioma.
    effect(() => {
      const meta = this.t().meta.inicio;
      this.seo.poner(meta.titulo, meta.desc);
    });
  }

  /** La cinta se duplica para que el bucle de la marquesina no tenga costura. */
  get cintaDoble(): string[] {
    const c = this.t().cinta;
    return [...c, ...c];
  }
}
