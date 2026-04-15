export default function CheckboxGroup({ opcoes, selecionados, onToggle }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {opcoes.map(op => {
        const marcado = selecionados.includes(op.value)
        return (
          <button
            key={op.value}
            type="button"
            onClick={() => onToggle(op.value)}
            className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200
              ${marcado
                ? 'bg-[#fff7ed] border-[#d97706] text-[#7c2d12] shadow-sm'
                : 'bg-white/95 border-slate-200 text-slate-600 hover:border-[#d97706] hover:bg-[#fffaf3]'
              }
            `}
          >
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors
              ${marcado ? 'bg-[#d97706] border-[#d97706]' : 'border-slate-300 bg-white'}
            `}>
              {marcado && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <span className="text-sm sm:text-base font-medium leading-snug">{op.label}</span>
          </button>
        )
      })}
    </div>
  )
}
