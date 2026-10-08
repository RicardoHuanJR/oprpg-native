# Revisão da ficha — 0.2.1 experimental

A referência visual é a ficha instalada do OP RPG: retrato na lateral, recursos em destaque, cartões escuros, vermelho/dourado, atributos e abas. A implementação é independente; nenhum código ou imagem licenciada do sistema original foi redistribuído.

## Decisões aplicadas

- Retrato e visualização da imagem do token, barras de PV/PP e indicadores de CR, exaustão e movimento.
- Listas com nome, ativação, grau quando pertinente e custo em PP. Botão para usar a atividade principal sem abrir o editor. Atividades alternativas continuam disponíveis no item.
- Equipar, quantidade e peso aparecem somente em armas/equipamentos; características e talentos não recebem esses controles.
- Perícias mostram bônus/passivo e têm uma janela própria para configurar proficiência, bônus e valor da fonte, sem digitar caminhos de variáveis.
- NPC usa ND, experiência concedida, CR, CD, proficiência e PP informados pelo bloco. O nível de personagem e os descansos de personagem deixam de aparecer em seu painel principal.
- Profissão recebe graduação e reconhecimento próprios. Dado de Vida pertence ao estilo de combate, sem ser herdado pela profissão.
- Autorizações de despertar/Haki do Rei aparecem para o mestre; concessão de PA ganha um botão próprio.
- A criação assistida continua desativável sem apagar os dados. Campos e fórmulas que coincidem com outros jogos são mantidos quando fazem parte do OP RPG.

## Dados e fontes

| Campo próprio | Função | Fonte/observação |
|---|---|---|
| `system.attributes.<atributo>.saveOverride` | Bônus total de salvaguarda informado, ou vazio para calcular; exaustão aplicada depois | Blocos do Manual dos Inimigos Playtest, p.3 |
| `system.power.maxOverride` em NPC | PP máximos informados; vazio significa ausência de máximo informado, sem derivar pelo nível | Manual dos Inimigos Playtest, p.3 |
| `system.skills.<perícia>.override` | Bônus total informado; exaustão é aplicada depois e proficiência não é somada novamente | Blocos do Manual dos Inimigos / regras de exaustão do Jogador |
| `system.profession.rank` | Profissional, Especialista, Mestre ou Grão-Mestre | Jogador 2.1, p.131–132; benefícios da graduação ainda não são todos automatizados |
| `system.profession.recognition` | Feitos e reconhecimento registrados pelo usuário | Jogador 2.1, p.131 |
| `system.appearance.portraitMode` | Mostrar retrato ou imagem do token | Preferência visual, sem efeito mecânico |

Sem `DND5E`, slots de magia, inspiração, atributos de Inteligência/Carisma ou caminhos de variáveis do D&D nos scripts/templates deste sistema. Os IDs próprios existentes continuam estáveis para preservar fichas; nomes internos em inglês não indicam dependência de outro sistema.

NPCs antigos com máximo de PP vazio devem receber o máximo de seu bloco, caso possuam PP. Os saldos não são apagados nem corrigidos silenciosamente. O campo antigo de DV em profissão era inadequado e não integra o novo modelo; identidade, descrição e demais campos comuns permanecem.

## Verificação e limites

50 testes locais passaram: 42 portáteis, seis com modelos reais do core e dois de seleção do sistema. Os templates de personagem, NPC e profissão foram compilados/renderizados com Handlebars, com verificações de campos por tipo. Uma prévia navegável foi gerada usando esses mesmos templates.

Ainda não houve validação visual das fichas na sessão do Foundry. A prévia não testa rolagens, permissões completas, persistência ou vários clientes. Esta revisão não conclui a reconstrução, a progressão completa, as frutas, o combate naval ou as compatibilidades com módulos.

Manifesto permanente: https://raw.githubusercontent.com/RicardoHuanJR/oprpg-native/main/system.json
