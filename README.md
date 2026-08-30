# yourpr · web

Landing, política de privacidad, página de eliminación de cuenta y soporte de
**yourpr**. Angular 20 con NgModules (`standalone: false`) + Tailwind 4,
desplegado en Vercel. La app Flutter vive en su propio proyecto y se sirve bajo
`/app/` (ver más abajo).

Un producto de [Tech Solutions GT](https://www.techsolutionsgt.dev/).

---

## Arrancar

```bash
npm install
npm start          # http://localhost:4200
npm run build      # dist/web/browser
```

> **`postcss.config.json` no es opcional.** Es lo que hace que Angular corra
> Tailwind. Si falta, el sitio compila igual pero sale sin estilos: fuentes con
> serifas, sin colores y sin layout, porque `styles.css` se sirve crudo y todas
> las `var(--color-*)` quedan sin resolver. Ojo al copiar el proyecto con
> `cp *`, que se salta los archivos ocultos.

Node 20 o más nuevo.

---

## Qué hay dentro

| Ruta | Qué es | Para qué |
|---|---|---|
| `/` | Landing | Producto, funciones, competencias, descarga y contacto |
| `/app/` | App Flutter | El botón **Entrar** del header apunta acá. Va con `href` y no con `routerLink`: necesita recarga completa para salir del bundle de Angular |
| `/privacidad` · `/privacy` | Política de privacidad | **Obligatoria** en App Store Connect y Google Play Console |
| `/eliminar-cuenta` · `/delete-account` | Eliminar tu cuenta | **Obligatoria** para Google Play (URL de borrado de cuenta) |
| `/soporte` · `/support` | Soporte | URL de soporte de la ficha de App Store |

Las rutas en inglés no son otra página: apuntan al mismo componente y solo
fuerzan el idioma. Sirven para darle a los dos portales una URL en inglés sin
duplicar contenido.

### Las URLs que hay que pegar en los portales

Sustituye el dominio por el definitivo:

```
Privacidad       https://<dominio>/privacidad
Eliminar cuenta  https://<dominio>/eliminar-cuenta
Soporte          https://<dominio>/soporte
```

---

## Idiomas

Español e inglés, con el selector del header. Es traducción en **tiempo de
ejecución**: un solo bundle sirve los dos idiomas, así que cambiar de idioma no
recarga nada.

- Los textos viven en `src/app/core/i18n.es.ts` e `i18n.en.ts`.
- Los legales, en `legal.es.ts` y `legal.en.ts`.
- El español es el idioma de referencia: `Textos = typeof es`, así que si
  agregas una clave en el español, TypeScript no compila hasta que la agregues
  también en inglés.
- El idioma inicial sale de, en este orden: `?lang=es|en` → lo guardado en
  `localStorage` → el idioma del navegador → español.

En las plantillas se usa `{{ t().hero.titulo1 }}`. `t` es un `computed`, y al
leerlo dentro de la vista Angular repinta solo lo que depende del idioma.

---

## Formulario de contacto

Va sobre [FormSubmit](https://formsubmit.co) (gratis, sin servidor propio).
Está en `src/app/compartido/contacto.component.ts`.

> **El primer envío no llega al buzón.** FormSubmit manda un correo de
> confirmación a `mcabreracto@techsolutionsgt.dev` con un enlace de activación.
> Ábrelo una vez —desde el sitio ya desplegado— y a partir de ahí todos los
> envíos entran solos.

Cuando lo actives, FormSubmit te da un **alias** para no publicar el correo en
el HTML. Cambia solo esta línea:

```ts
const DESTINO = 'mcabreracto@techsolutionsgt.dev';   // → 'tualias'
```

El formulario ya trae honeypot (`_honey`) contra bots, validación en cliente y
estados de enviando / éxito / error.

---

## Servir la app Flutter en `/app/`

El landing manda en la raíz y la app web queda en `/app/`, igual que en
miatracker.

```bash
export SUPABASE_URL=https://mlpdqxpdvxhpsgspkccn.supabase.co
export SUPABASE_ANON_KEY=tu_publishable_key
export APP_FLUTTER=~/Desktop/Github/yourprweb/yourprweb/yourpr   # dónde está el proyecto Flutter

npm run build:todo     # compila Flutter web → public/app/ y luego Angular
```

`copiar-app-flutter.sh` compila con `--base-href /app/`, que es obligatorio: sin
eso Flutter pide sus propios assets a la raíz del landing y no carga nada.

`vercel.json` ya excluye `/app/` del rewrite del SPA, así que las rutas de la
app Flutter no se las come el router de Angular.

**`public/app/` sí se versiona** (unos 42 MB). No es lo ideal, pero el runner de
Vercel no trae Flutter: si se ignorara, el deploy saldría sin `/app/` y el botón
de Entrar daría 404. Cuando el tamaño moleste, la alternativa es desplegar la
app Flutter como su propio proyecto de Vercel y cambiar el rewrite por uno
externo — al ser rewrite y no redirect el origen no cambia, así que la sesión de
Supabase sigue funcionando:

```json
{ "source": "/app/:ruta*", "destination": "https://yourpr-app.vercel.app/:ruta*" }
```

Dos detalles de caché que ya están resueltos en `vercel.json`:

- Los archivos de Flutter **no llevan hash** en el nombre (`main.dart.js` se
  llama igual en cada build), así que `/app/` va con `max-age=0,
  must-revalidate`. Si se cachearan como inmutables, quien ya abrió la app se
  quedaría con la versión vieja para siempre.
- El build de Flutter arrastra `web/legal/` del proyecto Flutter, que son las
  páginas legales viejas con el correo anterior. Quedarían públicas en
  `/app/legal/`, así que hay redirects a `/privacidad` y `/soporte`. Borrarlas
  no sirve: el siguiente `flutter build web` las repone.

---

## Desplegar en Vercel

Un solo proyecto apuntando a este directorio:

| Ajuste | Valor |
|---|---|
| Root Directory | la raíz del repo |
| Framework Preset | Other |
| Build Command | `npm run build` |
| Output Directory | `dist/web/browser` |
| Install Command | `npm install` |

Todo eso ya está en `vercel.json`, así que normalmente no hay que tocar nada.

Si quieres que el deploy incluya la app Flutter, cambia el build command a
`npm run build:todo` y define `SUPABASE_URL` y `SUPABASE_ANON_KEY` como
variables de entorno del proyecto — pero ojo: el runner de Vercel no trae
Flutter, así que lo normal es compilar la app en local y subir `public/app/`
como parte del repo, o hacerlo en un workflow aparte.

---

## Marca

La paleta y el logo salen de la app, no son inventados aquí:

- Los colores replican `lib/src/core/theme/app_colors.dart`; están como tokens
  de Tailwind en `src/styles.css` (`@theme`).
- El logo SVG de `src/app/compartido/logo.component.ts` es la misma geometría
  de `lib/src/core/marca/yp_logo.dart` del proyecto Flutter, portada de la caja de 1000×1000. Si
  tocas una constante en el Dart, tócala aquí también o el ícono de las tiendas
  y el del sitio dejan de coincidir.
- Tipografías: Barlow Condensed para títulos, Inter para el cuerpo.

---

## Animación

Casi todo es CSS. Lo que necesita JS son cuatro directivas en `src/app/core/`,
y las tres que observan corren **fuera de la zona de Angular** para no disparar
detección de cambios en cada cuadro:

| Directiva | Qué hace |
|---|---|
| `appRevelar` | Aparición al entrar en pantalla, con `[retraso]` para escalonar |
| `appContador` | Cuenta de 0 al número, una sola vez |
| `appHalo` | Halo que sigue al puntero en las tarjetas |
| `appParallax` | Desplazamiento suave contra el scroll |

Todo respeta `prefers-reduced-motion: reduce`.

---

## Detalles del build

- **Inlining de fuentes apagado** (`optimization.fonts: false` en
  `angular.json`). Angular lo hace descargando Google Fonts *durante el build*,
  así que en cualquier entorno sin salida a `fonts.googleapis.com` el build
  falla entero. Las fuentes se piden en runtime con el `preconnect` que ya
  está en `index.html`.
- Bundle inicial: ~124 kB transferidos.
