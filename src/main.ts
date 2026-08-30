import { isDevMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { inject as inyectarAnalitica } from '@vercel/analytics';

import { AppModule } from './app/app-module';

/**
 * Vercel Web Analytics.
 *
 * Va aquí y no en un componente porque solo tiene que correr una vez, antes de
 * que arranque la app. El script remoto que carga `inject()` parchea
 * `history.pushState`, que es justo lo que usa el Router de Angular, así que
 * los cambios de ruta del SPA se cuentan solos: no hay que suscribirse a
 * NavigationEnd ni llamar `pageview()` a mano.
 *
 * El modo se fija con `isDevMode()` en vez de dejar el `auto` por defecto: la
 * autodetección daba `production` incluso sirviendo el build en local, y ahí
 * se pone a pedir un endpoint que no existe y ensucia la consola.
 *
 * Ojo: los endpoints `/_vercel/insights/*` los sirve la propia plataforma, así
 * que esto únicamente funciona en Vercel. Y hay que habilitar Web Analytics en
 * el panel del proyecto, o los datos llegan y se descartan.
 */
inyectarAnalitica({
  framework: 'angular',
  mode: isDevMode() ? 'development' : 'production',
});

platformBrowser()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
  .catch((err) => console.error(err));
