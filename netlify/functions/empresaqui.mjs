export const handler = async (event) => {
  const token = process.env.EMPRESAQUI_TOKEN || ''
  if (!token) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ error: 'EMPRESAQUI_TOKEN not set' }),
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

  const upstream = `https://www.empresaqui.com.br/api/${encodeURIComponent(token)}/${encodeURIComponent(cnpj)}`
  const res = await fetch(upstream, { headers: { 'User-Agent': 'netlify-function' } })
  const body = await res.text()

  return {
    statusCode: res.status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    body,
  }
}
