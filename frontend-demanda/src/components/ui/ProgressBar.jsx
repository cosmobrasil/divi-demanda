import { ETAPAS } from '../../constants/dados'

export default function ProgressBar({ etapaAtual }) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        {ETAPAS.map((nome, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
                ${i < etapaAtual ? 'bg-blue-600 text-white' : ''}
                ${i === etapaAtual ? 'bg-blue-600 text-white ring-4 ring-blue-100' : ''}
                ${i > etapaAtual ? 'bg-gray-200 text-gray-500' : ''}
              `}
            >
              {i < etapaAtual ? '✓' : i + 1}
            </div>
            <span className={`text-xs mt-1 hidden sm:block text-center leading-tight
              ${i === etapaAtual ? 'text-blue-600 font-medium' : 'text-gray-400'}
            `}>
              {nome}
            </span>
          </div>
        ))}
      </div>
      <div className="relative h-1 bg-gray-200 rounded-full mx-4">
        <div
          className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${(etapaAtual / (ETAPAS.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
