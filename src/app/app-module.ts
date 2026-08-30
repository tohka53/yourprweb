import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Directivas
import { RevelarDirective } from './core/revelar.directive';
import { ContadorDirective } from './core/contador.directive';
import { HaloDirective } from './core/halo.directive';
import { ParallaxDirective } from './core/parallax.directive';

// Compartidos
import { LogoComponent } from './compartido/logo.component';
import { MarcaComponent } from './compartido/marca.component';
import { IconoComponent } from './compartido/icono.component';
import { EncabezadoComponent } from './compartido/encabezado.component';
import { PieComponent } from './compartido/pie.component';
import { TiendasComponent } from './compartido/tiendas.component';
import { TelefonoComponent } from './compartido/telefono.component';
import { ContactoComponent } from './compartido/contacto.component';

// Páginas
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LegalComponent } from './paginas/legal/legal.component';
import { NoEncontradaComponent } from './paginas/no-encontrada/no-encontrada.component';

@NgModule({
  declarations: [
    App,
    RevelarDirective,
    ContadorDirective,
    HaloDirective,
    ParallaxDirective,
    LogoComponent,
    MarcaComponent,
    IconoComponent,
    EncabezadoComponent,
    PieComponent,
    TiendasComponent,
    TelefonoComponent,
    ContactoComponent,
    InicioComponent,
    LegalComponent,
    NoEncontradaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withFetch())],
  bootstrap: [App],
})
export class AppModule {}
