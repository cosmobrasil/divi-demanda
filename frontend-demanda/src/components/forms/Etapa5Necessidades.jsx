import EscalaRadio from '../ui/EscalaRadio'
import { SOLUCOES, SERVICOS, LABELS_NECESSIDADE } from '../../constants/dados'

const COR_HEADER = {
  blue: 'bg-blue-600',
  violet: 'bg-violet-600',
  green: 'bg-green-600',
}

const COR_BADGE = {
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  green: 'bg-green-100 text-green-700',
}

export default function Etapa5Necessidades({ dados, onChange }) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">
        Para cada solução tecnológica, indique o <strong>nível de necessidade</strong> de
        cada tipo de serviço para sua empresa.
      </p>

      {SOLUCOES.map(sol => (
        <div key={sol.codigo} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className={`${COR_HEADER[sol.cor]} px-4 py-3`}>
            <span className="text-white text-xs font-semibold uppercase tracking-wide">
              {sol.megatendencia}
            </span>
            <p className="text-white text-sm mt-0.5 opacity-90">{sol.nome}</p>
          </div>

          <div className="px-4 py-2">
            {SERVICOS.map(serv => {
              const chave = `${sol.codigo}__${serv.codigo}`
              return (
                <EscalaRadio
                  key={chave}
                  label={serv.nome}
                  name={chave}
                  value={dados.necessidades[chave] || null}
                  onChange={(_, val) => onChange(sol.codigo, serv.codigo, val)}
                  labels={LABELS_NECESSIDADE}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
