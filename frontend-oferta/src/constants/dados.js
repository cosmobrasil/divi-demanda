export const SOLUCOES = [
  {
    codigo: 'inovacao',
    megatendencia: 'MEGATENDÊNCIA I',
    titulo: 'Inovação e Industrialização',
    itens: [
      {
        codigo: 'lean',
        numero: 1,
        descricao:
          'Implementar gestão Lean, padronização e mecanização de canteiros de obras.',
      },
      {
        codigo: 'offsite',
        numero: 2,
        descricao:
          'Construção off-site e construção modular para aumentar eficiência e previsibilidade.',
      },
      {
        codigo: 'materiais',
        numero: 3,
        descricao:
          'Uso de novos materiais de alto desempenho, duráveis e com menor impacto ambiental.',
      },
    ],
  },
  {
    codigo: 'digitalizacao',
    megatendencia: 'MEGATENDÊNCIA II',
    titulo: 'Digitalização do Ciclo de Vida',
    itens: [
      {
        codigo: 'blockchain',
        numero: 4,
        descricao:
          'Rastreabilidade de materiais e cadeia de suprimentos com plataformas digitais.',
      },
      {
        codigo: 'bim',
        numero: 5,
        descricao:
          'Implantação de BIM 4D/5D, IoT, Big Data e IA para gestão do projeto e da obra.',
      },
      {
        codigo: 'gestao_digital',
        numero: 6,
        descricao:
          'Novos modelos de gestão com digitalização do design e coordenação integrada das equipes.',
      },
    ],
  },
  {
    codigo: 'sustentabilidade',
    megatendencia: 'MEGATENDÊNCIA III',
    titulo: 'Sustentabilidade na Construção',
    itens: [
      {
        codigo: 'residuos',
        numero: 7,
        descricao: 'Rastreabilidade de resíduos e logística reversa em obra.',
      },
      {
        codigo: 'health_building',
        numero: 8,
        descricao:
          'Edifícios inteligentes focados em saúde, bem-estar, energia, água e qualidade do ar.',
      },
      {
        codigo: 'certificacoes',
        numero: 9,
        descricao:
          'Acesso a certificações ambientais e uso de marketing digital para posicionamento.',
      },
    ],
  },
]

export const TIPOS_INSTITUICAO = [
  { value: 'orgao_governo', label: 'Órgão do governo' },
  { value: 'instituto_pub', label: 'Instituto de pesquisa e tecnologia público' },
  { value: 'instituto_priv', label: 'Instituto de pesquisa e tecnologia privado' },
  { value: 'universidade_pub', label: 'Universidade pública' },
  { value: 'universidade_priv', label: 'Universidade privada' },
  { value: 'entidade_associacao', label: 'Entidade ou associação empresarial' },
  { value: 'consultor_consultoria', label: 'Consultor ou empresa de consultoria' },
]

export const FONTES_FINANCIAMENTO = [
  { value: 'recursos_proprios', label: 'Recursos Próprios' },
  { value: 'bancos_publicos', label: 'Bancos Públicos' },
  { value: 'bancos_privados', label: 'Bancos Privados' },
  { value: 'bndes', label: 'Bancos de Desenvolvimento (BNDES, etc.)' },
  { value: 'outras', label: 'Outras Fontes' },
]

export const SERVICOS = [
  { codigo: 'consultoria', nome: 'Consultoria e assistência técnica' },
  { codigo: 'formacao', nome: 'Formação e capacitação' },
  { codigo: 'disseminacao', nome: 'Disseminação de informações e atualizações' },
  { codigo: 'teste', nome: 'Teste e provas' },
  { codigo: 'pd', nome: 'Pesquisa e desenvolvimento (P&D)' },
]

export const LABELS_INVESTIMENTO = ['Nenhum', 'Médio', 'Grande']
export const LABELS_OFERTA = ['Baixo', 'Médio', 'Alto']

// Soluções tecnológicas prioritárias usadas para medir investimentos futuros (3 anos).
// Fonte: demanda-oferta-construcao.csv
export const SOLUCOES_PRIORITARIAS = [
  {
    codigo: 'lean',
    descricao: 'Implementar gestão Lean + padronização + mecanização de canteiros',
  },
  {
    codigo: 'gestao_digital',
    descricao: 'Novos Modelos de Gestão com Digitalização de Design',
  },
  {
    codigo: 'health_building',
    descricao: 'Health Building (edifícios inteligentes focados em saúde e bem-estar)',
  },
]

export const ETAPAS = [
  'Termos',
  'Identificação',
  'Perfil',
  'Megatendência I',
  'Megatendência II',
  'Megatendência III',
  'Revisão',
]

export const TITULO_PROJETO = 'Oferta de Serviços Tecnológicos'
export const SUBTITULO_PROJETO = 'Apoio empresarial de Divinópolis/MG'
export const DESCRICAO_PROJETO =
  'Questionário para levantar a oferta de conhecimento, serviços e capacidade institucional para atender as soluções tecnológicas priorizadas pelo setor.'
