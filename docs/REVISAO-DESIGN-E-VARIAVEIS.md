# Revisão do ZIP e da ficha nativa

Referência: oprpg-system 1.0.20, ZIP fornecido pelo mestre. Inventariados todos os 303 templates, 44 arquivos de estilos e 209 controladores de janelas identificados no arquivo. Foram encontrados 848 caminhos de dados usados pela apresentação. Isso cobre os arquivos; não significa que todas as telas já foram reproduzidas ou testadas dentro do Foundry.

| Família de apresentação | Templates |
|---|---:|
| activity | 58 |
| actors | 77 |
| advancement | 38 |
| apps | 19 |
| chat | 14 |
| compendium | 11 |
| dice | 4 |
| effects | 1 |
| inventory | 17 |
| items | 26 |
| journal | 19 |
| region-behaviors | 1 |
| settings | 2 |
| shared | 16 |

## Correções desta revisão

- Círculos de proficiência: retirar os pseudo-elementos do checkbox nativo que apareciam como quadrados por cima dos círculos; alinhar salvaguardas/perícias.
- Ícones da janela: conservar a fonte própria dos controles do Foundry, isolando os estilos de botão da ficha.
- Edição da ficha: botão no canto esquerdo, estado visível, sem título duplicado; modo de uso mantém rolagens e bloqueia edição dos campos.
- Retrato/token: imagem contida na moldura, sem corte do símbolo; seletor ajustado para não cobrir a borda.
- Salvaguardas/iniciativa: calcular os números próprios mesmo em dados antigos sem campos novos, sem NaN e sem gravar valores derivados no ator.

## Variáveis que exigem adaptação

O inventário JSON relaciona cada caminho a seus arquivos e indica o mapeamento disponível ou a necessidade de revisão. PV/PP, CR, exaustão, movimento, atributos, salvaguardas, perícias, favoritos e experiência usam caminhos próprios. Inteligência/Carisma, inspiração, slots e salvaguardas de morte do D&D não são transportados. Nomes antigos de energia não tornam PP uma mecânica de aura.

Continuam pendentes partes completas de avanço, efeitos/concentração, profissões e treinamentos, árvores de Haki, transformações/frutas, embarcações e suas janelas. Não copiar essas variáveis pela semelhança do nome: precisam de modelo, unidade e operação definidos segundo os livros do OP RPG.

O arquivo AUDITORIA-DESIGN-ZIP.json registra a cobertura e as pendências por arquivo. O sistema original e sua campanha não são alterados.

## Resultado na instalação de teste

Versão 0.2.3 instalada com backup. No Foundry 14.367 foram conferidos os controles da janela, círculos de proficiência, enquadramento do retrato, salvaguardas/modificadores/iniciativa sem NaN, PP máximos, e o modo de uso com campos desativados e rolagens disponíveis. 56 testes locais passaram. A publicação permanece pendente de autorização após bloqueio da revisão automática.
