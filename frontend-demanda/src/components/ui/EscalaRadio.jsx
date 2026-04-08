export default function EscalaRadio({ label, name, value, onChange, labels = ['Baixo', 'Médio', 'Alto'] }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-700 flex-1">{label}</span>
      <div className="flex gap-2">
        {[1, 2, 3].map((nivel, i) => (
          <button
            key={nivel}
            type="button"
            onClick={() => onChange(name, nivel)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all
              ${value === nivel
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600'
              }
            `}
          >
            {labels[i]}
          </button>
        ))}
      </div>
    </div>
  )
}
