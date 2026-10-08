# OP RPG Nativo — 0.2.3 experimental

Sistema independente para Foundry v14. Esta é uma etapa da reconstrução, ainda não a implementação completa. Não contém livros, imagens licenciadas ou compêndios do sistema original.

## Descanso e decisão do mestre

O descanso longo iniciado com exaustão recupera metade dos PP máximos, somada ao saldo existente sem exceder o máximo, seguindo a escolha explícita do mestre pelo Jogador 2.1, página 36. A exaustão considerada é a registrada no início do descanso.

Na ficha, inicie o descanso e avance o relógio do mundo em pelo menos oito horas antes de concluir. O personagem precisa começar com pelo menos 1 PV; os benefícios do descanso longo são limitados a uma vez a cada 24 horas. A recuperação também repõe PV, remove temporários e reduz a exaustão em um nível. Descanso curto exige 30 minutos antes de liberar os Dados de Vida.

## Ficha com composição clássica

Cabeçalho amplo, nome em destaque, retrato em moldura, CR central, indicadores compactos de iniciativa/movimento/proficiência, números de PV/PP dentro das barras e atributos em emblemas. As configurações extensas ficam em janelas ou seções recolhidas. A organização segue a ficha usada na mesa; implementação própria, sem redistribuir seus arquivos ou imagens licenciados.

NPC mantém valores do bloco e a profissão possui graduação própria, sem herdar DV de estilo. Perícias têm uma janela própria de configuração. Esta etapa altera o desenho e os controles da ficha; a reconstrução completa continua pendente.

## Implementações parciais

- Fichas com retrato, paleta escura, vermelho/dourado e abas para inventário, características, técnicas, poderes, treinamento, efeitos, informações pessoais e criação.
- Atributos, salvaguardas e perícias, com vantagem/desvantagem, proficiência e exaustão.
- Aplicação manual de dano/cura/temporários e automação parcial de gastos de PP e usos.
- Atividades alternativas nos itens; técnicas com grau e auxiliares sem grau.
- Controle parcial de ações, reações e ações lendárias durante combate.
- Registro de Haki com aquisição de talentos e distribuição de PA autorizada pelo mestre.
- Espécies personalizadas e checklist de criação desativável, preservando os dados.
- Campos de navios e efeitos próprios: ainda não representam automação completa dessas regras.

## Limitações e verificação

A reconstrução continua. Progressão e benefícios completos de espécies/estilos/profissões, resolução automática de alvos e salvaguardas, concentração, poderes de frutas, combate naval e autoridade entre vários clientes permanecem pendentes. Controle Cirúrgico é um registro por atividade. Compatibilidade com módulos será tratada depois.

55 testes locais passaram, incluindo modelos e seleção do sistema com bibliotecas do core 14.367. A criação de mundo foi verificada no servidor isolado e os controles principais da ficha foram conferidos no Foundry 14.367. Isso não certifica todas as janelas ou uma sessão completa com vários jogadores; use um mundo de teste e módulos desativados. Preserve um backup antes de abrir dados anteriores, pois esta etapa acrescenta campos e tipos.

## Instalação e atualizações

O manifesto permanece sempre neste endereço: https://raw.githubusercontent.com/RicardoHuanJR/oprpg-native/main/system.json

Use a verificação de atualização do Foundry. O pacote modifica somente `oprpg-native`; não substitua o sistema original nem altere o sistema de uma campanha existente. Após atualizar, reinicie o Foundry para carregar os novos arquivos.

[Download 0.2.3](https://github.com/RicardoHuanJR/oprpg-native/releases/download/v0.2.3/oprpg-native-0.2.3.zip)

## Revisão dos controles 0.2.3

Corrige os círculos de proficiência, a fonte dos ícones do frame, o controle de edição, o enquadramento do retrato e os valores derivados de salvaguarda/iniciativa. O modo de uso preserva as rolagens sem liberar edição dos campos. Foram inventariados 303 templates, 44 estilos e 209 controladores do ZIP de referência; isso não significa que todas as janelas estão implementadas.

As imagens pessoais do tema ficam apenas na instalação local. O pacote público usa o retrato padrão quando não há imagem pessoal disponível; a imagem do cabeçalho pode ser escolhida na ficha.
