#!/usr/bin/env bash
# Compila la app Flutter para web y la deja bajo public/app/, que es de donde
# el build de Angular la copia a dist. Después de correr esto, la app queda
# servida en https://<dominio>/app/ y el landing sigue en la raíz.
#
#   npm run build:todo
#
# El proyecto Flutter no vive dentro de este repo, así que hay que decirle
# dónde está. Por defecto busca ../yourpr; si lo tienes en otro lado:
#
#   APP_FLUTTER=~/Desktop/Github/yourpr npm run build:todo
#
# El --base-href es obligatorio: sin él, Flutter genera rutas absolutas a "/"
# y la app pide sus propios assets a la raíz del landing.
set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP="${APP_FLUTTER:-$RAIZ/../yourpr}"
DESTINO="$RAIZ/public/app"

if [ ! -f "$APP/pubspec.yaml" ]; then
  echo "No encuentro el proyecto Flutter en: $APP" >&2
  echo "Exporta APP_FLUTTER con la ruta correcta, por ejemplo:" >&2
  echo "  APP_FLUTTER=~/Desktop/Github/yourprweb/yourprweb/yourpr npm run build:todo" >&2
  exit 1
fi

: "${SUPABASE_URL:?Exporta SUPABASE_URL antes de compilar}"
: "${SUPABASE_ANON_KEY:?Exporta SUPABASE_ANON_KEY antes de compilar}"

echo "→ Compilando Flutter web desde $APP"
cd "$APP"
flutter build web --release \
  --base-href /app/ \
  --dart-define=SUPABASE_URL="$SUPABASE_URL" \
  --dart-define=SUPABASE_ANON_KEY="$SUPABASE_ANON_KEY"

echo "→ Copiando a $DESTINO"
rm -rf "$DESTINO"
mkdir -p "$DESTINO"
cp -R "$APP/build/web/." "$DESTINO/"

echo "✔ Listo. 'npm run build' ya incluye /app/."
