import {bookDescription} from './book-descriptions.mjs';
// Acquisition metadata checked against Jogador 2.1 pp.235–242. Descriptions are extracted from the user-provided book.
export const HAKI_CATALOG = [
  {
    "id": "haki-ataque-infuso",
    "name": "Ataque Infuso",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-infuso",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.235",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 235. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 5,
        "minimumStage": "Inexperiente",
        "requirements": [],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-endurecimento-defensivo",
    "name": "Endurecimento Defensivo",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "endurecimento-defensivo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.235",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 235. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 5,
        "minimumStage": "Inexperiente",
        "requirements": [],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-endurecimento-ofensivo",
    "name": "Endurecimento Ofensivo",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "endurecimento-ofensivo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.236",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 236. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 4,
        "minimumStage": "Treinado",
        "requirements": [
          "ataque-infuso"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-chama-do-armamento",
    "name": "Chama do Armamento",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "chama-do-armamento",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.236",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 236. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 2,
        "minimumStage": "Treinado",
        "requirements": [
          "ataque-infuso",
          "endurecimento-ofensivo"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-emissao-defensiva",
    "name": "Emissão Defensiva",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "emissao-defensiva",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.236",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 236. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 4,
        "minimumStage": "Treinado",
        "requirements": [
          "endurecimento-defensivo"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-escudo-de-vontade",
    "name": "Escudo de Vontade",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "escudo-de-vontade",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.236",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 236. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 4,
        "minimumStage": "Treinado",
        "requirements": [
          "endurecimento-defensivo"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-emissao-ofensiva",
    "name": "Emissão Ofensiva",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "emissao-ofensiva",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.236",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 236. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 3,
        "minimumStage": "Treinado",
        "requirements": [
          "endurecimento-ofensivo"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-corpo-armadurado",
    "name": "Corpo Armadurado",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "corpo-armadurado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.236",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 236. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 4,
        "minimumStage": "Treinado",
        "requirements": [
          "escudo-de-vontade"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-destruicao-interna",
    "name": "Destruição Interna",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "destruicao-interna",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.237",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 237. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 5,
        "minimumStage": "Perito",
        "requirements": [
          "emissao-ofensiva"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-armadura-suprema",
    "name": "Armadura Suprema",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "armadura-suprema",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.237",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 237. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 6,
        "minimumStage": "Perito",
        "requirements": [
          "emissao-defensiva"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-defesa-suprema",
    "name": "Defesa Suprema",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "defesa-suprema",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.237",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 237. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "armament",
        "cost": 3,
        "minimumStage": "Perito",
        "requirements": [
          "emissao-defensiva",
          "corpo-armadurado"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:armament",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-perceber-emocoes",
    "name": "Perceber Emoções",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "perceber-emocoes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.238",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 238. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Inexperiente",
        "requirements": [],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Sensorial"
      ]
    }
  },
  {
    "id": "haki-antecipacao",
    "name": "Antecipação",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "antecipacao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.238",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 238. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Inexperiente",
        "requirements": [],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Precavido"
      ]
    }
  },
  {
    "id": "haki-antevisao",
    "name": "Antevisão",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "antevisao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.238",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 238. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 4,
        "minimumStage": "Inexperiente",
        "requirements": [],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-previsao",
    "name": "Previsão",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "previsao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.238",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 238. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 3,
        "minimumStage": "Inexperiente",
        "requirements": [],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-perceber-presenca",
    "name": "Perceber Presença",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "perceber-presenca",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.238",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 238. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Treinado",
        "requirements": [
          "perceber-emocoes"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Sensorial"
      ]
    }
  },
  {
    "id": "haki-clarividencia",
    "name": "Clarividência",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "clarividencia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Treinado",
        "requirements": [
          "antecipacao"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Precavido"
      ]
    }
  },
  {
    "id": "haki-passo-antecipado",
    "name": "Passo Antecipado",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "passo-antecipado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Treinado",
        "requirements": [
          "antevisao"
        ],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-antevisao-sobrenatural",
    "name": "Antevisão Sobrenatural",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "antevisao-sobrenatural",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 3,
        "minimumStage": "Treinado",
        "requirements": [
          "antevisao"
        ],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-previsao-sobrenatural",
    "name": "Previsão Sobrenatural",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "previsao-sobrenatural",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Treinado",
        "requirements": [
          "previsao"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-perceber-desafio",
    "name": "Perceber Desafio",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "perceber-desafio",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 1,
        "minimumStage": "Treinado",
        "requirements": [
          "perceber-presenca"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Sensorial"
      ]
    }
  },
  {
    "id": "haki-vidente",
    "name": "Vidente",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "vidente",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Treinado",
        "requirements": [
          "clarividencia"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Precavido"
      ]
    }
  },
  {
    "id": "haki-perceber-o-futuro",
    "name": "Perceber o Futuro",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "perceber-o-futuro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.239",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 239. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 4,
        "minimumStage": "Perito",
        "requirements": [
          "perceber-desafio"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Sensorial"
      ]
    }
  },
  {
    "id": "haki-premonicao",
    "name": "Premonição",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "premonicao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 2,
        "minimumStage": "Perito",
        "requirements": [
          "vidente"
        ],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Precavido"
      ]
    }
  },
  {
    "id": "haki-ver-o-futuro",
    "name": "Ver o Futuro",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ver-o-futuro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Perito",
        "requirements": [
          "vidente"
        ],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Precavido"
      ]
    }
  },
  {
    "id": "haki-antecipar-movimentos",
    "name": "Antecipar Movimentos",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "antecipar-movimentos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 4,
        "minimumStage": "Treinado",
        "requirements": [
          "passo-antecipado"
        ],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-antevisao-especial",
    "name": "Antevisão Especial",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "antevisao-especial",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Treinado",
        "requirements": [
          "antevisao-sobrenatural"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-impeto-antecipado",
    "name": "Ímpeto Antecipado",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "impeto-antecipado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Treinado",
        "requirements": [
          "previsao-sobrenatural"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-previsao-especial",
    "name": "Previsão Especial",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "previsao-especial",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Treinado",
        "requirements": [
          "previsao-sobrenatural"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-antevisao-profetica",
    "name": "Antevisão Profética",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "antevisao-profetica",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Perito",
        "requirements": [
          "antecipar-movimentos",
          "antevisao-especial"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Defensivo"
      ]
    }
  },
  {
    "id": "haki-previsao-profetica",
    "name": "Previsão Profética",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "previsao-profetica",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.240",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 240. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "observation",
        "cost": 5,
        "minimumStage": "Perito",
        "requirements": [
          "impeto-antecipado",
          "previsao-especial"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:observation",
        "haki-branch:Ofensivo"
      ]
    }
  },
  {
    "id": "haki-rei",
    "name": "Rei",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "rei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.241",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 241. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 0,
        "minimumStage": "Latente",
        "requirements": [],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-autoridade-do-rei",
    "name": "Autoridade do Rei",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "autoridade-do-rei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.241",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 241. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 3,
        "minimumStage": "Treinado",
        "requirements": [
          "rei"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-superacao-majestosa",
    "name": "Superação Majestosa",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "superacao-majestosa",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 6,
        "minimumStage": "Treinado",
        "requirements": [
          "rei"
        ],
        "rank": 0,
        "maxRank": 2
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-imposicao-do-rei",
    "name": "Imposição do Rei",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "imposicao-do-rei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 4,
        "minimumStage": "Treinado",
        "requirements": [
          "rei"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-vontade-do-rei",
    "name": "Vontade do Rei",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "vontade-do-rei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 6,
        "minimumStage": "Treinado",
        "requirements": [
          "rei"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-soberania-do-rei",
    "name": "Soberania do Rei",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "soberania-do-rei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 3,
        "minimumStage": "Treinado",
        "requirements": [
          "autoridade-do-rei"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-presenca-esmagadora",
    "name": "Presença Esmagadora",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "presenca-esmagadora",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 5,
        "minimumStage": "Perito",
        "requirements": [
          "soberania-do-rei",
          "superacao-majestosa"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-armamento-do-rei",
    "name": "Armamento do Rei",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "armamento-do-rei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 7,
        "minimumStage": "Perito",
        "requirements": [
          "imposicao-do-rei"
        ],
        "rank": 0,
        "maxRank": 3
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  },
  {
    "id": "haki-emissao-de-autoridade",
    "name": "Emissão de Autoridade",
    "type": "hakiTalent",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "emissao-de-autoridade",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.242",
      "description": "Consultar os efeitos e as exceções em Jogador 2.1, página 242. Aquisição: pré-requisitos, PA e formas configurados; efeitos de combate ainda exigem revisão individual.",
      "rulesReviewed": false,
      "activity": {
        "activation": "passive"
      },
      "hakiTalent": {
        "focus": "king",
        "cost": 5,
        "minimumStage": "Perito",
        "requirements": [
          "imposicao-do-rei",
          "vontade-do-rei"
        ],
        "rank": 0,
        "maxRank": 1
      },
      "tags": [
        "haki-tree:king",
        "haki-branch:Rei"
      ]
    }
  }
].map(item=>({...item,system:{...item.system,...bookDescription(item)}}));
