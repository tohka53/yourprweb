import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { I18nService, type Idioma } from '../../core/i18n.service';
import { SeoService } from '../../core/seo.service';
import type { Bloque } from '../../core/legal.tipos';

type Cual = 'privacidad' | 'eliminar' | 'soporte';

/**
 * Una sola plantilla sirve las tres páginas legales. Cuál se pinta lo dice
 * `data.cual` en la ruta, y el contenido sale del diccionario del idioma
 * activo, así que el selector del header también las cambia.
 */
@Component({
  selector: 'app-legal',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css',
})
export class LegalComponent {
  private readonly ruta = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);
  private readonly seo = inject(SeoService);

  readonly t = this.i18n.t;
  readonly cual = signal<Cual>((this.ruta.snapshot.data['cual'] as Cual) ?? 'privacidad');

  readonly pagina = computed(() => this.i18n.legal()[this.cual()]);

  /** Índice lateral: solo los encabezados de nivel dos. */
  readonly indice = computed(() =>
    this.pagina().bloques.filter((b): b is Extract<Bloque, { tipo: 'h2' }> => b.tipo === 'h2'),
  );

  constructor() {
    // Algunas rutas (/privacy, /delete-account) fuerzan el inglés al entrar.
    const forzado = this.ruta.snapshot.data['idioma'] as Idioma | undefined;
    if (forzado) this.i18n.poner(forzado);

    effect(() => {
      const meta = this.t().meta[this.cual()];
      this.seo.poner(meta.titulo, meta.desc);
    });
  }
}
