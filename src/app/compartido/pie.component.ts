import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-pie',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pie.component.html',
})
export class PieComponent {
  readonly t = inject(I18nService).t;
  readonly anio = new Date().getFullYear();
  readonly correo = 'mcabreracto@techsolutionsgt.dev';
}
