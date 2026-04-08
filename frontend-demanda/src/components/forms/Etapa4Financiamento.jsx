import { FONTES_FINANCIAMENTO } from '../../constants/dados'

export default function Etapa4Financiamento({ dados, onChange }) {
  const fontes = dados.fontes_financiamento

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Caso pretenda investir, indique quais fontes de recursos serão utilizadas
        nos <strong>próximos 3 anos</strong>.
      </p>

      <div className="space-y-2">
        {FONTES_FINANCIAMENTO.map(fonte => {
          const ativo = fontes[fonte.value]
          return (
            <button
              key={fonte.value}
              type="button"
              onClick={() => onChange('fontes_financiamento', fonte.value, !ativo)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all
                ${ativo
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                }
              `}
            >
              <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border transition-colors
                ${ativo ? 'bg-blue-600 border-blue-600' : 'border-gray-400'}
              `}>
                {ativo && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className="text-sm font-medium">{fonte.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
