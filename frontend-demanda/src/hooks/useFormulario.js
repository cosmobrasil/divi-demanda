import { useState } from 'react'
import { estadoInicial, ETAPAS } from '../constants/dados'

export function useFormulario() {
  const [etapa, setEtapa] = useState(0)
  const [dados, setDados] = useState(estadoInicial)
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(null)

  const totalEtapas = ETAPAS.length

  function atualizarCampo(campo, valor) {
    setDados(prev => ({ ...prev, [campo]: valor }))
  }

  function atualizarNested(campo, chave, valor) {
    setDados(prev => ({
      ...prev,
      [campo]: { ...prev[campo], [chave]: valor },
    }))
  }

  function atualizarNecessidade(solucao, servico, nivel) {
    const chave = `${solucao}__${servico}`
    setDados(prev => ({
      ...prev,
      necessidades: { ...prev.necessidades, [chave]: nivel },
    }))
  }

  function toggleMercado(valor) {
    setDados(prev => {
      const existe = prev.mercados.includes(valor)
      return {
        ...prev,
        mercados: existe
          ? prev.mercados.filter(m => m !== valor)
          : [...prev.mercados, valor],
      }
    })
  }

  function proximo() {
    if (etapa < totalEtapas - 1) setEtapa(e => e + 1)
  }

  function anterior() {
    if (etapa > 0) setEtapa(e => e - 1)
  }

  async function submeter() {
    setEnviando(true)
    setErro(null)
    // Por ora, simula envio (backend será integrado depois)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setEnviado(true)
    } catch {
      setErro('Erro ao enviar. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  return {
    etapa,
    dados,
    enviando,
    enviado,
    erro,
    totalEtapas,
    atualizarCampo,
    atualizarNested,
    atualizarNecessidade,
    toggleMercado,
    proximo,
    anterior,
    submeter,
  }
}
