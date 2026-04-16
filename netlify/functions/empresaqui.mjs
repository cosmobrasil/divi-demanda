export const handler = async (event) => {
  const token =
    process.env.EMPRESAQUI_TOKEN ||
    process.env.EMPRESAQUI_API_KEY ||
    process.env.EMPRESAQUI_API_TOKEN ||
    ''

  if (!token) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({
        error:
          'EmpresaQui token not set. Configure EMPRESAQUI_TOKEN or EMPRESAQUI_API_KEY.',
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

  const upstream = `https://www.empresaqui.com.br/api/${encodeURIComponent(token)}/${encodeURIComponent(cnpj)}`

  let res
  let body
  try {
    const controller = new AbortController()
    const t = setTimeout(() => controller.abort(), 8000)
    res = await fetch(upstream, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'netlify-function',
        Accept: 'application/json,text/plain,*/*',
      },
    })
    clearTimeout(t)
    body = await res.text()
  } catch (e) {
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({
        error: 'Upstream fetch failed',
        detail: e?.name === 'AbortError' ? 'timeout' : (e?.message || String(e)),
      }),
    }
  }

  return {
    statusCode: res.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body,
  }
}
