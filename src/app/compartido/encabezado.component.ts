import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-encabezado',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './encabezado.component.html',
  styles: [
    `
      .barra {
        position: fixed;
        inset-inline: 0;
        top: 0;
        z-index: 50;
        transition:
          background-color 0.3s ease,
          box-shadow 0.3s ease,
          backdrop-filter 0.3s ease;
      }
      .barra.pegado {
        background: color-mix(in oklab, var(--color-negro) 85%, transparent);
        backdrop-filter: blur(18px);
        box-shadow: 0 1px 0 0 var(--color-borde);
      }
    `,
  ],
})
export class EncabezadoComponent {
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly t = this.i18n.t;
  readonly idioma = this.i18n.idioma;

  readonly pegado = signal(false);
  readonly abierto = signal(false);
  readonly enInicio = signal(true);

  readonly enlaces = [
    { fragmento: 'que-es', clave: 'que' as const },
    { fragmento: 'funciones', clave: 'funciones' as const },
    { fragmento: 'competencias', clave: 'competencias' as const },
    { fragmento: 'descarga', clave: 'descarga' as const },
  ];

  constructor() {
    this.enInicio.set(this.router.url.split('#')[0].split('?')[0] === '/');
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.enInicio.set(e.urlAfterRedirects.split('#')[0].split('?')[0] === '/');
        this.abierto.set(false);
      });
  }

  @HostListener('window:scroll')
  alScroll(): void {
    this.pegado.set(scrollY > 24);
  }

  alternarIdioma(): void {
    this.i18n.alternar();
  }

  alternarMenu(): void {
    this.abierto.update((v) => !v);
    document.body.style.overflow = this.abierto() ? 'hidden' : '';
  }

  cerrar(): void {
    this.abierto.set(false);
    document.body.style.overflow = '';
  }
}
