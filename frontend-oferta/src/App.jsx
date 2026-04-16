import { useState } from 'react'
import CheckboxGroup from './components/ui/CheckboxGroup'
import EscalaRadio from './components/ui/EscalaRadio'
import ProgressBar from './components/ui/ProgressBar'
import SolucaoCard from './components/ui/SolucaoCard'
import SingleSelectCardGroup from './components/ui/SingleSelectCardGroup'
import { buscarEmpresaPorCnpj } from './services/empresaqui'
import { validarCnpj } from './utils/cnpj'
import {
  DESCRICAO_PROJETO,
  ETAPAS,
  FONTES_FINANCIAMENTO,
  LABELS_INVESTIMENTO,
  LABELS_OFERTA,
  SOLUCOES_PRIORITARIAS,
  SERVICOS,
  SOLUCOES,
  SUBTITULO_PROJETO,
  TIPOS_INSTITUICAO,
  TITULO_PROJETO,
} from './constants/dados'
import { useFormulario } from './hooks/useFormulario'

function Container({ children, className = '' }) {
  return (
    <div className={`panel ${className}`}>
      <div className="panel-inner">{children}</div>
    </div>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="space-y-2">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function TextField({ label, placeholder, value, onChange, required = false, error = '', helper = '' }) {
  return (
    <label className="field">
      <span className="field-label">
        {label}{required && <span className="text-[#d97706]"> *</span>}
      </span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`field-input ${error ? 'border-[#b91c1c] focus:border-[#b91c1c] focus:ring-[#b91c1c]/20' : ''}`}
      />
      {helper && <span className="mt-1 text-xs text-slate-500">{helper}</span>}
      {error && (
        <span className="mt-1 text-xs font-medium text-[#b91c1c]" role="alert">
          {error}
        </span>
      )}
    </label>
  )
}

function ActionButton({ variant = 'primary', children, ...props }) {
  return (
    <button
      {...props}
      className={variant === 'primary' ? 'action-primary' : 'action-secondary'}
    >
      {children}
    </button>
  )
}

function StepPill({ index, active, label }) {
  return (
    <div className={`step-pill ${active ? 'step-pill-active' : ''}`}>
      <span className="step-pill-number">{index + 1}</span>
      <span className="step-pill-label">{label}</span>
    </div>
  )
}

function SummaryLine({ label, value }) {
  return (
    <div className="summary-line">
      <span>{label}</span>
      <strong>{value || '—'}</strong>
    </div>
  )
}

export default function App() {
  const form = useFormulario()
  const [etapa, setEtapa] = useState(0)
  const [termosAceitos, setTermosAceitos] = useState(false)
  const [cnpjBuscando, setCnpjBuscando] = useState(false)

  function proxima() {
    setEtapa(prev => Math.min(prev + 1, ETAPAS.length - 1))
  }

  function voltar() {
    setEtapa(prev => Math.max(prev - 1, 0))
  }

  function validarIdentificacao() {
    if (!form.dados.nome_instituicao.trim() || !form.dados.tipologia_atividade.trim()) {
      form.definirErro('Preencha os campos obrigatórios da identificação.')
      return false
    }
    return true
  }

  async function enviar() {
    await form.submeter()
  }

  async function buscarCnpj() {
    form.definirErro(null)
    const cnpj = form.dados.cnpj
    if (!validarCnpj(cnpj)) {
      form.definirErro('CNPJ inválido. Informe 14 dígitos válidos.')
      return
    }

    setCnpjBuscando(true)
    try {
      const payload = await buscarEmpresaPorCnpj({ cnpj })
      form.preencherDadosEmpresa(payload)
    } catch (e) {
      form.definirErro(e?.message || 'Erro ao consultar CNPJ.')
    } finally {
      setCnpjBuscando(false)
    }
  }

  const instituicaoLabel = TIPOS_INSTITUICAO.find(op => op.value === form.dados.tipo_instituicao)?.label
  const erroCnpj =
    form.erro && /cnpj/i.test(form.erro) ? form.erro : ''

  const fontesSelecionadas = Object.entries(form.dados.fontes_financiamento)
    .filter(([, ativo]) => ativo)
    .map(([chave]) => FONTES_FINANCIAMENTO.find(op => op.value === chave)?.label)
    .filter(Boolean)
    .join(', ')

  if (form.enviado) {
    return (
      <div className="app-shell">
        <div className="app-frame">
          <header className="brand-bar">
            <div className="brand-mark">
              <span />
            </div>
            <div>
              <p className="brand-kicker">Circularidade 2.0</p>
              <h1 className="brand-title">{TITULO_PROJETO}</h1>
              <p className="brand-subtitle">{SUBTITULO_PROJETO}</p>
            </div>
          </header>

          <div className="panel mt-6">
            <div className="panel-inner text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff7ed] text-[#d97706] shadow-sm">
                <span className="text-3xl font-bold">✓</span>
              </div>
              <p className="eyebrow justify-center">Relatório gerado</p>
              <h2 className="section-title text-center">Oferta registrada com sucesso</h2>
              <p className="section-description max-w-2xl mx-auto">
                Obrigado por registrar a capacidade de oferta de serviços tecnológicos da instituição para apoio ao setor da construção civil em Divinópolis/MG.
              </p>

              <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
                <Container className="p-0">
                  <div className="panel-inner">
                    <h3 className="mini-title">Identificação</h3>
                    <SummaryLine label="Instituição" value={form.dados.nome_instituicao} />
                    <SummaryLine label="Tipologia" value={form.dados.tipologia_atividade} />
                    <SummaryLine label="Contato" value={form.dados.contato} />
                    <SummaryLine label="Telefone" value={form.dados.telefone} />
                  </div>
                </Container>

                <Container className="p-0">
                  <div className="panel-inner">
                    <h3 className="mini-title">Perfil institucional</h3>
                    <SummaryLine label="Tipo de instituição" value={instituicaoLabel || '—'} />
                    <SummaryLine label="Fontes de recursos" value={fontesSelecionadas || 'Nenhuma selecionada'} />
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <div className="app-frame">
        <header className="brand-bar">
          <div className="brand-mark">
            <span />
          </div>
          <div>
            <p className="brand-kicker">Circularidade 2.0</p>
            <h1 className="brand-title">{TITULO_PROJETO}</h1>
            <p className="brand-subtitle">{SUBTITULO_PROJETO}</p>
          </div>
        </header>

        <div className="panel mt-6">
          <div className="panel-inner">
            <div className="flex flex-col gap-6">
              <SectionTitle
                eyebrow="Fluxo guiado"
                title={ETAPAS[etapa]}
                description={DESCRICAO_PROJETO}
              />
              <ProgressBar etapaAtual={etapa} />
              <div className="flex flex-wrap gap-2">
                {ETAPAS.map((label, index) => (
                  <StepPill key={label} index={index} active={index === etapa} label={label} />
                ))}
              </div>

              {etapa === 0 && (
                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <Container>
                    <SectionTitle
                      eyebrow="Antes de começar"
                      title="Termos e objetivo"
                      description="Este formulário levanta a oferta de conhecimento, serviços e capacidade institucional das entidades de apoio empresarial de Divinópolis/MG para atender às soluções tecnológicas priorizadas pelo setor."
                    />
                    <div className="mt-6 space-y-3 text-sm text-slate-600">
                      <p>• O questionário é institucional e orientado a diagnóstico.</p>
                      <p>• As respostas serão analisadas de forma consolidada.</p>
                      <p>• O fluxo foi desenhado para leitura rápida e progressiva.</p>
                    </div>
                  </Container>

                  <Container>
                    <div className="space-y-4">
                      <div className="notice-box">
                        <p className="notice-title">O que este app coleta</p>
                        <p className="notice-text">
                          Identificação da instituição, perfil institucional, fontes de recursos e nível de oferta de serviços por solução tecnológica.
                        </p>
                      </div>
                      <div className="notice-box notice-box-soft">
                        <p className="notice-title">Tempo estimado</p>
                        <p className="notice-text">O preenchimento é guiado e tem leitura sequencial por blocos.</p>
                      </div>
                      <label className="check-ack">
                        <input
                          type="checkbox"
                          checked={termosAceitos}
                          onChange={e => setTermosAceitos(e.target.checked)}
                        />
                        <span>Li e concordo em prosseguir com o questionário.</span>
                      </label>
                    </div>
                  </Container>
                </div>
              )}

              {etapa === 1 && (
                <Container>
                  <SectionTitle
                    eyebrow="Identificação"
                    title="Dados da instituição"
                    description="Preencha os campos principais de identificação da organização respondente."
                  />
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
                        <TextField
                          label="CNPJ"
                          placeholder="Ex: 21.792.257/0001-01"
                          value={form.dados.cnpj}
                          onChange={v => form.atualizarCampo('cnpj', v)}
                          helper="Digite um CNPJ válido. Se o número estiver errado, o sistema avisa antes de preencher."
                          error={erroCnpj}
                        />
                        <ActionButton
                          variant="secondary"
                          type="button"
                          onClick={buscarCnpj}
                          disabled={cnpjBuscando}
                        >
                          {cnpjBuscando ? 'Buscando...' : 'Buscar CNPJ'}
                        </ActionButton>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        Ao buscar, o app preenche automaticamente nome e telefone quando disponiveis.
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <TextField
                        label="Nome da instituição"
                        placeholder="Ex: Senai, Universidade, empresa de consultoria..."
                        value={form.dados.nome_instituicao}
                        onChange={v => form.atualizarCampo('nome_instituicao', v)}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <TextField
                        label="Tipologia de atividade principal"
                        placeholder="Ex: Instituto de pesquisa, universidade, consultoria..."
                        value={form.dados.tipologia_atividade}
                        onChange={v => form.atualizarCampo('tipologia_atividade', v)}
                        required
                      />
                    </div>
                    <TextField
                      label="Nome para contato"
                      placeholder="Nome do responsável"
                      value={form.dados.contato}
                      onChange={v => form.atualizarCampo('contato', v)}
                    />
                    <TextField
                      label="Telefone"
                      placeholder="(37) 99999-0000"
                      value={form.dados.telefone}
                      onChange={v => form.atualizarCampo('telefone', v)}
                    />
                  </div>
                </Container>
              )}

              {etapa === 2 && (
                <div className="space-y-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Container>
                    <SectionTitle
                      eyebrow="Perfil institucional"
                      title="Sua instituição é"
                      description="Selecione uma categoria."
                    />
                    <div className="mt-6">
                      <SingleSelectCardGroup
                        opcoes={TIPOS_INSTITUICAO}
                        selecionado={form.dados.tipo_instituicao}
                        onSelect={form.definirTipoInstituicao}
                      />
                    </div>
                  </Container>

                    <Container>
                      <SectionTitle
                        eyebrow="Financiamento"
                        title="Fontes de recursos (3 anos)"
                        description="Caso pretenda investir, indique quais fontes de recursos serão utilizadas nos próximos 3 anos."
                      />
                      <div className="mt-6">
                        <CheckboxGroup
                          opcoes={FONTES_FINANCIAMENTO}
                          selecionados={Object.entries(form.dados.fontes_financiamento)
                            .filter(([, v]) => v)
                            .map(([k]) => k)}
                          onToggle={v => form.atualizarNested('fontes_financiamento', v, !form.dados.fontes_financiamento[v])}
                        />
                      </div>
                    </Container>
                  </div>

                  <Container>
                    <SectionTitle
                      eyebrow="Investimentos futuros"
                      title="Possibilidade de investimentos (3 anos)"
                      description="Indique a possibilidade de investimentos para os próximos 3 anos (1 = Nenhum; 2 = Médio; 3 = Grande)."
                    />
                    <div className="mt-6 space-y-1">
                      {SOLUCOES_PRIORITARIAS.map(sol => (
                        <EscalaRadio
                          key={sol.codigo}
                          label={sol.descricao}
                          name={sol.codigo}
                          value={form.dados.investimentos[sol.codigo] || null}
                          onChange={(_, val) => form.atualizarNested('investimentos', sol.codigo, val)}
                          labels={LABELS_INVESTIMENTO}
                        />
                      ))}
                    </div>
                  </Container>
                </div>
              )}

              {etapa === 3 && (
                <Container>
                  <SectionTitle
                    eyebrow={SOLUCOES[0].megatendencia}
                    title={SOLUCOES[0].titulo}
                    description="De acordo com as soluções tecnológicas prioritárias, indique o nível de serviço que a instituição oferece."
                  />
                  <div className="mt-6 space-y-4">
                    {SOLUCOES[0].itens.map(item => (
                      <SolucaoCard
                        key={item.codigo}
                        item={item}
                        ofertas={form.dados.ofertas}
                        onChangeOferta={form.atualizarOferta}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    Escala aplicada: 1 = Baixo, 2 = Médio, 3 = Alto.
                  </p>
                </Container>
              )}

              {etapa === 4 && (
                <Container>
                  <SectionTitle
                    eyebrow={SOLUCOES[1].megatendencia}
                    title={SOLUCOES[1].titulo}
                    description="De acordo com as soluções tecnológicas prioritárias, indique o nível de serviço que a instituição oferece."
                  />
                  <div className="mt-6 space-y-4">
                    {SOLUCOES[1].itens.map(item => (
                      <SolucaoCard
                        key={item.codigo}
                        item={item}
                        ofertas={form.dados.ofertas}
                        onChangeOferta={form.atualizarOferta}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    Escala aplicada: 1 = Baixo, 2 = Médio, 3 = Alto.
                  </p>
                </Container>
              )}

              {etapa === 5 && (
                <Container>
                  <SectionTitle
                    eyebrow={SOLUCOES[2].megatendencia}
                    title={SOLUCOES[2].titulo}
                    description="De acordo com as soluções tecnológicas prioritárias, indique o nível de serviço que a instituição oferece."
                  />
                  <div className="mt-6 space-y-4">
                    {SOLUCOES[2].itens.map(item => (
                      <SolucaoCard
                        key={item.codigo}
                        item={item}
                        ofertas={form.dados.ofertas}
                        onChangeOferta={form.atualizarOferta}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    Escala aplicada: 1 = Baixo, 2 = Médio, 3 = Alto.
                  </p>
                </Container>
              )}

              {etapa === 6 && (
                <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                  <Container>
                    <SectionTitle
                      eyebrow="Revisão"
                      title="Confirmação das respostas"
                      description="Revise os principais campos antes do envio."
                    />

                    <div className="mt-6 space-y-4">
                      <div className="mini-card">
                        <h3 className="mini-title">Identificação</h3>
                        <SummaryLine label="Instituição" value={form.dados.nome_instituicao} />
                        <SummaryLine label="Tipologia" value={form.dados.tipologia_atividade} />
                        <SummaryLine label="Contato" value={form.dados.contato} />
                        <SummaryLine label="Telefone" value={form.dados.telefone} />
                      </div>

                      <div className="mini-card">
                        <h3 className="mini-title">Perfil institucional</h3>
                        <SummaryLine label="Tipo de instituição" value={instituicaoLabel || '—'} />
                        <SummaryLine label="Fontes de recursos" value={fontesSelecionadas || 'Nenhuma'} />
                      </div>
                    </div>
                  </Container>

                  <Container>
                    <SectionTitle
                      eyebrow="Oferta"
                      title="Resumo das megatendências"
                      description="Valores registrados para o nível de oferta de serviços."
                    />
                    <div className="mt-6 space-y-4">
                      <div className="mini-card">
                        <h3 className="mini-title">Investimentos (3 anos)</h3>
                        {SOLUCOES_PRIORITARIAS.map(sol => (
                          <SummaryLine
                            key={sol.codigo}
                            label={sol.descricao}
                            value={form.dados.investimentos[sol.codigo]
                              ? LABELS_INVESTIMENTO[form.dados.investimentos[sol.codigo] - 1]
                              : '—'}
                          />
                        ))}
                      </div>
                      {SOLUCOES.map(sol => (
                        <div key={sol.codigo} className="mini-card">
                          <h3 className="mini-title">{sol.titulo}</h3>
                          {sol.itens.map(item => (
                            <div key={item.codigo} className="mb-3 last:mb-0">
                              <p className="text-sm font-semibold text-slate-700 mb-1">{item.descricao}</p>
                              {SERVICOS.map(serv => {
                                const chave = `${item.codigo}__${serv.codigo}`
                                const nivel = form.dados.ofertas[chave]
                                return (
                                  <SummaryLine
                                    key={chave}
                                    label={serv.nome}
                                    value={nivel ? LABELS_OFERTA[nivel - 1] : '—'}
                                  />
                                )
                              })}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Container>
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-500">
                  {etapa === 0 ? 'Leia os termos e avance para iniciar.' : 'Navegação em etapas guiadas.'}
                </div>
                <div className="flex gap-3">
                  <ActionButton variant="secondary" type="button" onClick={voltar} disabled={etapa === 0}>
                    Voltar
                  </ActionButton>
                  {etapa < 6 ? (
                    <ActionButton
                      variant="primary"
                      type="button"
                      onClick={() => {
                        form.definirErro(null)
                        if (etapa === 0 && !termosAceitos) {
                          form.definirErro('Marque a concordância para continuar.')
                          return
                        }
                        if (etapa === 1 && !validarIdentificacao()) return
                        proxima()
                      }}
                    >
                      {etapa === 0 ? 'Aceitar e continuar' : 'Continuar'}
                    </ActionButton>
                  ) : (
                    <ActionButton
                      variant="primary"
                      type="button"
                      onClick={enviar}
                      disabled={form.enviando}
                    >
                      {form.enviando ? 'Enviando...' : 'Enviar avaliação'}
                    </ActionButton>
                  )}
                </div>
              </div>

              {form.erro && (
                <p className="text-sm text-[#b91c1c]">{form.erro}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
