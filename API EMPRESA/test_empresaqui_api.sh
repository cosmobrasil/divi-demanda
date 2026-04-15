#!/usr/bin/env bash
set -euo pipefail

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" || $# -lt 2 ]]; then
  cat <<'EOF'
Uso:
  ./test_empresaqui_api.sh <TOKEN> <CNPJ_SEM_PONTUACAO>

Exemplo:
  ./test_empresaqui_api.sh abc123 21792257000101
EOF
  exit 1
fi

TOKEN="$1"
CNPJ="$2"
URL="https://www.empresaqui.com.br/api/${TOKEN}/${CNPJ}"
TMP_BODY="$(mktemp)"
trap 'rm -f "$TMP_BODY"' EXIT

echo "Consultando: ${URL/\/$TOKEN\//\/***TOKEN***\/}"

HTTP_CODE="$(
  curl -sS \
    -o "$TMP_BODY" \
    -w "%{http_code}" \
    "$URL"
)"

echo "HTTP: $HTTP_CODE"

if [[ "$HTTP_CODE" -lt 200 || "$HTTP_CODE" -ge 300 ]]; then
  echo "Falha na API. Corpo retornado:"
  cat "$TMP_BODY"
  exit 2
fi

if command -v jq >/dev/null 2>&1; then
  if ! jq -e . "$TMP_BODY" >/dev/null 2>&1; then
    echo "Resposta não é JSON válido:"
    cat "$TMP_BODY"
    exit 3
  fi

  echo "JSON válido."
  echo
  echo "Resumo dos campos principais:"
  jq '{
    cnpj,
    razao,
    fantasia,
    situacao_cadastral,
    data_abertura,
    cnae_principal,
    log_municipio,
    log_uf,
    regime_tributario,
    faturamento,
    quadro_funcionarios
  }' "$TMP_BODY"

  echo
  echo "Checagem de campos obrigatórios (conforme txt):"
  jq -r '
    . as $obj
    | [
        "cnpj",
        "razao",
        "fantasia",
        "email",
        "ddd_1",
        "tel_1",
        "cnae_principal",
        "situacao_cadastral"
      ][]
    | . as $k
    | if ($obj[$k] != null and ($obj[$k] | tostring) != "") then "OK   " + $k else "FALTA " + $k end
  ' "$TMP_BODY"
else
  echo "jq não encontrado. Exibindo resposta bruta:"
  cat "$TMP_BODY"
fi
