import { useState } from 'react'

const estadoInicial = {
  cnpj: '',
  nome_instituicao: '',
  tipologia_atividade: '',
  contato: '',
  telefone: '',
  tipo_instituicao: '',
  investimentos: {},
  fontes_financiamento: {
    recursos_proprios: false,
    bancos_publicos: false,
    bancos_privados: false,
    bndes: false,
    outras: false,
  },
  ofertas: {},
}

export function useFormulario() {
  const [dados, setDados] = useState(estadoInicial)
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(null)

  function atualizarCampo(campo, valor) {
    setDados(prev => ({ ...prev, [campo]: valor }))
  }

  function atualizarNested(campo, chave, valor) {
    setDados(prev => ({
      ...prev,
      [campo]: { ...prev[campo], [chave]: valor },
    }))
  }

  function atualizarOferta(itemCodigo, servicoCodigo, nivel) {
    const chave = `${itemCodigo}__${servicoCodigo}`
    setDados(prev => ({
      ...prev,
      ofertas: { ...prev.ofertas, [chave]: nivel },
    }))
  }

  function definirTipoInstituicao(valor) {
    setDados(prev => ({ ...prev, tipo_instituicao: valor }))
  }

  async function submeter() {
    setEnviando(true)
    setErro(null)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setEnviado(true)
      return true
    } catch {
      setErro('Erro ao enviar. Tente novamente.')
      return false
    } finally {
      setEnviando(false)
    }
  }

  function definirErro(mensagem) {
    setErro(mensagem)
  }

  function preencherDadosEmpresa(payload) {
    const razao = payload?.razao || ''
    const fantasia = payload?.fantasia || ''
    const ddd = payload?.ddd_1 || ''
    const tel = payload?.tel_1 || ''

    setDados(prev => ({
      ...prev,
      nome_instituicao: prev.nome_instituicao || fantasia || razao,
      telefone: prev.telefone || (ddd && tel ? `(${ddd}) ${tel}` : ''),
      tipologia_atividade: prev.tipologia_atividade || (payload?.cnae_principal ? `CNAE: ${payload.cnae_principal}` : ''),
    }))
  }

  return {
    dados,
    enviando,
    enviado,
    erro,
    atualizarCampo,
    atualizarNested,
    atualizarOferta,
    definirTipoInstituicao,
    submeter,
    definirErro,
    preencherDadosEmpresa,
  }
}
