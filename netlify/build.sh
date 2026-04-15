#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLISH_DIR="${ROOT_DIR}/netlify/publish"

rm -rf "$PUBLISH_DIR"
mkdir -p "$PUBLISH_DIR"

echo "1) Copiando portal..."
cp -R "${ROOT_DIR}/portal/." "$PUBLISH_DIR/"

echo "2) Build demanda em /demanda/ ..."
(cd "${ROOT_DIR}/frontend-demanda" && npm run build -- --base=/demanda/ --outDir="${PUBLISH_DIR}/demanda")

echo "3) Build oferta em /oferta/ ..."
(cd "${ROOT_DIR}/frontend-oferta" && npm run build -- --base=/oferta/ --outDir="${PUBLISH_DIR}/oferta")

echo "4) Redirects SPA..."
cat > "${PUBLISH_DIR}/_redirects" <<'EOF'
/demanda/*  /demanda/index.html  200
/oferta/*   /oferta/index.html   200
EOF

echo
echo "OK: ${PUBLISH_DIR}"

