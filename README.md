# OP RPG Nativo — 0.1.0 experimental

Primeiro protótipo independente para Foundry VTT v14. ID próprio: `oprpg-native`. Não substitui o sistema antigo. Não contém textos, fichas de inimigos, imagens ou compêndios dos livros.

## Incluído

- Fichas de personagem e NPC em ApplicationV2, com visual inspirado na cópia local do OP RPG original: cartões escuros, vermelho/dourado e abas.
- Seis atributos OP RPG, testes e salvaguardas, com vantagem/desvantagem e respeito ao modo de rolagem do core.
- Proficiência dos personagens nos níveis 1–20; NPCs usam valor informado pelo mestre. Iniciativa padrão usa Destreza; surpresa e exceções são manuais.
- PV, temporários, negativos, PP, defesa e movimento. PP máximos padrão: 4 × nível; campo opcional de máximo informado permite registrar exceção da fonte. Não há gasto, cura ou recuperação automáticos.
- Conteúdo separado em armas/ataques comuns, características, técnicas graduadas, auxiliares sem grau, equipamento e ações lendárias de NPC.
- Uma atividade registrada por item. D20 de referência usa o atributo escolhido e proficiência configurada; não resolve sucesso, custo, dano nem alvos.
- Aba de criação assistida como checklist desativável nas configurações do mundo. Desativar não remove dados.
- Espécies personalizadas como itens do mundo, com origem, versão e traços descritivos. Seleção copia um snapshot para o personagem. Alterações na espécie original não reescrevem fichas existentes.

## Teste isolado

1. Com Foundry fechado, extraia a pasta `oprpg-native` do ZIP para a pasta `Data/systems` **de um ambiente de teste separado**. O nome da pasta deve coincidir com o ID. Não sobrescreva `oprpg-system`, dnd5e ou qualquer módulo.
2. Crie um mundo vazio e selecione “OP RPG Nativo — Experimental”. Não troque o sistema da campanha existente.
3. Mantenha módulos desativados no primeiro teste. Crie personagem, NPC e um item de espécie; abra as fichas e confira erros no console.
4. Para disponibilizar uma espécie aos jogadores, o mestre deve conceder permissão de Observador ao item do mundo pelas configurações de permissões do Foundry. Essa versão permite criar espécies pelo botão da ficha do mestre ou pelo diretório de itens.
5. Registre a espécie na ficha e confira manualmente seus benefícios. Preencha atributos e recursos conforme a fonte; valores iniciais são placeholders técnicos, não personagem pronto.
6. Teste a configuração “Mostrar criação assistida”, recarregue quando solicitado e confirme que a aba muda sem perder conteúdo.

Nenhuma instalação foi realizada pela criação deste pacote. Publicação experimental autorizada pelo mestre: [repositório](https://github.com/RicardoHuanJR/oprpg-native). O manifesto aponta para a prévia v0.1.0; não representa uma versão pronta para campanha.

## Limitações

Não é uma implementação completa das regras. Ausentes: perícias, avanço automatizado, benefícios automáticos de espécie/estilo/profissão, dano/cura, custos, descanso, concentração, condições, efeitos próprios, Haki/fruta, embarcações, ataque combinado, recuperação lendária e controle multicliente. Controle Cirúrgico é apenas um registro por atividade. Não importar compêndios do sistema antigo como se seus campos fossem compatíveis.

DAE e Argon não estão integrados nesta versão. HUD próprio e catálogo de efeitos continuam no plano. Campos oficiais são referências cadastradas pelo usuário, sem certificação automática de conteúdo. Não coloque segredos do mestre em ficha concedida ao jogador.

Modelos testados com bibliotecas locais do core 14.367 em memória; fichas, persistência e multicliente ainda precisam de teste em um mundo v14. O manifesto omite `verified` intencionalmente. Consultas oficiais: [modelos](https://foundryvtt.com/article/system-data-models/), [ActorSheetV2](https://foundryvtt.com/api/classes/foundry.applications.sheets.ActorSheetV2.html), [DocumentSheetV2](https://foundryvtt.com/api/classes/foundry.applications.api.DocumentSheetV2.html).

## Download e verificação

[Baixar ZIP v0.1.0](https://github.com/RicardoHuanJR/oprpg-native/releases/download/v0.1.0/oprpg-native-0.1.0.zip) · [Manifesto para teste no Foundry](https://github.com/RicardoHuanJR/oprpg-native/releases/download/v0.1.0/system.json).

O ZIP inclui a pasta `oprpg-native`; o código do repositório está na raiz. Consulte [campos implementados](docs/CAMPOS-IMPLEMENTADOS-0.1.md) e [verificação e limites](docs/VALIDACAO-0.1.md). Os nove testes portáteis podem ser executados com `npm test`; os dois testes com bibliotecas locais do core constam no relatório e não redistribuem o Foundry.
