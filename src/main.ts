import { isDevMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { inject as inyectarAnalitica } from '@vercel/analytics';

import { AppModule } from './app/app-module';

/**
 * Vercel Web Analytics.
 *
 * Va aquí y no en un componente porque solo tiene que correr una vez, antes de
 * que arranque la app. El script que carga `inject()` parchea
 * `history.pushState`, que es justo lo que usa el Router de Angular, así que
 * los cambios de ruta del SPA se cuentan solos: no hay que suscribirse a
 * NavigationEnd ni llamar `pageview()` a mano.
 *
 * Solo se inyecta en producción. En desarrollo el paquete carga un script de
 * depuración desde va.vercel-scripts.com que no registra nada útil —los
 * endpoints de verdad los sirve la plataforma— y encima cualquier bloqueador
 * de anuncios lo tumba y deja un aviso en consola en cada `ng serve`.
 * Para depurar la integración en local, quita el `if`.
 *
 * En el panel de Vercel hay que tener Web Analytics habilitado para el
 * proyecto; si no, los datos llegan y se descartan.
 */
if (!isDevMode()) {
  inyectarAnalitica({ framework: 'angular' });
}

platformBrowser()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
  .catch((err) => console.error(err));
