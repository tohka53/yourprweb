import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { LegalComponent } from './paginas/legal/legal.component';
import { NoEncontradaComponent } from './paginas/no-encontrada/no-encontrada.component';

/**
 * Las rutas en inglés no son otra página: apuntan al mismo componente y solo
 * fuerzan el idioma. Sirven para poder darle a Google Play y a App Store una
 * URL en inglés (/privacy, /delete-account) sin duplicar contenido.
 */
const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },

  { path: 'privacidad', component: LegalComponent, data: { cual: 'privacidad' } },
  { path: 'privacy', component: LegalComponent, data: { cual: 'privacidad', idioma: 'en' } },

  { path: 'eliminar-cuenta', component: LegalComponent, data: { cual: 'eliminar' } },
  { path: 'delete-account', component: LegalComponent, data: { cual: 'eliminar', idioma: 'en' } },

  { path: 'soporte', component: LegalComponent, data: { cual: 'soporte' } },
  { path: 'support', component: LegalComponent, data: { cual: 'soporte', idioma: 'en' } },

  { path: '**', component: NoEncontradaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // La barra fija mide 64 px: sin esto el ancla queda debajo del header.
      scrollOffset: [0, 80],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
