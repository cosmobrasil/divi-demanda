export const SOLUCOES = [
  {
    codigo: 'inovacao',
    megatendencia: 'Inovação e Industrialização',
    nome: 'Implementar gestão Lean + padronização + mecanização de canteiros',
    cor: 'blue',
  },
  {
    codigo: 'digitalizacao',
    megatendencia: 'Digitalização do Ciclo de Vida',
    nome: 'Novos Modelos de Gestão com Digitalização de Design',
    cor: 'violet',
  },
  {
    codigo: 'economia_circular',
    megatendencia: 'Economia Circular na Construção',
    nome: 'Health Building (edifícios inteligentes focados em saúde e bem-estar)',
    cor: 'green',
  },
]

export const SERVICOS = [
  { codigo: 'consultoria', nome: 'Consultoria e Assistência Técnica' },
  { codigo: 'formacao', nome: 'Formação e Capacitação' },
  { codigo: 'disseminacao', nome: 'Disseminação de informações e atualizações' },
  { codigo: 'teste', nome: 'Teste e Provas' },
  { codigo: 'pd', nome: 'Pesquisa e Desenvolvimento (P&D)' },
]

export const MERCADOS = [
  { value: 'local', label: 'Local' },
  { value: 'estadual', label: 'Estadual' },
  { value: 'nacional', label: 'Nacional' },
  { value: 'internacional', label: 'Internacional' },
]

export const FONTES_FINANCIAMENTO = [
  { value: 'recursos_proprios', label: 'Recursos Próprios' },
  { value: 'bancos_publicos', label: 'Bancos Públicos' },
  { value: 'bancos_privados', label: 'Bancos Privados' },
  { value: 'bndes', label: 'Bancos de Desenvolvimento (BNDES, etc.)' },
  { value: 'outras', label: 'Outras Fontes' },
]

export const LABELS_INVESTIMENTO = ['Nenhum', 'Médio', 'Grande']
export const LABELS_NECESSIDADE = ['Baixo', 'Médio', 'Alto']

export const ETAPAS = [
  'Identificação',
  'Mercados',
  'Investimentos',
  'Financiamento',
  'Necessidades',
  'Confirmação',
]

export const estadoInicial = {
  // Etapa 1
  nome_empresa: '',
  tipologia_atividade: '',
  contato: '',
  telefone: '',
  // Etapa 2
  mercados: [],
  // Etapa 3
  investimentos: {
    inovacao: null,
    digitalizacao: null,
    economia_circular: null,
  },
  // Etapa 4
  fontes_financiamento: {
    recursos_proprios: false,
    bancos_publicos: false,
    bancos_privados: false,
    bndes: false,
    outras: false,
  },
  // Etapa 5 — 15 células: solucao × servico
  necessidades: {},
}
