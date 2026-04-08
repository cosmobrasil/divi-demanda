export default function CheckboxGroup({ titulo, opcoes, selecionados, onToggle }) {
  return (
    <div className="space-y-3">
      {titulo && <p className="text-sm font-medium text-gray-600 mb-3">{titulo}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {opcoes.map(op => {
          const marcado = selecionados.includes(op.value)
          return (
            <button
              key={op.value}
              type="button"
              onClick={() => onToggle(op.value)}
              className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all
                ${marcado
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-blue-300'
                }
              `}
            >
              <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border transition-colors
                ${marcado ? 'bg-blue-600 border-blue-600' : 'border-gray-400'}
              `}>
                {marcado && <span className="text-white text-xs">✓</span>}
              </div>
              <span className="text-sm font-medium">{op.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
