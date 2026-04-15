export default function EscalaRadio({ label, name, value, onChange, labels = ['Baixo', 'Médio', 'Alto'] }) {
  const ativo = 'bg-[#d97706] border-[#d97706] text-white shadow-lg shadow-orange-950/20'
  const hover = 'hover:border-[#d97706] hover:text-[#d97706]'

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-b border-slate-100 last:border-0">
      <span className="text-sm sm:text-base text-slate-700 flex-1 leading-snug">{label}</span>
      <div className="flex flex-col items-start sm:items-center gap-1 flex-shrink-0">
        <div className="flex gap-2">
          {[1, 2, 3].map(nivel => (
            <button
              key={nivel}
              type="button"
              onClick={() => onChange(name, nivel)}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 text-sm sm:text-base font-bold transition-all duration-200
                ${value === nivel ? ativo : `bg-white border-slate-300 text-slate-500 ${hover}`}
              `}
            >
              {nivel}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {labels.map((lbl, i) => (
            <span key={i} className="w-10 sm:w-11 text-center text-[10px] sm:text-xs text-slate-400 leading-tight">{lbl}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
