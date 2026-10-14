# OP RPG Nativo 0.3.9

Sistema independente para Foundry v14.367. Manifesto estável: https://raw.githubusercontent.com/RicardoHuanJR/oprpg-native/main/system.json

Descrições com resumo de características, parágrafos e regra completa recolhida. Seletores mostram somente o resumo pertinente à opção escolhida. Ficha clássica e editores revisados, árvore nativa de Haki com consulta e aquisição separadas, raça seguida de variante, avanço por estilo e Multiestilo opcional, Sem Profissão, treinamentos condicionais, criação de armas, efeitos e recursos.

Raças e estilos usam exclusivamente o catálogo oficial. A criação de armas permanece. Inclui descrições do Jogador 2.1, imagens para raças/variantes, estilos e habilidades básicas. Artes geradas foram usadas para as 20 habilidades básicas, Humanos e Homem-Peixe; outras ilustrações vêm do material local fornecido pelo usuário. Definições mecânicas e texto da regra são separados da automação: mostrar a descrição não implica automatizar toda exceção.

164 testes passaram com serviços e modelos Foundry controlados. Templates e CSS foram verificados; esta revisão não certifica todas as janelas ao vivo, todas as regras ou concorrência multiplayer. Constituição real nos PV e recuperação de metade dos PP no descanso iniciado com exaustão seguem as decisões da mesa. A ficha preserva as decisões de ações do jogador; o contador de movimento apenas registra gastos.

Atualize pelo manifesto e reinicie o Foundry. O pacote é completo; imagens personalizadas em fichas continuam tendo prioridade. Nenhum livro PDF, licença pessoal, credencial ou dependência do D&D foi incluído. Não modifica os mundos ao instalar.

## Visual aprovado

Molduras, filigranas, emblemas e texturas discretas nas fichas, itens, atividades, escolhas e Haki. Atributos em hexágonos regulares, com fundo cinza e os seis lados iguais. Cabeçalho reorganizado para separar controles, identidade e atributos. Arte e retratos personalizados preservados. A árvore de Haki conserva o catálogo e a geometria de conexões reais.

164 testes passaram. Templates, módulos e cinco CSS ativos verificados; conferência visual integral ao vivo no Foundry continua pendente. Esta versão altera a apresentação, sem migração de documentos dos mundos. Reinicie o Foundry após atualizar.

## Correção de fidelidade

OP RPG Nativo 0.3.9 — correção da transferência do layout aprovado

Substitui as molduras recortadas por retangulares duplas, ajusta a tipografia e o espaçamento das perícias, a CR circular, o retrato, as três colunas, os cartões de origem e as barras retas. A 0.3.4 havia aplicado ornamentação mantendo partes da composição antiga; esta versão corrige essa diferença em relação à demonstração aprovada.

Dados reais, retratos personalizados, perícias completas e controles de configuração permanecem. Valores passivos podem ser consultados no título da perícia; PV temporários aparecem quando existentes. Não altera regras ou documentos dos mundos.

164 testes passaram. Código, templates, CSS e pacote verificados. A comparação visual da nova versão dentro do Foundry depende da atualização; não foi apresentada como já concluída. Atualize pelo mesmo JSON e reinicie o Foundry.

## Espaçamento e navegação

OP RPG Nativo 0.3.9 — espaçamento e navegação da ficha

Substitui os onze ícones laterais preenchidos por ícones vetoriais de contorno, preservando abas e funções. Corrige a altura de 36 px herdada pelos botões, as margens extras nas perícias e salvaguardas, o alinhamento dos títulos e valores das reservas e o botão lateral que criava uma barra de rolagem horizontal.

Os problemas da 0.3.5 foram medidos no cliente Foundry do mundo de teste. A aparência final da correção ainda deve ser conferida após a atualização. Regras e documentos dos mundos preservados. 164 testes passaram; módulos, templates, CSS, símbolos e pacote verificados. Atualize pelo mesmo JSON e reinicie o Foundry.

## CR e exaustão

OP RPG Nativo 0.3.9 — exaustão e centralização da CR

Bolinhas de exaustão aumentadas de 4 para 10 px, preservando os seis controles e suas áreas de clique. O rótulo interno da CR deixa de herdar a altura antiga de 62 px e passa a ocupar o círculo atual; o valor fica centralizado nos dois eixos.

Ajuste somente de CSS. Módulos, templates e estilos verificados; os demais arquivos da 0.3.6 foram preservados. A aparência no cliente deve ser conferida após atualizar. Atualize pelo mesmo JSON e reinicie o Foundry.

## Cabeçalho e margens

OP RPG Nativo 0.3.9 — proporções do cabeçalho e margens laterais

Cabeçalho reduzido de 280 para 210 px nas janelas largas: nome e controles compartilham a mesma faixa, mantendo os atributos abaixo. Em janelas estreitas, os controles e o nome continuam empilhados.

A coluna do retrato e dos recursos recebe 14 px de margem interna em cada lateral. Sua largura passa de 185 para 213 px, preservando a largura útil do retrato, das barras e dos botões pequenos. Os intervalos verticais permanecem os mesmos, conforme a clarificação do usuário. A coluna recolhida mantém sua geometria anterior.

Ajuste somente de CSS. Validação de sintaxe e integridade do pacote; aparência no cliente ainda depende da atualização. Sem alterações nas regras. Atualize pelo mesmo JSON e reinicie o Foundry.

## Faixa ornamental dos atributos

OP RPG Nativo 0.3.9 — faixa ornamental dos atributos

Implementação da alternativa aprovada, com moldura dupla dourada, pequenos ornamentos, hexágonos regulares cinza e nomes completos dos seis atributos. A faixa participa da mesma grade de Perícias e Salvaguardas e ocupa as duas colunas: bordas esquerda e direita alinhadas sem posições ou margens compensatórias. Aparece somente em Detalhes. O retrato e os recursos mantêm sua própria coluna.

Os botões de rolagem e os campos de edição continuam usando os mesmos dados e ações. O cabeçalho fica com 140 px nas janelas largas, pois os atributos agora estão abaixo dele. A faixa se reorganiza em três ou duas colunas em janelas estreitas. A ficha de NPC mantém seus atributos anteriores.

Validação de módulos, CSS, templates, registro da nova seção, renderização de leitura/edição e integridade do pacote. Sem alterações nas regras. Conferência visual final no Foundry depende da atualização no cliente.
