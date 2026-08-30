import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/** Título, descripción y canónica por ruta. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  poner(titulo: string, descripcion: string): void {
    this.title.setTitle(titulo);
    this.meta.updateTag({ name: 'description', content: descripcion });
    this.meta.updateTag({ property: 'og:title', content: titulo });
    this.meta.updateTag({ property: 'og:description', content: descripcion });

    const url = this.doc.defaultView?.location.href.split('?')[0];
    if (!url) return;
    let enlace = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!enlace) {
      enlace = this.doc.createElement('link');
      enlace.rel = 'canonical';
      this.doc.head.appendChild(enlace);
    }
    enlace.href = url;
  }
}
