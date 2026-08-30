import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';

/**
 * Los dos botones de tienda. Todavía no hay enlace: la app está en revisión,
 * así que van deshabilitados y con la insignia de "Próximamente" en lugar de
 * apuntar a una URL que daría 404.
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
}
