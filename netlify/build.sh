#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLISH_DIR="${ROOT_DIR}/netlify/publish"

rm -rf "$PUBLISH_DIR"
mkdir -p "$PUBLISH_DIR"

echo "1) Copiando portal..."
cp -R "${ROOT_DIR}/portal/." "$PUBLISH_DIR/"

echo "2) Instalando dependencias (demanda)..."
(cd "${ROOT_DIR}/frontend-demanda" && npm ci)

echo "3) Instalando dependencias (oferta)..."
(cd "${ROOT_DIR}/frontend-oferta" && npm ci)

echo "4) Build demanda em /demanda/ ..."
(cd "${ROOT_DIR}/frontend-demanda" && npm run build -- --base=/demanda/ --outDir="${PUBLISH_DIR}/demanda")

echo "5) Build oferta em /oferta/ ..."
(cd "${ROOT_DIR}/frontend-oferta" && npm run build -- --base=/oferta/ --outDir="${PUBLISH_DIR}/oferta")

echo "6) Redirects SPA..."
cat > "${PUBLISH_DIR}/_redirects" <<'EOF'
/demanda    /demanda/  301!
/oferta     /oferta/   301!
EOF

echo
echo "OK: ${PUBLISH_DIR}"
