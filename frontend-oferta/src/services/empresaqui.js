import { normalizarCnpj } from '../utils/cnpj'

const DEV_BASE_URL = '/api/empresaqui'
const PROD_FUNCTION_URL = '/.netlify/functions/empresaqui'

export async function buscarEmpresaPorCnpj({ cnpj, signal } = {}) {
  const cnpjLimpo = normalizarCnpj(cnpj)
  if (!cnpjLimpo) throw new Error('CNPJ não informado.')

  const url = import.meta.env.PROD
    ? `${PROD_FUNCTION_URL}?cnpj=${encodeURIComponent(cnpjLimpo)}`
    : `${DEV_BASE_URL}/${encodeURIComponent(cnpjLimpo)}`
  const res = await fetch(url, { signal })
  const text = await res.text()

  if (!res.ok) {
    if (import.meta.env.PROD && res.status === 404) {
      throw new Error('Consulta por CNPJ indisponível neste deploy. (Netlify Function não configurada)')
    }
    const msg = text?.trim() ? text.trim() : `HTTP ${res.status}`
    throw new Error(`Falha ao consultar CNPJ: ${msg}`)
  }

  let json
  try {
    json = JSON.parse(text)
  } catch {
    throw new Error('Resposta da EmpresaQui não é JSON válido.')
  }

  return json
}
