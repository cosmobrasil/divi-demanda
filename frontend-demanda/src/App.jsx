import ProgressBar from './components/ui/ProgressBar'
import Etapa1Identificacao from './components/forms/Etapa1Identificacao'
import Etapa2Mercados from './components/forms/Etapa2Mercados'
import Etapa3Investimentos from './components/forms/Etapa3Investimentos'
import Etapa4Financiamento from './components/forms/Etapa4Financiamento'
import Etapa5Necessidades from './components/forms/Etapa5Necessidades'
import Etapa6Confirmacao from './components/forms/Etapa6Confirmacao'
import { useFormulario } from './hooks/useFormulario'

const TITULOS = [
  'Informações da Empresa',
  'Mercados de Atuação',
  'Investimentos Futuros',
  'Fontes de Financiamento',
  'Necessidade de Serviços Tecnológicos',
  'Confirmação',
]

const SUBTITULOS = [
  'Preencha os dados básicos da sua empresa',
  'Em quais mercados sua empresa atua?',
  'Nos próximos 3 anos, qual o nível de investimento por solução?',
  'Quais fontes de recursos pretende utilizar nos próximos 3 anos?',
  'Qual a necessidade de cada serviço tecnológico por solução?',
  'Verifique os dados antes de enviar',
]

export default function App() {
  const form = useFormulario()

  if (form.enviado) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Respostas enviadas!</h2>
          <p className="text-gray-500 text-sm">
            Obrigado por participar do levantamento de demanda tecnológica para a
            construção civil em Divinópolis/MG.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white py-4 px-4 shadow">
        <div className="max-w-2xl mx-auto">
          <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-0.5">
            Technology Foresight · Construção Civil · Divinópolis/MG
          </p>
          <h1 className="text-lg font-bold leading-tight">
            Levantamento de Demanda por Serviços Tecnológicos
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        <ProgressBar etapaAtual={form.etapa} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Card header */}
          <div className="px-6 pt-6 pb-4 border-b border-gray-100">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
              Etapa {form.etapa + 1} de {form.totalEtapas}
            </p>
            <h2 className="text-lg font-semibold text-gray-800">{TITULOS[form.etapa]}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{SUBTITULOS[form.etapa]}</p>
          </div>

          {/* Card body */}
          <div className="px-6 py-5">
            {form.etapa === 0 && (
              <Etapa1Identificacao dados={form.dados} onChange={form.atualizarCampo} />
            )}
            {form.etapa === 1 && (
              <Etapa2Mercados dados={form.dados} onToggle={form.toggleMercado} />
            )}
            {form.etapa === 2 && (
              <Etapa3Investimentos dados={form.dados} onChange={form.atualizarNested} />
            )}
            {form.etapa === 3 && (
              <Etapa4Financiamento dados={form.dados} onChange={form.atualizarNested} />
            )}
            {form.etapa === 4 && (
              <Etapa5Necessidades dados={form.dados} onChange={form.atualizarNecessidade} />
            )}
            {form.etapa === 5 && (
              <Etapa6Confirmacao dados={form.dados} />
            )}
          </div>

          {/* Card footer */}
          <div className="px-6 pb-6 flex justify-between gap-3">
            <button
              type="button"
              onClick={form.anterior}
              disabled={form.etapa === 0}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium
                         hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>

            {form.etapa < form.totalEtapas - 1 ? (
              <button
                type="button"
                onClick={form.proximo}
                className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium
                           hover:bg-blue-700 transition-colors shadow-sm"
              >
                Próximo
              </button>
            ) : (
              <button
                type="button"
                onClick={form.submeter}
                disabled={form.enviando}
                className="px-6 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium
                           hover:bg-green-700 transition-colors shadow-sm disabled:opacity-60"
              >
                {form.enviando ? 'Enviando...' : 'Enviar Respostas'}
              </button>
            )}
          </div>
        </div>

        {form.erro && (
          <p className="mt-3 text-sm text-red-600 text-center">{form.erro}</p>
        )}

        <p className="text-center text-xs text-gray-400 mt-6">
          Levantamento realizado no âmbito do projeto Technology Foresight ·
          Setor Construção Civil · Divinópolis/MG
        </p>
      </main>
    </div>
  )
}
