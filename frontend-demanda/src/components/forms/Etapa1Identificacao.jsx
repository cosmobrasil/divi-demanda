export default function Etapa1Identificacao({ dados, onChange }) {
  const campos = [
    { key: 'nome_empresa', label: 'Nome da Empresa', placeholder: 'Ex: Construtora ABC Ltda', required: true },
    { key: 'tipologia_atividade', label: 'Tipologia de Atividade Principal', placeholder: 'Ex: Incorporadora, Empreiteira, Prestadora de Serviços...', required: true },
    { key: 'contato', label: 'Nome para Contato', placeholder: 'Nome do responsável', required: true },
    { key: 'telefone', label: 'Telefone', placeholder: '(37) 99999-0000', required: false },
  ]

  return (
    <div className="space-y-5">
      {campos.map(({ key, label, placeholder, required }) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            value={dados[key]}
            onChange={e => onChange(key, e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      ))}
    </div>
  )
}
