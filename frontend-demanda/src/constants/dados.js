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
          'Implementar gestão Lean, portfólio de soluções tecnológicas padronizadas e escaláveis, e mecanização em canteiros de obras. Otimizar cadeia de suprimentos, retroalimentar processos com dados para aumentar produtividade.',
      },
      {
        codigo: 'offsite',
        numero: 2,
        descricao:
          'Construção Off-site e Construção Modular: fabricar componentes ou estruturas em um ambiente industrial antes de transportá-los para montagem no local da obra. Processo que visa transformar a maneira tradicional de construir, aplicando métodos e tecnologias industriais para aumentar a eficiência.',
      },
      {
        codigo: 'materiais',
        numero: 3,
        descricao:
          'Utilizar novos materiais de alto desempenho: Incorporar materiais que contribuam diretamente para a economia de energia (ex. isolamentos térmicos), redução do impacto ambiental, funcionalidade e design (materiais eficientes, aumento da durabilidade, otimização de recursos).',
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
          'Implementação de cadeias de suprimento sustentáveis utilizando plataformas de rastreamento (ex. blockchain) para garantir a origem sustentável dos materiais, promovendo transparência e integridade ambiental no fornecimento de insumos.',
      },
      {
        codigo: 'bim',
        numero: 5,
        descricao:
          'Implantar BIM 4D/5D em projetos + contratos baseados em desempenho. Integrar BIM com tecnologias avançadas (IoT, Big Data e IA).',
      },
      {
        codigo: 'gestao_digital',
        numero: 6,
        descricao:
          'Novos Modelos de Gestão com Digitalização de Design — Implementação de modelos de gestão que utilizam a digitalização do design para coordenar projetos e executar obras de forma mais eficiente, facilitando a colaboração entre equipes e melhorando o controle de qualidade ao longo do processo construtivo.',
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
        descricao: 'Implantar rastreabilidade de resíduos e logística reversa em obra.',
      },
      {
        codigo: 'health_building',
        numero: 8,
        descricao:
          'Health Building — Edifícios Inteligentes focados na saúde e o bem-estar. Utilização de tecnologias para criar ambientes que promovem o bem-estar físico e mental dos ocupantes, otimizando a qualidade do ar e da iluminação, a ergonomia e promovendo Sistemas de Inovação na Gestão de Energia e Água.',
      },
      {
        codigo: 'certificacoes',
        numero: 9,
        descricao: 'Acesso a certificações ambientais (LEED/AQUA/EDGE) + marketing digital.',
      },
    ],
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

export const INVESTIMENTOS_FUTUROS = [
  { codigo: 'maq_equip', label: 'Aquisição de máquinas e equipamentos' },
  { codigo: 'estruturas_fisicas', label: 'Ampliação ou renovação das estruturas físicas' },
  { codigo: 'informatica', label: 'Informática (aquisição de hardware ou software)' },
  { codigo: 'capacitacao_normas', label: 'Capacitação/formação com adequação às normas (segurança, ambiental, etc.)' },
  { codigo: 'consultorias_externas', label: 'Consultorias externas (transferência de conhecimento ou inovação)' },
  { codigo: 'licencas_patentes', label: 'Aquisição de licenças/registro de patentes' },
  { codigo: 'marketing', label: 'Marketing' },
  { codigo: 'pesquisa_desenvolvimento', label: 'Pesquisa e desenvolvimento' },
  { codigo: 'area_comercial', label: 'Área comercial' },
]

export const IMPEDIMENTOS_INOVACAO = [
  { codigo: 'custo_inovacoes', label: 'Custo das inovações' },
  { codigo: 'falta_suporte_entidades', label: 'Falta de suporte técnico/operativo por parte de entidades públicas/associações' },
  { codigo: 'falta_conhecimentos', label: 'Falta de conhecimentos técnico/operativos' },
  { codigo: 'mao_obra_qualificada', label: 'Mão de obra qualificada' },
  { codigo: 'problemas_organizacionais', label: 'Problemas organizacionais (cargos, prazos, distância, etc.)' },
  { codigo: 'carencia_informacoes_oferta', label: 'Carência de informações sobre oferta tecnológica' },
  { codigo: 'falta_parceiros', label: 'Falta de parceiros com competências adequadas' },
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

export const TITULO_PROJETO = 'Demanda por Serviços Tecnológicos'
export const SUBTITULO_PROJETO = 'Construção civil de Divinópolis/MG'
export const DESCRICAO_PROJETO =
  'Questionário para levantar a demanda das empresas da construção civil por soluções e serviços tecnológicos associados às megatendências do setor.'

export const estadoInicial = {
  cnpj: '',
  nome_empresa: '',
  tipologia_atividade: '',
  contato: '',
  telefone: '',
  mercados: [],
  investimentos: {},
  fontes_financiamento: {
    recursos_proprios: false,
    bancos_publicos: false,
    bancos_privados: false,
    bndes: false,
    outras: false,
  },
  impedimentos: {},
  necessidades: {},
}
