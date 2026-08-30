import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { I18nService } from '../core/i18n.service';

interface Fila {
  pos: number;
  nombre: string;
  marca: string;
  tier: 'rx_plus' | 'rx' | 'scaled';
  pts: number;
}

/**
 * Maqueta del teléfono del hero. Va rotando entre las tres pantallas de la app
 * (Hoy, Ranking y PRs). El temporizador corre fuera de la zona de Angular y
 * solo entra a ella para cambiar la señal, que es lo único que repinta.
 */
@Component({
  selector: 'app-telefono',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './telefono.component.html',
  styleUrl: './telefono.component.css',
})
export class TelefonoComponent implements OnInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly i18n = inject(I18nService);
  private reloj?: ReturnType<typeof setInterval>;

  readonly idioma = this.i18n.idioma;
  readonly pantalla = signal(0);

  readonly pestanas = [
    { es: 'Hoy', en: 'Today' },
    { es: 'Ranking', en: 'Leaderboard' },
    { es: 'PRs', en: 'PRs' },
  ];

  readonly bloques = [
    { tipo: 'WARM-UP', color: '#9AA1B1', titulo: '3 rondas', detalle: '10 air squats · 10 pass-through · 200 m row' },
    { tipo: 'FUERZA', color: '#1565FF', titulo: 'Back squat', detalle: '5-5-5-3-3 · 80 % de tu 1RM' },
    { tipo: 'WOD', color: '#00C853', titulo: 'AMRAP 12', detalle: '9 thrusters 43 kg · 12 pull-ups · 15 cal row' },
    { tipo: 'WOD+', color: '#FFC400', titulo: 'AMRAP 12 RX+', detalle: '9 thrusters 52 kg · 12 C2B · 15 cal row' },
  ];

  readonly ranking: Fila[] = [
    { pos: 1, nombre: 'D. Solórzano', marca: '7 + 14', tier: 'rx_plus', pts: 100 },
    { pos: 2, nombre: 'M. Cabrera', marca: '7 + 03', tier: 'rx_plus', pts: 96 },
    { pos: 3, nombre: 'A. Recinos', marca: '8 + 21', tier: 'rx', pts: 92 },
    { pos: 4, nombre: 'K. Estrada', marca: '7 + 19', tier: 'rx', pts: 88 },
    { pos: 5, nombre: 'J. Pérez', marca: '9 + 02', tier: 'scaled', pts: 85 },
  ];

  readonly records = [
    { nombre: 'Clean & Jerk', valor: '102 kg', delta: '+4', ancho: 92 },
    { nombre: 'Snatch', valor: '78 kg', delta: '+2', ancho: 74 },
    { nombre: 'Back squat', valor: '150 kg', delta: '+7', ancho: 100 },
    { nombre: 'Fran', valor: '3:41', delta: '−12 s', ancho: 66 },
  ];

  ngOnInit(): void {
    const reducido =
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido) return;

    this.zone.runOutsideAngular(() => {
      this.reloj = setInterval(() => {
        this.zone.run(() => this.pantalla.update((p) => (p + 1) % 3));
      }, 4200);
    });
  }

  ir(indice: number): void {
    this.pantalla.set(indice);
  }

  colorTier(tier: Fila['tier']): string {
    return tier === 'rx_plus' ? '#FFC400' : tier === 'rx' ? '#00C853' : '#5B8CFF';
  }

  textoTier(tier: Fila['tier']): string {
    return tier === 'rx_plus' ? 'RX+' : tier === 'rx' ? 'RX' : 'SC';
  }

  colorPodio(pos: number): string {
    return pos === 1 ? '#FFC400' : pos === 2 ? '#B9C0CC' : pos === 3 ? '#CD7F32' : '#2A2E3A';
  }

  ngOnDestroy(): void {
    if (this.reloj) clearInterval(this.reloj);
  }
}
