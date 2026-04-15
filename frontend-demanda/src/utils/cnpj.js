export function normalizarCnpj(valor) {
  return String(valor || '').replace(/\D/g, '')
}

// Validador clássico de CNPJ (14 dígitos + dígitos verificadores).
export function validarCnpj(valor) {
  const cnpj = normalizarCnpj(valor)
  if (cnpj.length !== 14) return false
  if (/^(\d)\1{13}$/.test(cnpj)) return false

  const calcDigito = (base, pesos) => {
    let soma = 0
    for (let i = 0; i < pesos.length; i++) soma += Number(base[i]) * pesos[i]
    const resto = soma % 11
    return resto < 2 ? 0 : 11 - resto
  }

  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  const base12 = cnpj.slice(0, 12)
  const d1 = calcDigito(base12, pesos1)
  const base13 = base12 + String(d1)
  const d2 = calcDigito(base13, pesos2)

  return cnpj === base13 + String(d2)
}

