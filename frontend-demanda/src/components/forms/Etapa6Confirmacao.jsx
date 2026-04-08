import { SOLUCOES, SERVICOS, MERCADOS, FONTES_FINANCIAMENTO, LABELS_INVESTIMENTO, LABELS_NECESSIDADE } from '../../constants/dados'

function Linha({ label, valor }) {
  return (
    <div className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm text-gray-800 font-medium text-right max-w-[60%]">{valor || '—'}</span>
    </div>
  )
}

function SecaoResumo({ titulo, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{titulo}</h3>
      </div>
      <div className="px-4 py-1">{children}</div>
    </div>
  )
}

export default function Etapa6Confirmacao({ dados }) {
  const mercadosLabel = dados.mercados
    .map(m => MERCADOS.find(x => x.value === m)?.label)
    .filter(Boolean)
    .join(', ')

  const fontesAtivas = Object.entries(dados.fontes_financiamento)
    .filter(([, v]) => v)
    .map(([k]) => FONTES_FINANCIAMENTO.find(f => f.value === k)?.label)
    .filter(Boolean)
    .join(', ')

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Revise suas respostas antes de enviar.
      </p>

      <SecaoResumo titulo="Identificação">
        <Linha label="Empresa" valor={dados.nome_empresa} />
        <Linha label="Tipologia" valor={dados.tipologia_atividade} />
        <Linha label="Contato" valor={dados.contato} />
        <Linha label="Telefone" valor={dados.telefone} />
      </SecaoResumo>

      <SecaoResumo titulo="Mercados">
        <Linha label="Mercados de atuação" valor={mercadosLabel || 'Nenhum selecionado'} />
      </SecaoResumo>

      <SecaoResumo titulo="Investimentos Futuros (3 anos)">
        {SOLUCOES.map(sol => (
          <Linha
            key={sol.codigo}
            label={sol.megatendencia}
            valor={dados.investimentos[sol.codigo]
              ? LABELS_INVESTIMENTO[dados.investimentos[sol.codigo] - 1]
              : '—'}
          />
        ))}
      </SecaoResumo>

      <SecaoResumo titulo="Fontes de Financiamento">
        <Linha label="Fontes selecionadas" valor={fontesAtivas || 'Nenhuma'} />
      </SecaoResumo>

      <SecaoResumo titulo="Necessidade de Serviços">
        {SOLUCOES.map(sol => (
          <div key={sol.codigo} className="py-2">
            <p className="text-xs font-semibold text-gray-600 mb-1">{sol.megatendencia}</p>
            {SERVICOS.map(serv => {
              const chave = `${sol.codigo}__${serv.codigo}`
              const nivel = dados.necessidades[chave]
              return (
                <Linha
                  key={chave}
                  label={serv.nome}
                  valor={nivel ? LABELS_NECESSIDADE[nivel - 1] : '—'}
                />
              )
            })}
          </div>
        ))}
      </SecaoResumo>
    </div>
  )
}
