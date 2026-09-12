import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';

/**
 * Los dos botones de tienda.
 *
 * iOS ya está publicado y lleva enlace real. Android sigue deshabilitado con
 * la insignia de "Próximamente": es preferible un botón muerto y rotulado que
 * uno que promete y da 404.
 */
@Component({
  selector: 'app-tiendas',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tiendas.component.html',
})
export class TiendasComponent {
  @Input() centrado = false;
  readonly t = inject(I18nService).t;

  /**
   * Sin el segmento de país a propósito. El enlace que da App Store Connect
   * viene como /us/, y eso fuerza la tienda de Estados Unidos: a alguien en
   * Guatemala le puede salir que la app no está disponible en su región.
   * Sin locale, Apple redirige a la tienda del país de cada visitante.
   */
  readonly urlIos = 'https://apps.apple.com/app/id6805577669';
}
