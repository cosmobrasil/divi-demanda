import EscalaRadio from './EscalaRadio'
import { SERVICOS, LABELS_OFERTA } from '../../constants/dados'

export default function SolucaoCard({ item, ofertas, onChangeOferta }) {
  return (
    <div className="border border-slate-200 rounded-3xl bg-white overflow-hidden shadow-sm">
      <div className="flex gap-3 p-4 sm:p-5 bg-[#fffaf3] border-b border-slate-200">
        <div className="w-9 h-9 rounded-full bg-[#d97706] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 shadow-md shadow-orange-950/15">
          {item.numero}
        </div>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">{item.descricao}</p>
      </div>

      <div className="px-4 sm:px-5 pb-3">
        <p className="text-xs font-bold text-[#c2410c] uppercase tracking-[0.18em] mt-3 mb-2">
          Nível de oferta de serviços:
        </p>
        {SERVICOS.map(serv => {
          const chave = `${item.codigo}__${serv.codigo}`
          return (
            <EscalaRadio
              key={chave}
              label={serv.nome}
              name={chave}
              value={ofertas[chave] || null}
              onChange={(_, val) => onChangeOferta(item.codigo, serv.codigo, val)}
              labels={LABELS_OFERTA}
            />
          )
        })}
      </div>
    </div>
  )
}
