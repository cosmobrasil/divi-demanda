import EscalaRadio from '../ui/EscalaRadio'
import { SOLUCOES, LABELS_INVESTIMENTO } from '../../constants/dados'

const COR_BADGE = {
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  green: 'bg-green-100 text-green-700',
}

export default function Etapa3Investimentos({ dados, onChange }) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">
        Indique o nível de investimento que sua empresa pretende realizar
        em cada solução tecnológica <strong>nos próximos 3 anos</strong>.
      </p>

      {SOLUCOES.map(sol => (
        <div key={sol.codigo} className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="mb-3">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${COR_BADGE[sol.cor]}`}>
              {sol.megatendencia}
            </span>
            <p className="text-sm text-gray-700 mt-2">{sol.nome}</p>
          </div>
          <EscalaRadio
            label="Nível de investimento"
            name={sol.codigo}
            value={dados.investimentos[sol.codigo]}
            onChange={(_, val) => onChange('investimentos', sol.codigo, val)}
            labels={LABELS_INVESTIMENTO}
          />
        </div>
      ))}
    </div>
  )
}
