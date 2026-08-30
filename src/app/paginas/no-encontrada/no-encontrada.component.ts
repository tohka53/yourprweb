import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-no-encontrada',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative isolate flex min-h-[78vh] items-center justify-center overflow-hidden px-5 py-32">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul/16 blur-[120px]"></div>
        <div class="rejilla-fondo absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_50%,#000,transparent_70%)]"></div>
      </div>

      <div class="text-center">
        <div class="flex justify-center"><app-logo [tam]="76" [animado]="true" /></div>
        <p class="display mt-8 text-8xl font-extrabold leading-none texto-degradado">404</p>
        <h1 class="display mt-3 text-3xl font-bold text-blanco">
          {{ idioma() === 'es' ? 'No cuenta como PR' : 'This one does not count as a PR' }}
        </h1>
        <p class="mx-auto mt-3 max-w-sm text-base text-gris">
          {{
            idioma() === 'es'
              ? 'La página que buscas no existe o se movió de lugar.'
              : 'The page you are looking for does not exist or moved.'
          }}
        </p>
        <a
          routerLink="/"
          class="mt-8 inline-block rounded-full bg-gradient-to-r from-azul to-verde px-7 py-3.5 text-base font-bold text-blanco transition-transform hover:scale-105">
          {{ t().legal.volver }}
        </a>
      </div>
    </section>
  `,
})
export class NoEncontradaComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly idioma = this.i18n.idioma;
}
