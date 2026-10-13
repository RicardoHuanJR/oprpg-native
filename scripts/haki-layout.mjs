// Presentation coordinates from the local original; native rules are in haki-catalog.mjs.
export const HAKI_LAYOUT = {
  armamento: {
    width: 1240, height: 720, gutter: 150,
    bands: [
      { stage: "inexperiente", y0: 0,   y1: 240 },
      { stage: "treinado",     y0: 240, y1: 560 },
      { stage: "perito",       y0: 560, y1: 720 }
    ],
    boundaries: [
      "0,0 1240,0",
      "0,240 300,240 300,195 1240,195",
      "0,560 445,560 445,525 1240,525",
      "0,720 1240,720"
    ],
    branches: [
      { ramo: "Ofensivo",  x: 375 },
      { ramo: "Defensivo", x: 915 }
    ],
    pos: {
      "ataque-infuso":           { x: 380, y: 120 },
      "endurecimento-ofensivo":  { x: 250, y: 330 },
      "chama-do-armamento":      { x: 500, y: 365 },
      "emissao-ofensiva":        { x: 250, y: 460 },
      "destruicao-interna":      { x: 360, y: 615 },
      "endurecimento-defensivo": { x: 860, y: 120 },
      "emissao-defensiva":       { x: 780, y: 360 },
      "escudo-de-vontade":       { x: 1055, y: 320 },
      "corpo-armadurado":        { x: 1060, y: 470 },
      "armadura-suprema":        { x: 820, y: 615 },
      "defesa-suprema":          { x: 1055, y: 615 }
    }
  },

  observacao: {
    width: 1560, height: 780, gutter: 150,
    bands: [
      { stage: "inexperiente", y0: 0,   y1: 220 },
      { stage: "treinado",     y0: 220, y1: 620 },
      { stage: "perito",       y0: 620, y1: 780 }
    ],
    // Fronteiras entre faixas (degraus): Perito sobe bastante no lado Defensivo/Ofensivo.
    boundaries: [
      "0,0 1560,0",
      "0,220 740,220 740,195 1560,195",
      "0,620 740,620 740,500 1560,500",
      "0,780 1560,780"
    ],
    branches: [
      { ramo: "Sensorial", x: 280 },
      { ramo: "Precavido", x: 580 },
      { ramo: "Defensivo", x: 980 },
      { ramo: "Ofensivo",  x: 1345 }
    ],
    pos: {
      "perceber-emocoes":       { x: 280, y: 130 },
      "perceber-presenca":      { x: 280, y: 320 },
      "perceber-desafio":       { x: 280, y: 460 },
      "perceber-o-futuro":      { x: 280, y: 680 },
      "antecipacao":            { x: 580, y: 130 },
      "clarividencia":          { x: 580, y: 320 },
      "vidente":                { x: 580, y: 460 },
      "premonicao":             { x: 510, y: 680 },
      "ver-o-futuro":           { x: 660, y: 680 },
      "antevisao":              { x: 980, y: 130 },
      "passo-antecipado":       { x: 895, y: 330 },
      "antevisao-sobrenatural": { x: 1085, y: 330 },
      "antecipar-movimentos":   { x: 895, y: 470 },
      "antevisao-especial":     { x: 1085, y: 470 },
      "antevisao-profetica":    { x: 990, y: 680 },
      "previsao":               { x: 1345, y: 130 },
      "previsao-sobrenatural":  { x: 1345, y: 330 },
      "impeto-antecipado":      { x: 1260, y: 470 },
      "previsao-especial":      { x: 1445, y: 470 },
      "previsao-profetica":     { x: 1350, y: 680 }
    }
  },

  rei: {
    width: 1240, height: 780, gutter: 150,
    bands: [
      { stage: "inexperiente", y0: 0,   y1: 285 },
      { stage: "treinado",     y0: 285, y1: 615 },
      { stage: "perito",       y0: 615, y1: 780 }
    ],
    boundaries: [
      "0,0 1240,0",
      "0,285 470,285 470,250 1240,250",
      "0,615 510,615 510,545 1240,545",
      "0,780 1240,780"
    ],
    branches: [],
    pos: {
      "rei":                   { x: 695,  y: 195 },
      "autoridade-do-rei":     { x: 440,  y: 405 },
      "vontade-do-rei":        { x: 1000, y: 405 },
      "superacao-majestosa":   { x: 610,  y: 510 },
      "imposicao-do-rei":      { x: 790,  y: 510 },
      "soberania-do-rei":      { x: 375,  y: 545 },
      "presenca-esmagadora":   { x: 490,  y: 690 },
      "armamento-do-rei":      { x: 800,  y: 690 },
      "emissao-de-autoridade": { x: 1010, y: 690 }
    }
  }
};
