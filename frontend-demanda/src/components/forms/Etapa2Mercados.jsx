import CheckboxGroup from '../ui/CheckboxGroup'
import { MERCADOS } from '../../constants/dados'

export default function Etapa2Mercados({ dados, onToggle }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Selecione os mercados em que sua empresa atua ou pretende atuar.
      </p>
      <CheckboxGroup
        opcoes={MERCADOS}
        selecionados={dados.mercados}
        onToggle={onToggle}
      />
    </div>
  )
}
