# Catálogo de campos implementados — protótipo 0.1

07/10/2026. Este registro complementa o catálogo de propostas. “Implementado” significa presente no código do protótipo; não significa automação completa ou validação em mundo/multicliente.

Todos os valores atuais são alterados por edição autorizada da ficha/core. **Nenhum campo é anunciado como suportado por DAE ou pelo editor de efeitos próprio nesta versão.** Efeitos em dados derivados ainda não estão suportados. Fase B/D abaixo descreve preparação do modelo; não expõe novo CHANGE_PHASE ao core.

| Documento/caminho real | Tipo/unidade/inicial | Persistência/fase | Regra ou uso |
|---|---|---|---|
| Actor `system.schemaVersion` | inteiro; 1 | gravado | versão estrutural |
| Actor `system.progression.level` | inteiro; nível; 1, faixa técnica 1–20 | gravado | Jogador p.13; épicos pendentes |
| Actor `system.attributes.{id}.base` | inteiro; pontos; 10, mínimo 1 | gravado | IDs strength/dexterity/constitution/wisdom/presence/will; Jogador p.258 |
| Actor `system.attributes.{id}.modifier` | inteiro; bônus | derivado D | floor((base−10)/2), não serializado |
| Actor `system.attributes.{id}.saveProficient` | booleano; false | gravado | configurar conforme fonte; proficiência aplicada uma vez |
| Actor `system.proficiency.bonus` | inteiro; bônus | derivado D | tabela de personagem p.13; override no NPC |
| Actor `system.vitality.value/max/temporary/negative` | inteiros; PV; 0, mínimo 0 | gravados | PV e negativos p.292–293; temporários somente registro, ordem de dano pendente |
| Actor `system.power.value` | inteiro; PP; 0, mínimo 0 | gravado | saldo manual |
| Actor `system.power.maxOverride` | inteiro não negativo ou null; PP; null | gravado | máximo informado quando fonte exige; vazio usa padrão |
| Actor `system.power.max` | inteiro; PP | derivado D | override ?? 4×nível; p.36; não preenche saldo |
| Actor `system.defense.rating` | inteiro; CR; 10 | gravado | defesa manual; não calcula armadura |
| Actor `system.movement.distance` | número; metros; 0 | gravado | registro de deslocamento, sem rastrear gasto |
| Actor `system.identity.combatStyle/profession/biography` | strings; vazio | gravados | escolhas/anotações manuais |
| Actor `system.identity.species.uuid/name/origin/version/traits` | strings; vazio, origin homebrew | snapshot gravado | origem official/homebrew; traços descritivos, sem bônus automático |
| Actor `system.creation.attributesReviewed/resourcesReviewed` | booleanos; false | gravados | conferência pelo proprietário/mestre |
| NPC `system.proficiencyOverride` | inteiro; bônus; 2, mínimo 0 | gravado, usado D | valor da ficha de criatura; não inferir ND |
| NPC `system.legendaryActions.value/max` | inteiros; usos; 0 | gravados | reserva manual; sem recuperação automática; Narrador p.135 |
| Todos Items `system.schemaVersion` | inteiro; 1 | gravado | sem importação legada |
| Todos Items `system.description/source/origin/contentVersion` | strings; vazio/vazio/homebrew/1 | gravados | referência de fonte ou autoria; origin official/homebrew |
| Species Item `system.traits` | string; vazio | gravado | texto simples, escapado na interface |
| Itens de atividade `system.activity.attribute` | enum de atributo; strength | gravado | deve ser escolhido conforme atividade/fonte |
| Itens de atividade `system.activity.activation` | enum; other | gravado | action/powerful/bonus/reaction/legendary/passive/other; sem gasto de ação |
| Itens de atividade `system.activity.proficient` | booleano; false | gravado | controle manual do d20 de referência |
| Itens de atividade `system.activity.powerCost` | inteiro; PP; 0 | gravado | registro, não cobrado; 0 técnico não valida técnica oficial |
| Itens de atividade `system.activity.damageFormula/range/duration/requirements` | strings; vazio | gravados | registro, sem execução automática |
| Itens de atividade `system.activity.surgicalControl` | booleano; false | gravado | registro por atividade, sem seleção/proteção automática |
| Technique Item `system.grade` | inteiro; grau; 1, faixa 1–7 | gravado | não existe em Auxiliary Item; p.35/194–195 |

Itens de atividade: weapon, feature, technique, auxiliary, legendary. Equipment e species não recebem atividade. Uma atividade por item nesta versão. Permissões seguem propriedade Foundry; botões de criação de espécies e ações lendárias são controles do mestre. Configuração `oprpg-native.creationAssistant` é booleana do mundo, inicial true; não é caminho de efeito.

Exemplos: rolagem lê `@attributes.dexterity.modifier` no getRollData; esse alias não é caminho gravável. Alterar um atributo recalcula seu modificador sem mudar a fonte durante preparação. Registrar PP não cria efeito ADD sobre saldo. Um auxiliar de custo 6 conserva ausência de grau.

Diferenças do plano inicial: PV máximos e defesa são manuais; atividade singular `system.activity`, grau `system.grade`, movimento singular `system.movement.distance`; PP máximo derivado com override gravado. Paths `system.activities.{id}` e demais propostas ainda não existem. Primeira versão estrutural = 1; nenhuma migração de mundos antigos implementada. Futuras mudanças deverão preservar este mapa e incluir migração explícita.
