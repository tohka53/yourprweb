import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { I18nService } from '../core/i18n.service';

/**
 * Formulario de contacto sobre FormSubmit (formsubmit.co), que es gratis y no
 * necesita servidor propio: se hace POST al endpoint /ajax/<correo> y ellos
 * reenvían el mensaje.
 *
 * IMPORTANTE — activación: el primer envío no llega al buzón. FormSubmit manda
 * un correo de confirmación a CORREO con un enlace; hay que abrirlo una sola
 * vez y a partir de ahí todos los envíos entran solos.
 *
 * Después de activarlo, FormSubmit da un alias del tipo "xxxxxxxx" para no
 * publicar el correo en el HTML. Cuando lo tengas, cambia DESTINO por ese
 * alias y listo: el resto del componente no cambia.
 */
const DESTINO = 'mcabreracto@techsolutionsgt.dev';
const ENDPOINT = `https://formsubmit.co/ajax/${DESTINO}`;

type Estado = 'inactivo' | 'enviando' | 'exito' | 'error';

@Component({
  selector: 'app-contacto',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(I18nService);

  readonly t = this.i18n.t;
  readonly correo = DESTINO;
  readonly estado = signal<Estado>('inactivo');

  readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    correo: ['', [Validators.required, Validators.email]],
    gimnasio: [''],
    asunto: [''],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
    // Trampa para robots: es invisible y si viene llena, no se envía nada.
    _honey: [''],
  });

  malo(campo: 'nombre' | 'correo' | 'mensaje'): boolean {
    const c = this.form.controls[campo];
    return c.invalid && (c.dirty || c.touched);
  }

  enviar(): void {
    if (this.estado() === 'enviando') return;

    if (this.form.controls._honey.value) {
      // Bot. Fingimos éxito para no darle señal de qué falló.
      this.estado.set('exito');
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const asunto = v.asunto || this.t().contacto.asuntos[0];

    this.estado.set('enviando');
    this.http
      .post(ENDPOINT, {
        _subject: `yourpr · ${asunto}`,
        _template: 'table',
        _captcha: 'false',
        nombre: v.nombre,
        correo: v.correo,
        gimnasio: v.gimnasio || '—',
        motivo: asunto,
        mensaje: v.mensaje,
        idioma: this.i18n.idioma(),
        origen: 'yourpr landing',
      })
      .subscribe({
        next: () => {
          this.estado.set('exito');
          this.form.reset();
        },
        error: () => this.estado.set('error'),
      });
  }
}
