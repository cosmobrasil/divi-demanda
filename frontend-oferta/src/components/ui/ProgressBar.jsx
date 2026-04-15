import { ETAPAS } from '../../constants/dados'

export default function ProgressBar({ etapaAtual }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {ETAPAS.map((nome, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
                ${i < etapaAtual ? 'bg-[#d97706] text-white' : ''}
                ${i === etapaAtual ? 'bg-[#d97706] text-white ring-4 ring-orange-100' : ''}
                ${i > etapaAtual ? 'bg-slate-200 text-slate-500' : ''}
              `}
            >
              {i < etapaAtual ? '✓' : i + 1}
            </div>
            <span className={`text-[11px] mt-1 hidden sm:block text-center leading-tight
              ${i === etapaAtual ? 'text-[#d97706] font-semibold' : 'text-slate-400'}
            `}>
              {nome}
            </span>
          </div>
        ))}
      </div>
      <div className="relative h-1 bg-slate-200 rounded-full mx-4">
        <div
          className="absolute top-0 left-0 h-1 bg-[#d97706] rounded-full transition-all duration-500"
          style={{ width: `${(etapaAtual / (ETAPAS.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
