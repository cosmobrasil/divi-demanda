export const handler = async (event) => {
  const token =
    process.env.EMPRESAQUI_TOKEN ||
    process.env.EMPRESAQUI_API_KEY ||
    process.env.EMPRESAQUI_API_TOKEN ||
    ''
  const baseUrl =
    process.env.EMPRESAQUI_API_URL ||
    'https://www.empresaqui.com.br/api'

  if (!token) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({
        error:
          'EmpresaQui token not set. Configure EMPRESAQUI_TOKEN (legacy) or EMPRESAQUI_API_KEY.',
      }),
    }
  }

  const cnpj = String(event.queryStringParameters?.cnpj || '').replace(/\D/g, '')
  if (cnpj.length !== 14) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ error: 'Invalid CNPJ' }),
    }
  }

  const base = String(baseUrl).replace(/\/+$/, '')
  const upstream = `${base}/${encodeURIComponent(token)}/${encodeURIComponent(cnpj)}`
  const res = await fetch(upstream, { headers: { 'User-Agent': 'netlify-function' } })
  const body = await res.text()

  return {
    statusCode: res.status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    body,
  }
}
