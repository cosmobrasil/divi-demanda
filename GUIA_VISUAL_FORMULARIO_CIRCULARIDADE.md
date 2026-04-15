# Guia visual do formulário de Circularidade 2.0

Este documento resume as características de layout, design e estética do formulário presente em `formulario-github/`. A ideia é servir como referência para criar outro formulário com a mesma linguagem visual, sem copiar a implementação.

## Identidade visual

- Tema principal: corporativo, limpo e institucional.
- Direção estética: mistura de dashboard técnico com formulário guiado.
- Sensação geral: confiável, moderna e orientada a diagnóstico.
- Personalidade: séria, mas não fria; usa laranja como cor de marca para dar energia e destaque.

## Paleta de cores

- Fundo geral: gradiente escuro em tons de azul-marinho e cinza-azulado.
- Superfícies principais: branco puro para cartões e áreas de leitura.
- Cor de marca: laranja forte, usado em CTAs, foco, alertas e destaques.
- Neutros:
  - cinza escuro para títulos e texto principal;
  - cinza médio para instruções e textos secundários;
  - cinza claro para bordas, divisórias e estados desabilitados.
- Áreas de aviso e informação:
  - laranja-claro para blocos de termos e contextualização;
  - amarelo-claro para observações e responsabilidade;
  - verde, azul e índigo para blocos de resultado e recomendações.

## Tipografia

- A página usa uma tipografia sem serifa simples e direta.
- O estilo visual depende de pesos bem definidos, não de fontes rebuscadas.
- Hierarquia clara:
  - títulos grandes e em negrito;
  - subtítulos médios;
  - labels e instruções menores;
  - textos de apoio em cinza e tamanho reduzido.
- O texto precisa ser lido rápido, com pouco ruído visual.

## Estrutura de página

- Layout centralizado com largura máxima ampla.
- Conteúdo principal em blocos bem separados, em vez de uma tela longa sem pausas.
- Estrutura por etapas:
  - tela de termos;
  - tela de identificação da empresa;
  - tela do questionário;
  - tela de confirmação;
  - tela de relatório.
- Cada etapa aparece como um painel isolado, com fundo branco, cantos arredondados e sombra forte.

## Composição dos blocos

- O formulário não usa uma navegação pesada.
- Cada etapa ocupa o centro da tela e funciona como um cartão principal.
- Os blocos internos usam:
  - margens amplas;
  - espaçamento vertical generoso;
  - separação por seções;
  - títulos curtos e objetivos.
- A leitura é guiada por blocos sequenciais, o que reduz a percepção de complexidade.

## Header

- Cabeçalho branco, simples e fixo na composição visual.
- Marca à esquerda com logo.
- Nome da solução em laranja.
- Texto de contexto em cinza.
- Divisórias verticais sutis entre os elementos.
- O header reforça a identidade institucional sem competir com o conteúdo do formulário.

## Cores e destaque de ação

- Botões primários em laranja sólido.
- Botões secundários em cinza escuro ou cinza claro.
- Estado hover levemente mais escuro.
- Estado disabled com opacidade reduzida.
- O laranja é reservado para:
  - continuar;
  - próxima etapa;
  - envio;
  - chamadas de ação principais.

## Cartões e superfícies

- Cartões brancos com:
  - bordas arredondadas;
  - sombra elevada;
  - padding amplo.
- O uso de sombra é importante para separar o conteúdo do fundo escuro.
- Em várias áreas, o design usa cartões internos menores para:
  - termos de uso;
  - identificação;
  - resultados;
  - recomendações.

## Campos de formulário

- Campos largos, com borda cinza clara.
- Foco visível em laranja.
- Inputs com cantos arredondados.
- Labels acima do campo, em fonte menor e mais forte.
- Placeholders curtos e orientados à ação.
- Os campos parecem parte de um formulário profissional, não de um formulário genérico.

## Questionário

- A pergunta aparece em destaque, com texto claro e direto.
- As opções são renderizadas como cards clicáveis.
- Cada opção usa:
  - borda fina;
  - arredondamento;
  - espaçamento interno confortável;
  - hover com fundo laranja muito suave.
- O clique precisa parecer um bloco de seleção, não apenas um radio button comum.
- O design favorece leitura em sequência, uma pergunta por vez.

## Navegação entre etapas

- A experiência é progressiva.
- O usuário avança por telas em sequência.
- Os controles de navegação ficam na base do card:
  - voltar;
  - próximo;
  - continuar.
- O fluxo transmite acompanhamento e reduz a sensação de formulário extenso.

## Animação e microinterações

- Transição de entrada suave na tela de termos.
- Spinner de carregamento simples para salvamento.
- Hover discreto em botões e opções.
- O movimento é contido, funcional e sem exagero.
- Não há animação decorativa pesada.

## Fundo e atmosfera

- Fundo da página em gradiente escuro.
- O contraste com os cards brancos cria foco automático no conteúdo.
- O fundo escuro ajuda a dar sensação de ferramenta técnica e analítica.

## Bordas e radius

- Bordas arredondadas em tudo que é interativo.
- Radius moderado, com aparência amigável sem parecer infantil.
- Bordas finas em cinza claro para inputs, avisos e cards de opção.

## Ícones e linguagem visual

- Uso leve de emojis e símbolos na interface:
  - para resumir volume de questões;
  - para indicar tempo estimado;
  - para sinalizar sucesso ou alerta.
- A linguagem é funcional e ajuda na orientação rápida do usuário.

## Tom do conteúdo

- Texto institucional e explicativo.
- Explica finalidade, limitações e privacidade antes de iniciar o fluxo.
- As mensagens buscam credibilidade técnica.
- O conteúdo evita linguagem promocional.

## Tela de relatório

- A área final é mais densa visualmente.
- Combina:
  - indicadores resumidos;
  - gráfico circular;
  - blocos de recomendações;
  - observações técnicas.
- As recomendações aparecem separadas por categoria, usando cores diferentes para apoiar leitura rápida.

## Padrão de densidade

- Baixa densidade na abertura do fluxo.
- Média densidade nas etapas de perguntas.
- Alta densidade informativa no relatório final.
- Esse contraste ajuda o usuário a sentir progresso.

## Responsividade

- O layout foi pensado para funcionar bem em tela grande e móvel.
- Em telas pequenas:
  - as larguras máximas são reduzidas;
  - títulos diminuem;
  - os blocos continuam empilhados verticalmente.
- O comportamento é de “single column” na prática, com leitura fácil no celular.

## Características que valem reutilizar

- Fundo escuro com cartão branco central.
- Laranja como cor de ação principal.
- Etapas sequenciais com progressão clara.
- Termos de uso antes do formulário.
- Tela de identificação separada do questionário.
- Opções do questionário como cards clicáveis.
- Resultados finais com blocos segmentados por tema.
- Tom corporativo e técnico.

## Características que não são centrais

- Não depende de gráficos sofisticados para funcionar.
- Não depende de iconografia pesada.
- Não depende de animações elaboradas.
- Não depende de um layout em colunas múltiplas para o questionário.

## Resumo prático

Se quisermos criar outro formulário com a mesma identidade, a receita visual é:

1. Fundo escuro em gradiente.
2. Cards brancos grandes, centralizados e bem espaçados.
3. Laranja como cor principal de interação.
4. Tipografia sem serifa, forte e legível.
5. Fluxo em etapas com perguntas uma a uma.
6. Opções de resposta em blocos clicáveis.
7. Relatório final com densidade visual maior e blocos coloridos por categoria.

