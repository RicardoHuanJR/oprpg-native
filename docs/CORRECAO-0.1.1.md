# Correção 0.1.1 — seleção do sistema na criação de mundos

07/10/2026. O sistema 0.1.0 foi instalado, mas não aparecia na lista da tela de criação de mundos.

Causa reproduzida com o core local 14.367: manifesto sem `compatibility.verified` recebe disponibilidade UNKNOWN (0). O construtor de WorldCreate aceita apenas disponibilidade de VERIFIED (1) até UNVERIFIED_GENERATION (4), excluindo UNKNOWN. A validação sintática do manifesto sozinha não detectava isso.

Correção: declarar build de referência 14.367, usar strings para as versões de compatibilidade, incrementar pacote para 0.1.1 e apontar o manifesto de atualização para o arquivo atual do repositório. Nenhum campo de regras foi alterado; nenhuma migração ou troca de sistema de mundo é necessária.

13 testes aprovados. Dois novos testes usam a classe BaseSystem e o código do construtor WorldCreate do core local: reproduzem a exclusão antiga e comprovam que o manifesto corrigido é incluído, inclusive com disponibilidade aceita na build 14.368. Essa verificação cobre o manifesto e o filtro de seleção; não comprova carregamento completo de mundo, fichas, persistência ou multicliente.

`compatibility.verified` registra a build de referência desta validação de pacote; não declara cobertura completa das mecânicas. O protótipo permanece experimental, com custos/dano manuais e sem integração DAE/Argon.

Após atualizar, retorne à configuração e recarregue a página; reabra a tela de criação de mundos para reconstruir sua lista. Se o processo ainda mantiver o manifesto antigo em memória, feche e reabra o Foundry quando estiver na configuração. Não encerrar uma sessão de campanha em andamento para este teste.
