import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

import { es, type Textos } from './i18n.es';
import { en } from './i18n.en';
import { legalEs } from './legal.es';
import { legalEn } from './legal.en';
import type { Legal } from './legal.tipos';

export type Idioma = 'es' | 'en';

const CLAVE = 'yourpr.idioma';

/**
 * Traducción en tiempo de ejecución. Un solo bundle sirve los dos idiomas, así
 * que cambiar de idioma no recarga la página ni descarga nada.
 *
 * En las plantillas se usa `t().hero.titulo1`: al leer la señal dentro de la
 * vista, Angular vuelve a pintar solo lo que depende del idioma.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly doc = inject(DOCUMENT);

  readonly idioma = signal<Idioma>(this.inicial());

  readonly t = computed<Textos>(() => (this.idioma() === 'es' ? es : en));
  readonly legal = computed<Legal>(() => (this.idioma() === 'es' ? legalEs : legalEn));

  constructor() {
    this.aplicarAlDocumento(this.idioma());
  }

  poner(idioma: Idioma): void {
    if (idioma === this.idioma()) return;
    this.idioma.set(idioma);
    this.aplicarAlDocumento(idioma);
    try {
      localStorage.setItem(CLAVE, idioma);
    } catch {
      /* Safari en privado tira al escribir. El idioma sigue vivo en memoria. */
    }
  }

  alternar(): void {
    this.poner(this.idioma() === 'es' ? 'en' : 'es');
  }

  private aplicarAlDocumento(idioma: Idioma): void {
    this.doc.documentElement.lang = idioma;
  }

  /** Preferencia guardada > ?lang= > idioma del navegador > español. */
  private inicial(): Idioma {
    try {
      const query = new URLSearchParams(this.doc.defaultView?.location.search ?? '');
      const forzado = query.get('lang');
      if (forzado === 'es' || forzado === 'en') return forzado;

      const guardado = localStorage.getItem(CLAVE);
      if (guardado === 'es' || guardado === 'en') return guardado;

      const navegador = this.doc.defaultView?.navigator.language ?? 'es';
      return navegador.toLowerCase().startsWith('en') ? 'en' : 'es';
    } catch {
      return 'es';
    }
  }
}
