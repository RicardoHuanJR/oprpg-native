# Verificação do protótipo 0.1

07/10/2026. Pacote criado para Foundry v14, identidade própria `oprpg-native`.

Passaram 11 testes: fórmulas de atributos/proficiência e limites da cobertura; anulação de vantagem/desvantagem; snapshot de espécie; registro do sistema sem adaptadores; modelos separados sem gasto de PP; contextos das fichas e ocultação do assistente sem perda de dados; modo cego e propriedade para rolagens; manifesto/arquivos/localização. Dois desses testes usam as classes reais de dados do Foundry local **14.367**, importadas em memória, para construção, preparação, serialização e limites. Os demais usam funções puras e uma simulação reduzida dos contratos de aplicação.

Templates compilados com Handlebars disponível na instalação local. Verificados escape de nome com HTML, remoção da aba quando desativada e ausência de grau no formulário de auxiliar. A prévia usa os mesmos templates com dados ilustrativos.

Não comprovado: inicialização do mundo, renderização das fichas no core, edição persistida, token sem vínculo, barra do token, iniciativa em combate, concorrência e permissões completas. Nenhum teste executado na campanha; sistema antigo e módulos não modificados. DAE e Argon não integrados.

Prévia HTML entregue; captura visual automatizada ainda não confirmada nesta revisão. O navegador de teste falhou ao iniciar no ambiente restrito. Isso não invalida a compilação dos templates, mas deixa a inspeção visual em navegador pendente.

Referência visual lida sem edição: `referência local do sistema original` e aba de criação do mesmo sistema. A nova interface reproduz paleta e organização geral com CSS próprio e escopado; não incorpora regras D&D nem arquivos do original.
