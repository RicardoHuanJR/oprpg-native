// Numeric mechanics and references transcribed from the user-provided Jogador 2.1. No book prose or personal artwork.
export const CATALOG = [
  {
    "id": "weapon-adaga-kunai",
    "name": "Adaga/Kunai",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "adaga-kunai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 20000,
        "weight": 0.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d4",
        "ammunitionCost": 0,
        "range": "Acuidade e Arremesso (distância 6/15 metros)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Sangramento”.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade e Arremesso (distância 6/15 metros)"
        ]
      }
    }
  },
  {
    "id": "weapon-daito-katana",
    "name": "Daito Katana",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "daito-katana",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 80000,
        "weight": 1.6,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "Acuidade e Versátil (1d8)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "A próxima jogada de ataque (comum) feita contra você, até o final do seu próximo turno, falha.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade e Versátil (1d8)"
        ]
      }
    }
  },
  {
    "id": "weapon-espada-montante",
    "name": "Espada Montante",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "espada-montante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 150000,
        "weight": 6.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "2d6",
        "ammunitionCost": 0,
        "range": "Alcance, Arma de Cerco, Duas Mãos e Pesada"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Você recebe +2 na Classe de Resistência, até o início do seu próximo turno.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance, Arma de Cerco, Duas Mãos e Pesada"
        ]
      }
    }
  },
  {
    "id": "weapon-katana",
    "name": "Katana",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "katana",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 70000,
        "weight": 1.2,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "Acuidade"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Os dados de dano da arma são maximizados.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade"
        ]
      }
    }
  },
  {
    "id": "weapon-kogatana",
    "name": "Kogatana",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kogatana",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 30000,
        "weight": 0.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d4",
        "ammunitionCost": 0,
        "range": "Acuidade"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Sangramento”.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade"
        ]
      }
    }
  },
  {
    "id": "weapon-machado",
    "name": "Machado",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "machado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 55000,
        "weight": 1.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "Arremesso (distância 6/15 metros)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Você recebe a condição “Empoderado”, até o final do seu próximo turno.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Arremesso (distância 6/15 metros)"
        ]
      }
    }
  },
  {
    "id": "weapon-machado-grande",
    "name": "Machado Grande",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "machado-grande",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 90000,
        "weight": 3.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d12",
        "ammunitionCost": 0,
        "range": "Alcance, Duas Mãos e Pesada"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Você causa 1d6 de dano Cortante em todas as criaturas a até 3 metros de você.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance, Duas Mãos e Pesada"
        ]
      }
    }
  },
  {
    "id": "weapon-nodachi",
    "name": "Nodachi",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "nodachi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 100000,
        "weight": 2.8,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d8",
        "ammunitionCost": 0,
        "range": "Alcance, Duas Mãos e Pesada"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Sua próxima jogada de ataque (comum), até o final do seu próximo turno, tem margem de acerto crítico 16-20.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance, Duas Mãos e Pesada"
        ]
      }
    }
  },
  {
    "id": "weapon-rapieira",
    "name": "Rapieira",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rapieira",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 70000,
        "weight": 1.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "Acuidade"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "A próxima Salvaguarda de Destreza recebe sucesso automático, até o fim do encontro de combate.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade"
        ]
      }
    }
  },
  {
    "id": "weapon-sabre",
    "name": "Sabre",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "sabre",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 70000,
        "weight": 1.1,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "-"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Você recebe 20 Pontos de Vida temporários, que duram até o início do seu próximo turno.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "-"
        ]
      }
    }
  },
  {
    "id": "weapon-shikomizue",
    "name": "Shikomizue",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shikomizue",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 75000,
        "weight": 1.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-cortantes"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "Acuidade"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "A sua próxima jogada de ataque (comum ou Técnicas), até o final do seu próximo turno, recebe +3 de acerto.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade"
        ]
      }
    }
  },
  {
    "id": "weapon-bastao",
    "name": "Bastão",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "bastao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 40000,
        "weight": 1.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-marciais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Alcance e Duas Mãos"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Caído”.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance e Duas Mãos"
        ]
      }
    }
  },
  {
    "id": "weapon-kanabo-tacape",
    "name": "Kanabo/Tacape",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kanabo-tacape",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 60000,
        "weight": 4.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-marciais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Arma de Cerco, Duas Mãos e Pesada"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Ao final do cálculo de dano, empurre a criatura por 6 metros ou adicione 1d8 de dano Contundente adicional.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Arma de Cerco, Duas Mãos e Pesada"
        ]
      }
    }
  },
  {
    "id": "weapon-luva-de-ferro",
    "name": "Luva de Ferro",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "luva-de-ferro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 20000,
        "weight": 0.8,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-marciais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "-"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "A sua próxima jogada de ataque (comum ou Técnicas), até o final do seu próximo turno, recebe +3 de acerto.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "-"
        ]
      }
    }
  },
  {
    "id": "weapon-nunchaku",
    "name": "Nunchaku",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "nunchaku",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 25000,
        "weight": 1.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-marciais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Acuidade"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Ao final do cálculo de dano, adicione 1d12 de dano Contundente.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade"
        ]
      }
    }
  },
  {
    "id": "weapon-par-de-tonfas",
    "name": "Par de Tonfas",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "par-de-tonfas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.252",
      "description": "Consultar a regra em Jogador 2.1, página 252.",
      "equipment": {
        "price": 42000,
        "weight": 2.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-marciais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Duas Mãos"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Você recebe +2 na Classe de Resistência, até o início do seu próximo turno.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Duas Mãos"
        ]
      }
    }
  },
  {
    "id": "weapon-canhao-bazuca",
    "name": "Canhão/Bazuca",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "canhao-bazuca",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 350000,
        "weight": 12.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-de-fogo"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "dexterity",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 1,
        "range": "Distância (21/30 metros), Duas Mãos, Munição, Pesada e Recarga"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Você recebe +6 metros de deslocamento, até o fim do seu próximo turno.",
        "reload": true,
        "normalRange": 21,
        "maximumRange": 30,
        "properties": [
          "Distância (21/30 metros), Duas Mãos, Munição, Pesada e Recarga"
        ]
      }
    }
  },
  {
    "id": "weapon-escopeta",
    "name": "Escopeta",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "escopeta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 150000,
        "weight": 3.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-de-fogo"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "dexterity",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 1,
        "range": "Distância (cone de 3 metros), Duas Mãos, Munição e Recarga"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "",
        "reload": true,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Distância (cone de 3 metros), Duas Mãos, Munição e Recarga"
        ]
      }
    }
  },
  {
    "id": "weapon-mosquete",
    "name": "Mosquete",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mosquete",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 100000,
        "weight": 4.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-de-fogo"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "dexterity",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 1,
        "range": "Distância (18/24 metros), Munição e Duas Mãos"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Sua próxima jogada de ataque (comum), até o final do seu próximo turno, tem margem de acerto crítico 16-20.",
        "reload": false,
        "normalRange": 18,
        "maximumRange": 24,
        "properties": [
          "Distância (18/24 metros), Munição e Duas Mãos"
        ]
      }
    }
  },
  {
    "id": "weapon-metralhadora",
    "name": "Metralhadora",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "metralhadora",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 380000,
        "weight": 5.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-de-fogo"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "dexterity",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 1,
        "range": "Distância (cone de 6 metros), Duas Mãos, Munição e Recarga"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "",
        "reload": true,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Distância (cone de 6 metros), Duas Mãos, Munição e Recarga"
        ]
      }
    }
  },
  {
    "id": "weapon-pistola",
    "name": "Pistola",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "pistola",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 70000,
        "weight": 1.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-de-fogo"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "dexterity",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 1,
        "range": "Distância (9/15 metros) e Munição"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Caso tenha errado uma ou mais jogadas de ataque (comum ou Técnicas) no turno atual, você recebe 2 jogadas de ataque (comum) adicionais que causam apenas o dano da munição.",
        "reload": false,
        "normalRange": 9,
        "maximumRange": 15,
        "properties": [
          "Distância (9/15 metros) e Munição"
        ]
      }
    }
  },
  {
    "id": "equipment-bola-de-chumbo",
    "name": "Bola de Chumbo",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "bola-de-chumbo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 15000,
        "weight": 3.5,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": true,
      "ammunitionDamage": "3d10",
      "ammunitionType": "bludgeoning"
    }
  },
  {
    "id": "equipment-bola-explosiva",
    "name": "Bola Explosiva",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "bola-explosiva",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 32000,
        "weight": 3.8,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": false,
      "ammunitionDamage": "",
      "ammunitionType": "bludgeoning"
    }
  },
  {
    "id": "equipment-dardo",
    "name": "Dardo",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "dardo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 200,
        "weight": 0.1,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": true,
      "ammunitionDamage": "1",
      "ammunitionType": "piercing"
    }
  },
  {
    "id": "equipment-flecha",
    "name": "Flecha",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "flecha",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 500,
        "weight": 0.2,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": true,
      "ammunitionDamage": "1d6",
      "ammunitionType": "piercing"
    }
  },
  {
    "id": "equipment-municao-de-kairoseki",
    "name": "Munição de Kairoseki",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "municao-de-kairoseki",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 1000000,
        "weight": 0.1,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": true,
      "ammunitionDamage": "1d8",
      "ammunitionType": "piercing"
    }
  },
  {
    "id": "equipment-municao-esferica",
    "name": "Munição Esférica",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "municao-esferica",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 500,
        "weight": 0.1,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": true,
      "ammunitionDamage": "1d8",
      "ammunitionType": "bludgeoning"
    }
  },
  {
    "id": "equipment-municao-perfurante",
    "name": "Munição Perfurante",
    "type": "equipment",
    "img": "icons/svg/item-bag.svg",
    "system": {
      "identifier": "municao-perfurante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.253",
      "description": "Consultar a regra em Jogador 2.1, página 253.",
      "equipment": {
        "price": 1000,
        "weight": 0.1,
        "quantity": 1
      },
      "tags": [
        "ammunition"
      ],
      "rulesReviewed": true,
      "ammunitionDamage": "1d8",
      "ammunitionType": "piercing"
    }
  },
  {
    "id": "weapon-arco-estilingue",
    "name": "Arco/Estilingue",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "arco-estilingue",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 22500,
        "weight": 0.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Distância (18/24 metros), Duas Mãos e Munição"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Enfurecido”, até o final do próximo turno da criatura.",
        "reload": false,
        "normalRange": 18,
        "maximumRange": 24,
        "properties": [
          "Distância (18/24 metros), Duas Mãos e Munição"
        ]
      }
    }
  },
  {
    "id": "weapon-dinamite",
    "name": "Dinamite",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "dinamite",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 25000,
        "weight": 0.6,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Arremesso (distância 6 metros)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Arremesso (distância 6 metros)"
        ]
      }
    }
  },
  {
    "id": "weapon-escudo-de-ferro",
    "name": "Escudo de Ferro",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "escudo-de-ferro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 50000,
        "weight": 4.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d4",
        "ammunitionCost": 0,
        "range": "-"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Você recebe 20 Pontos de Vida temporários, que duram até o início do seu próximo turno.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "-"
        ]
      },
      "rules": [
        {
          "id": "shield-cr",
          "kind": "defense",
          "key": "",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "equipped": true,
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false
          }
        }
      ]
    }
  },
  {
    "id": "weapon-chicote",
    "name": "Chicote",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "chicote",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 7500,
        "weight": 1.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d6",
        "ammunitionCost": 0,
        "range": "Acuidade e Alcance"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Incapacitado”, até o final do próximo turno da criatura.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade e Alcance"
        ]
      }
    }
  },
  {
    "id": "weapon-foice",
    "name": "Foice",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "foice",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 50000,
        "weight": 3.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d8",
        "ammunitionCost": 0,
        "range": "Alcance e Duas Mãos"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Ao final do cálculo de dano, puxe a criatura para 1,5 metro de você ou adicione 1d8 de dano adicional.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance e Duas Mãos"
        ]
      }
    }
  },
  {
    "id": "weapon-lanca",
    "name": "Lança",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "lanca",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 70000,
        "weight": 2.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d10",
        "ammunitionCost": 0,
        "range": "Alcance, Duas Mãos e Arremesso (distância 6/12 metros)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "piercing"
      },
      "weapon": {
        "expertise": "Caso tenha errado uma ou mais jogadas de ataque (comum ou Técnicas) no turno atual, você recebe 2 jogadas de ataque (comum) adicionais que causam apenas o dano da lança.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance, Duas Mãos e Arremesso (distância 6/12 metros)"
        ]
      }
    }
  },
  {
    "id": "weapon-mangual",
    "name": "Mangual",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mangual",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 30000,
        "weight": 4.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d10",
        "ammunitionCost": 0,
        "range": "Arma de Cerco, Pesada"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "piercing"
      },
      "weapon": {
        "expertise": "Ao final do cálculo de dano, adicione pontos de dano extra em um valor igual à metade da CR do alvo.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Arma de Cerco, Pesada"
        ]
      }
    }
  },
  {
    "id": "weapon-martelo-de-guerra",
    "name": "Martelo de Guerra",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "martelo-de-guerra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 80000,
        "weight": 7.0,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d12",
        "ammunitionCost": 0,
        "range": "Arma de Cerco, Duas Mãos e Pesada"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "Ao final do cálculo de dano, empurre a criatura por 6 metros ou adicione 1d8 de dano adicional.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Arma de Cerco, Duas Mãos e Pesada"
        ]
      }
    }
  },
  {
    "id": "weapon-naginata-alabarda",
    "name": "Naginata/Alabarda",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "naginata-alabarda",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 100000,
        "weight": 7.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d10",
        "ammunitionCost": 0,
        "range": "Alcance, Pesada e Versátil (1d12)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "slashing"
      },
      "weapon": {
        "expertise": "Você causa 1d6 de dano em todas as criaturas a até 3 metros de você.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance, Pesada e Versátil (1d12)"
        ]
      }
    }
  },
  {
    "id": "weapon-tridente",
    "name": "Tridente",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tridente",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 70000,
        "weight": 3.5,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d10",
        "ammunitionCost": 0,
        "range": "Alcance e Duas Mãos"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "piercing"
      },
      "weapon": {
        "expertise": "A criatura atingida tem seu deslocamento reduzido pela metade, até o final do próximo turno dela.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Alcance e Duas Mãos"
        ]
      }
    }
  },
  {
    "id": "weapon-zarabatana",
    "name": "Zarabatana",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "zarabatana",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 8000,
        "weight": 0.3,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": false,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "",
        "ammunitionCost": 0,
        "range": "Distância (6/9 metros) e Munição"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "bludgeoning"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Impedido”, até o final do próximo turno da criatura.",
        "reload": false,
        "normalRange": 6,
        "maximumRange": 9,
        "properties": [
          "Distância (6/9 metros) e Munição"
        ]
      }
    }
  },
  {
    "id": "weapon-shuriken",
    "name": "Shuriken",
    "type": "weapon",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shuriken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.254",
      "description": "Consultar a regra em Jogador 2.1, página 254.",
      "equipment": {
        "price": 500,
        "weight": 0.1,
        "quantity": 1
      },
      "tags": [
        "weaponCategory:armas-especiais"
      ],
      "rulesReviewed": true,
      "activity": {
        "activation": "action",
        "attribute": "strength",
        "proficiencyMode": "style",
        "damageFormula": "1d4",
        "ammunitionCost": 0,
        "range": "Acuidade e Arremesso (distância 6/12 metros)"
      },
      "resolution": {
        "kind": "attack",
        "addAttributeToAttack": true,
        "addAttributeToDamage": true,
        "damageType": "piercing"
      },
      "weapon": {
        "expertise": "A criatura atingida recebe a condição “Sangramento”.",
        "reload": false,
        "normalRange": 0,
        "maximumRange": 0,
        "properties": [
          "Acuidade e Arremesso (distância 6/12 metros)"
        ]
      }
    }
  },
  {
    "id": "feature-aprimoramento-de-atributo",
    "name": "Aprimoramento De Atributo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "aprimoramento-de-atributo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.38",
      "description": "Consultar a regra em Jogador 2.1, página 38.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      },
      "advancements": [
        {
          "id": "hb-attributes",
          "label": "Aprimoramento de atributo",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-concentracao-inabalavel",
    "name": "Concentração Inabalável",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "concentracao-inabalavel",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.38",
      "description": "Consultar a regra em Jogador 2.1, página 38.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-corpo-de-guerreiro",
    "name": "Corpo De Guerreiro",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "corpo-de-guerreiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.38",
      "description": "Consultar a regra em Jogador 2.1, página 38.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-defesa-ofensiva",
    "name": "Defesa Ofensiva",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "defesa-ofensiva",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.38",
      "description": "Consultar a regra em Jogador 2.1, página 38.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-dificuldade-inefavel",
    "name": "Dificuldade Inefável",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "dificuldade-inefavel",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.38",
      "description": "Consultar a regra em Jogador 2.1, página 38.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-gerenciamento-de-energia",
    "name": "Gerenciamento De Energia",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "gerenciamento-de-energia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-mente-e-corpo",
    "name": "Mente E Corpo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mente-e-corpo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-mira-treinada",
    "name": "Mira Treinada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mira-treinada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-perito-em-tecnicas",
    "name": "Perito Em Técnicas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "perito-em-tecnicas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-preparacao-para-a-batalha",
    "name": "Preparação Para A Batalha",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "preparacao-para-a-batalha",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-primeiros-socorros",
    "name": "Primeiros Socorros",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "primeiros-socorros",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-prodigio-do-combate",
    "name": "Prodígio Do Combate",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "prodigio-do-combate",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.39",
      "description": "Consultar a regra em Jogador 2.1, página 39.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-quebrador-de-regras",
    "name": "Quebrador De Regras",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "quebrador-de-regras",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-recuo-estrategico",
    "name": "Recuo Estratégico",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "recuo-estrategico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-reflexo-afiado",
    "name": "Reflexo Afiado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "reflexo-afiado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-retomar-o-folego",
    "name": "Retomar O Fôlego",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "retomar-o-folego",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-robusto",
    "name": "Robusto",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "robusto",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      },
      "rules": [
        {
          "id": "robust-hp",
          "kind": "vitality",
          "key": "",
          "amount": 3,
          "scale": "character"
        }
      ]
    }
  },
  {
    "id": "feature-sortudo",
    "name": "Sortudo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "sortudo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-superando-limites",
    "name": "Superando Limites",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "superando-limites",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "feature-superioridade-absoluta",
    "name": "Superioridade Absoluta",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "superioridade-absoluta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.40",
      "description": "Consultar a regra em Jogador 2.1, página 40.",
      "tags": [
        "basic-ability"
      ],
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "species-anoes",
    "name": "Anões",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "anoes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.16",
      "description": "Consultar a regra em Jogador 2.1, página 16.",
      "baseHP": 8,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {
        "insight": -10
      },
      "traits": "Traços e variantes: consultar Jogador 2.1, p.16–17."
    }
  },
  {
    "id": "species-celestiais",
    "name": "Celestiais",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "celestiais",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.18",
      "description": "Consultar a regra em Jogador 2.1, página 18.",
      "baseHP": 10,
      "movement": 12.0,
      "swimming": 3.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Herança cultural: duas perícias",
          "kind": "skill",
          "options": [
            "haki",
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.18–19."
    }
  },
  {
    "id": "species-celestiais-birkans",
    "name": "Celestiais — Birkans",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "celestiais-birkans",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.18",
      "description": "Consultar a regra em Jogador 2.1, página 18.",
      "baseHP": 10,
      "movement": 12.0,
      "swimming": 3.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Herança cultural: duas perícias",
          "kind": "skill",
          "options": [
            "haki",
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {
        "performance": 5
      },
      "traits": "Traços e variantes: consultar Jogador 2.1, p.18–19. Variante Birkans.",
      "ancestries": [
        "celestiais"
      ]
    }
  },
  {
    "id": "species-celestiais-shandians",
    "name": "Celestiais — Shandians",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "celestiais-shandians",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.18",
      "description": "Consultar a regra em Jogador 2.1, página 18.",
      "baseHP": 10,
      "movement": 12.0,
      "swimming": 3.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Herança cultural: duas perícias",
          "kind": "skill",
          "options": [
            "haki",
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {
        "athletics": 5
      },
      "traits": "Traços e variantes: consultar Jogador 2.1, p.18–19. Variante Shandians.",
      "ancestries": [
        "celestiais"
      ]
    }
  },
  {
    "id": "species-celestiais-skypeans",
    "name": "Celestiais — Skypeans",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "celestiais-skypeans",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.18",
      "description": "Consultar a regra em Jogador 2.1, página 18.",
      "baseHP": 10,
      "movement": 12.0,
      "swimming": 3.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Herança cultural: duas perícias",
          "kind": "skill",
          "options": [
            "haki",
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {
        "persuasion": 5
      },
      "traits": "Traços e variantes: consultar Jogador 2.1, p.18–19. Variante Skypeans.",
      "ancestries": [
        "celestiais"
      ]
    }
  },
  {
    "id": "species-gigantes",
    "name": "Gigantes",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "gigantes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.20",
      "description": "Consultar a regra em Jogador 2.1, página 20.",
      "baseHP": 20,
      "movement": 9.0,
      "swimming": 3.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.20–21.",
      "rules": [
        {
          "id": "attributeProficiency-strength",
          "kind": "attributeProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "attributeMultiplier-strength",
          "kind": "attributeMultiplier",
          "key": "strength",
          "amount": 2,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveProficiency-strength",
          "kind": "saveProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveMultiplier-strength",
          "kind": "saveMultiplier",
          "key": "strength",
          "amount": 2,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "species-humanos",
    "name": "Humanos",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "humanos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.22",
      "description": "Consultar a regra em Jogador 2.1, página 22.",
      "baseHP": 10,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Adaptação: três perícias",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 3,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "human-flaw",
          "label": "Aspectos humanos",
          "kind": "trait",
          "options": [
            "Ganância",
            "Gula",
            "Inveja",
            "Ira",
            "Luxúria",
            "Preguiça",
            "Orgulho"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "aptidao-natural",
          "label": "Aptidão Natural: dobrar proficiência numa perícia proficiente",
          "kind": "skillMultiplier",
          "options": [
            "athletics",
            "acrobatics",
            "stealth",
            "sleightOfHand",
            "history",
            "investigation",
            "medicine",
            "nature",
            "survival",
            "haki",
            "insight",
            "perception",
            "supernatural",
            "luck",
            "performance",
            "deception",
            "intimidation",
            "persuasion",
            "provocation"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "character",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.22–23."
    }
  },
  {
    "id": "species-humanos-bracos-longos",
    "name": "Humanos — Braços Longos",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "humanos-bracos-longos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.22",
      "description": "Consultar a regra em Jogador 2.1, página 22.",
      "baseHP": 10,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Adaptação: três perícias",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 3,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "human-flaw",
          "label": "Aspectos humanos",
          "kind": "trait",
          "options": [
            "Ganância",
            "Gula",
            "Inveja",
            "Ira",
            "Luxúria",
            "Preguiça",
            "Orgulho"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {
        "sleightOfHand": 2
      },
      "traits": "Traços e variantes: consultar Jogador 2.1, p.22–23. Variante Braços Longos.",
      "ancestries": [
        "humanos"
      ]
    }
  },
  {
    "id": "species-humanos-pernas-longas",
    "name": "Humanos — Pernas Longas",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "humanos-pernas-longas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.22",
      "description": "Consultar a regra em Jogador 2.1, página 22.",
      "baseHP": 10,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Adaptação: três perícias",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 3,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "human-flaw",
          "label": "Aspectos humanos",
          "kind": "trait",
          "options": [
            "Ganância",
            "Gula",
            "Inveja",
            "Ira",
            "Luxúria",
            "Preguiça",
            "Orgulho"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.22–23. Variante Pernas Longas.",
      "ancestries": [
        "humanos"
      ]
    }
  },
  {
    "id": "species-humanos-kujas",
    "name": "Humanos — Kujas",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "humanos-kujas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.22",
      "description": "Consultar a regra em Jogador 2.1, página 22.",
      "baseHP": 10,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Adaptação: três perícias",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 3,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "human-flaw",
          "label": "Aspectos humanos",
          "kind": "trait",
          "options": [
            "Ganância",
            "Gula",
            "Inveja",
            "Ira",
            "Luxúria",
            "Preguiça",
            "Orgulho"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.22–23. Variante Kujas.",
      "ancestries": [
        "humanos"
      ]
    }
  },
  {
    "id": "species-humanos-pescoco-de-cobra",
    "name": "Humanos — Pescoço de Cobra",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "humanos-pescoco-de-cobra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.22",
      "description": "Consultar a regra em Jogador 2.1, página 22.",
      "baseHP": 10,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Adaptação: três perícias",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 3,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "human-flaw",
          "label": "Aspectos humanos",
          "kind": "trait",
          "options": [
            "Ganância",
            "Gula",
            "Inveja",
            "Ira",
            "Luxúria",
            "Preguiça",
            "Orgulho"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.22–23. Variante Pescoço de Cobra.",
      "ancestries": [
        "humanos"
      ]
    }
  },
  {
    "id": "species-humanos-tres-olhos",
    "name": "Humanos — Três Olhos",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "humanos-tres-olhos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.22",
      "description": "Consultar a regra em Jogador 2.1, página 22.",
      "baseHP": 10,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "racial-skills",
          "label": "Adaptação: três perícias",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "performance",
            "deception",
            "stealth",
            "history",
            "intimidation",
            "insight",
            "investigation",
            "medicine",
            "nature",
            "perception",
            "persuasion",
            "sleightOfHand",
            "provocation",
            "survival"
          ],
          "count": 3,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "human-flaw",
          "label": "Aspectos humanos",
          "kind": "trait",
          "options": [
            "Ganância",
            "Gula",
            "Inveja",
            "Ira",
            "Luxúria",
            "Preguiça",
            "Orgulho"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "third-eye",
          "label": "Abrir os olhos",
          "kind": "skill",
          "options": [
            "haki",
            "supernatural",
            "luck"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.22–23. Variante Três Olhos.",
      "ancestries": [
        "humanos"
      ]
    }
  },
  {
    "id": "species-lunarianos",
    "name": "Lunarianos",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "lunarianos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.25",
      "description": "Consultar a regra em Jogador 2.1, página 25.",
      "baseHP": 16,
      "movement": 9.0,
      "swimming": 3.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.25–26."
    }
  },
  {
    "id": "species-minks",
    "name": "Minks",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "minks",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.28",
      "description": "Consultar a regra em Jogador 2.1, página 28.",
      "baseHP": 12,
      "movement": 9.0,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.28–29."
    }
  },
  {
    "id": "species-minks-ageis",
    "name": "Minks — Ágeis",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "minks-ageis",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.28",
      "description": "Consultar a regra em Jogador 2.1, página 28.",
      "baseHP": 12,
      "movement": 12,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.28–29. Variante Ágeis.",
      "ancestries": [
        "minks"
      ],
      "rules": [
        {
          "id": "movement-distance",
          "kind": "movement",
          "key": "distance",
          "amount": 12,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "movement-climbing",
          "kind": "movement",
          "key": "climbing",
          "amount": 9,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "species-minks-meaos",
    "name": "Minks — Meãos",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "minks-meaos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.28",
      "description": "Consultar a regra em Jogador 2.1, página 28.",
      "baseHP": 12,
      "movement": 18,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.28–29. Variante Meãos.",
      "ancestries": [
        "minks"
      ],
      "rules": [
        {
          "id": "movement-distance",
          "kind": "movement",
          "key": "distance",
          "amount": 12,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "ignoreDifficultTerrain-all",
          "kind": "ignoreDifficultTerrain",
          "key": "",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "species-minks-robustos",
    "name": "Minks — Robustos",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "minks-robustos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.28",
      "description": "Consultar a regra em Jogador 2.1, página 28.",
      "baseHP": 12,
      "movement": 12,
      "swimming": 4.5,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.28–29. Variante Robustos.",
      "ancestries": [
        "minks"
      ],
      "rules": [
        {
          "id": "movement-distance",
          "kind": "movement",
          "key": "distance",
          "amount": 18,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "species-povo-do-mar",
    "name": "Povo do Mar",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "povo-do-mar",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.30",
      "description": "Consultar a regra em Jogador 2.1, página 30.",
      "baseHP": 14,
      "movement": 9.0,
      "swimming": 15.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.30–31.",
      "rules": [
        {
          "id": "attributeProficiency-strength",
          "kind": "attributeProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "attributeMultiplier-strength",
          "kind": "attributeMultiplier",
          "key": "strength",
          "amount": 1.5,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveProficiency-strength",
          "kind": "saveProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveMultiplier-strength",
          "kind": "saveMultiplier",
          "key": "strength",
          "amount": 1.5,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "species-povo-do-mar-homem-peixe",
    "name": "Povo do Mar — Homem-Peixe",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "povo-do-mar-homem-peixe",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.30",
      "description": "Consultar a regra em Jogador 2.1, página 30.",
      "baseHP": 14,
      "movement": 9.0,
      "swimming": 15.0,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.30–31. Variante Homem-Peixe.",
      "ancestries": [
        "povo-do-mar"
      ],
      "rules": [
        {
          "id": "attributeProficiency-strength",
          "kind": "attributeProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "attributeMultiplier-strength",
          "kind": "attributeMultiplier",
          "key": "strength",
          "amount": 1.5,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveProficiency-strength",
          "kind": "saveProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveMultiplier-strength",
          "kind": "saveMultiplier",
          "key": "strength",
          "amount": 1.5,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "species-povo-do-mar-sireno",
    "name": "Povo do Mar — Sireno",
    "type": "species",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "identifier": "povo-do-mar-sireno",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.30",
      "description": "Consultar a regra em Jogador 2.1, página 30.",
      "baseHP": 14,
      "movement": 9.0,
      "swimming": 18,
      "advancements": [
        {
          "id": "racial-attributes",
          "label": "Ajuste da espécie: +2 ou +1 em dois atributos",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "skillBonuses": {},
      "traits": "Traços e variantes: consultar Jogador 2.1, p.30–31. Variante Sireno.",
      "ancestries": [
        "povo-do-mar"
      ],
      "rules": [
        {
          "id": "attributeProficiency-strength",
          "kind": "attributeProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "attributeMultiplier-strength",
          "kind": "attributeMultiplier",
          "key": "strength",
          "amount": 1.5,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveProficiency-strength",
          "kind": "saveProficiency",
          "key": "strength",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "saveMultiplier-strength",
          "kind": "saveMultiplier",
          "key": "strength",
          "amount": 1.5,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "feature-caminho-do-atirador-atirador-42",
    "name": "Caminho Do Atirador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "caminho-do-atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.42",
      "description": "Consultar a regra em Jogador 2.1, página 42.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-guarda-astuta-atirador-42",
    "name": "Guarda Astuta",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "guarda-astuta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.42",
      "description": "Consultar a regra em Jogador 2.1, página 42.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-atirador-de-elite-atirador-43",
    "name": "Atirador De Elite",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "atirador-de-elite",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.43",
      "description": "Consultar a regra em Jogador 2.1, página 43.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-franco-atirador-atirador-43",
    "name": "Franco Atirador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "franco-atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.43",
      "description": "Consultar a regra em Jogador 2.1, página 43.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-emissario-da-morte-atirador-43",
    "name": "Emissário Da Morte",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "emissario-da-morte",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.43",
      "description": "Consultar a regra em Jogador 2.1, página 43.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-atirador-44",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-contagem-de-balas-atirador-44",
    "name": "Contagem De Balas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "contagem-de-balas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-rei-atirador-atirador-44",
    "name": "Rei Atirador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "rei-atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-tempestade-de-balas-atirador-44",
    "name": "Tempestade De Balas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "tempestade-de-balas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-mira-absoluta-atirador-44",
    "name": "Mira Absoluta",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mira-absoluta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-mestre-atirador-atirador-44",
    "name": "Mestre Atirador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "feature-deus-atirador-atirador-44",
    "name": "Deus Atirador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "deus-atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.44",
      "description": "Consultar a regra em Jogador 2.1, página 44.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:atirador"
      ]
    }
  },
  {
    "id": "style-atirador",
    "name": "Atirador",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.41",
      "description": "Consultar a regra em Jogador 2.1, página 41.",
      "hitDie": 8,
      "primaryAttribute": "dexterity",
      "skillCount": 3,
      "skillProficiencies": [
        "haki",
        "acrobatics",
        "athletics",
        "performance",
        "deception",
        "stealth",
        "history",
        "intimidation",
        "insight",
        "investigation",
        "medicine",
        "nature",
        "perception",
        "persuasion",
        "sleightOfHand",
        "provocation",
        "survival",
        "supernatural",
        "luck"
      ],
      "saveProficiencies": [
        "dexterity",
        "wisdom"
      ],
      "equipmentProficiencies": [
        "Armas de Fogo, Lançador de Arpão, Bazuca, Canhão e Armas de Navio"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Mira Treinada",
            "Superioridade Absoluta"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-caminho-do-atirador",
          "label": "Característica: Caminho Do Atirador",
          "kind": "item",
          "options": [
            "catalog:feature-caminho-do-atirador-atirador-42"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-guarda-astuta",
          "label": "Característica: Guarda Astuta",
          "kind": "item",
          "options": [
            "catalog:feature-guarda-astuta-atirador-42"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-atirador-de-elite",
          "label": "Característica: Atirador De Elite",
          "kind": "item",
          "options": [
            "catalog:feature-atirador-de-elite-atirador-43"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-franco-atirador",
          "label": "Característica: Franco Atirador",
          "kind": "item",
          "options": [
            "catalog:feature-franco-atirador-atirador-43"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-emissario-da-morte",
          "label": "Característica: Emissário Da Morte",
          "kind": "item",
          "options": [
            "catalog:feature-emissario-da-morte-atirador-43"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-contagem-de-balas",
          "label": "Característica: Contagem De Balas",
          "kind": "item",
          "options": [
            "catalog:feature-contagem-de-balas-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-rei-atirador",
          "label": "Característica: Rei Atirador",
          "kind": "item",
          "options": [
            "catalog:feature-rei-atirador-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-tempestade-de-balas",
          "label": "Característica: Tempestade De Balas",
          "kind": "item",
          "options": [
            "catalog:feature-tempestade-de-balas-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mira-absoluta",
          "label": "Característica: Mira Absoluta",
          "kind": "item",
          "options": [
            "catalog:feature-mira-absoluta-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-atirador",
          "label": "Característica: Mestre Atirador",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-atirador-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-deus-atirador",
          "label": "Característica: Deus Atirador",
          "kind": "item",
          "options": [
            "catalog:feature-deus-atirador-atirador-44"
          ],
          "count": 1,
          "amount": 1,
          "level": 19,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "atirador-path",
          "label": "Caminho do Atirador",
          "kind": "trait",
          "options": [
            "Caminho do Duelista",
            "Caminho do Sniper"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "2 pistolas ou 1 mosquete com 80 unidades de munição esférica e 5d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-death-blossom-atirador-duelista",
    "name": "Death Blossom",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "death-blossom",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 1,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d6",
        "range": "Arma, Esfera",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 8 Munições (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-ultimo-recurso-atirador-duelista",
    "name": "Último Recurso",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ultimo-recurso",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-covering-atirador-duelista",
    "name": "Covering",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "covering",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 2,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "4d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 6 Munições (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-quick-fire-atirador-duelista",
    "name": "Quick Fire",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "quick-fire",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 3,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "reaction",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "2d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 1 Munição (Perfurante), Reação"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-defesa-improvisada-atirador-duelista",
    "name": "Defesa Improvisada",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "defesa-improvisada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-death-shower-atirador-duelista",
    "name": "Death Shower",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "death-shower",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 4,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "8d6",
        "range": "Arma, Cone",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 12 Munições (Perfurante), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "piercing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-stunning-shot-atirador-duelista",
    "name": "Stunning Shot",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "stunning-shot",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 5,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "6d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 2 Munições (Esférica), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-acerto-debilitante-atirador-duelista",
    "name": "Acerto Debilitante",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "acerto-debilitante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-quick-draw-atirador-duelista",
    "name": "Quick Draw",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "quick-draw",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 6,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "bonus",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "2d10",
        "range": "Até 15 metros, Esfera",
        "duration": "Até 1 minuto",
        "requirements": "Arma Favorita, Ação Bônus"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-execucao-atirador-duelista",
    "name": "Execução",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "execucao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.45",
      "description": "Consultar a regra em Jogador 2.1, página 45.",
      "grade": 7,
      "tags": [
        "style:atirador",
        "path:caminho-do-duelista"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "11d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 1 Munição (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-tiro-de-advertencia-atirador-sniper",
    "name": "Tiro de Advertência",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tiro-de-advertencia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 1,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, 1 Munição (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "will",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-saida-forcada-atirador-sniper",
    "name": "Saída Forçada",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "saida-forcada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-tiro-certeiro-atirador-sniper",
    "name": "Tiro Certeiro",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tiro-certeiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 2,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "3d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Mosquete, 1 Munição (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-mira-cruel-atirador-sniper",
    "name": "Mira Cruel",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mira-cruel",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 3,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "5d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Mosquete, 1 Munição (Perfurante), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-manobra-evasiva-atirador-sniper",
    "name": "Manobra Evasiva",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "manobra-evasiva",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-overwatch-atirador-sniper",
    "name": "Overwatch",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "overwatch",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 4,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 8,
        "range": "Arma, Linha",
        "duration": "Até 1 minuto, Concentração",
        "requirements": "Mosquete, 1 Munição qualquer para cada ataque, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-shooting-stars-atirador-sniper",
    "name": "Shooting Stars",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shooting-stars",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 5,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "10d6",
        "range": "Até 18 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Mosquete, 20 Munições (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-ruptura-atirador-sniper",
    "name": "Ruptura",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ruptura",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-zona-do-atirador-atirador-sniper",
    "name": "Zona do Atirador",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "zona-do-atirador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 6,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "5d10",
        "range": "Arma, Linha",
        "duration": "Até 1 minuto",
        "requirements": "Mosquete, 10 Munições (Perfurante), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-headshot-atirador-sniper",
    "name": "Headshot",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "headshot",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.47",
      "description": "Consultar a regra em Jogador 2.1, página 47.",
      "grade": 7,
      "tags": [
        "style:atirador",
        "path:caminho-do-sniper"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "12d10",
        "range": "Arma, Linha",
        "duration": "Instantâneo",
        "requirements": "Mosquete, 1 Munição (Perfurante), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-whip-and-gun-aventureiro-50",
    "name": "Whip And Gun",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "whip-and-gun",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.50",
      "description": "Consultar a regra em Jogador 2.1, página 50.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-pronto-para-a-aventura-aventureiro-50",
    "name": "Pronto Para A Aventura",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "pronto-para-a-aventura",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.50",
      "description": "Consultar a regra em Jogador 2.1, página 50.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-estilo-arriscado-aventureiro-51",
    "name": "Estilo Arriscado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "estilo-arriscado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.51",
      "description": "Consultar a regra em Jogador 2.1, página 51.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-aumento-no-valor-de-atributo-aventureiro-51",
    "name": "Aumento No Valor De Atributo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "aumento-no-valor-de-atributo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.51",
      "description": "Consultar a regra em Jogador 2.1, página 51.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-caminho-da-aventura-aventureiro-51",
    "name": "Caminho Da Aventura",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "caminho-da-aventura",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.51",
      "description": "Consultar a regra em Jogador 2.1, página 51.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-companheiro-inseparavel-aventureiro-52",
    "name": "Companheiro Inseparável",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "companheiro-inseparavel",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-aventureiro-52",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-reacao-imediata-aventureiro-52",
    "name": "Reação Imediata",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "reacao-imediata",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-controle-do-ambiente-aventureiro-52",
    "name": "Controle Do Ambiente",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "controle-do-ambiente",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-domador-aventureiro-52",
    "name": "Domador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "domador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-aventura-frenetica-aventureiro-52",
    "name": "Aventura Frenética",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "aventura-frenetica",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-mestre-aventureiro-aventureiro-52",
    "name": "Mestre Aventureiro",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-aventureiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "feature-explorador-destemido-aventureiro-52",
    "name": "Explorador Destemido",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "explorador-destemido",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.52",
      "description": "Consultar a regra em Jogador 2.1, página 52.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:aventureiro"
      ]
    }
  },
  {
    "id": "style-aventureiro",
    "name": "Aventureiro",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "aventureiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.49",
      "description": "Consultar a regra em Jogador 2.1, página 49.",
      "hitDie": 10,
      "primaryAttribute": "dexterity",
      "skillCount": 3,
      "skillProficiencies": [
        "haki",
        "acrobatics",
        "athletics",
        "performance",
        "deception",
        "stealth",
        "history",
        "intimidation",
        "insight",
        "investigation",
        "medicine",
        "nature",
        "perception",
        "persuasion",
        "sleightOfHand",
        "provocation",
        "survival",
        "supernatural",
        "luck"
      ],
      "saveProficiencies": [
        "dexterity",
        "constitution"
      ],
      "equipmentProficiencies": [
        "Armas Cortantes, Armas de Fogo, Armas Especiais e Armas Marciais"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Defesa Ofensiva",
            "Perito em Técnicas"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-whip-and-gun",
          "label": "Característica: Whip And Gun",
          "kind": "item",
          "options": [
            "catalog:feature-whip-and-gun-aventureiro-50"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-pronto-para-a-aventura",
          "label": "Característica: Pronto Para A Aventura",
          "kind": "item",
          "options": [
            "catalog:feature-pronto-para-a-aventura-aventureiro-50"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-estilo-arriscado",
          "label": "Característica: Estilo Arriscado",
          "kind": "item",
          "options": [
            "catalog:feature-estilo-arriscado-aventureiro-51"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-aumento-no-valor-de-atributo",
          "label": "Característica: Aumento No Valor De Atributo",
          "kind": "item",
          "options": [
            "catalog:feature-aumento-no-valor-de-atributo-aventureiro-51"
          ],
          "count": 1,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-caminho-da-aventura",
          "label": "Característica: Caminho Da Aventura",
          "kind": "item",
          "options": [
            "catalog:feature-caminho-da-aventura-aventureiro-51"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-companheiro-inseparavel",
          "label": "Característica: Companheiro Inseparável",
          "kind": "item",
          "options": [
            "catalog:feature-companheiro-inseparavel-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-reacao-imediata",
          "label": "Característica: Reação Imediata",
          "kind": "item",
          "options": [
            "catalog:feature-reacao-imediata-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-controle-do-ambiente",
          "label": "Característica: Controle Do Ambiente",
          "kind": "item",
          "options": [
            "catalog:feature-controle-do-ambiente-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-domador",
          "label": "Característica: Domador",
          "kind": "item",
          "options": [
            "catalog:feature-domador-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-aventura-frenetica",
          "label": "Característica: Aventura Frenética",
          "kind": "item",
          "options": [
            "catalog:feature-aventura-frenetica-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-aventureiro",
          "label": "Característica: Mestre Aventureiro",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-aventureiro-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-explorador-destemido",
          "label": "Característica: Explorador Destemido",
          "kind": "item",
          "options": [
            "catalog:feature-explorador-destemido-aventureiro-52"
          ],
          "count": 1,
          "amount": 1,
          "level": 19,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "1 pistola com 80 unidades de munição esférica, 1 chicote, 1 adaga e; 10d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-whiplash-aventureiro",
    "name": "Whiplash",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "whiplash",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 1,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d6",
        "range": "Até 12 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Chicote, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-fire-lash-aventureiro",
    "name": "Fire Lash",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "fire-lash",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-power-pistol-aventureiro",
    "name": "Power Pistol",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "power-pistol",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 2,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "4d8",
        "range": "Até 9 metros de comprimento e 1,5 metro de largura, Linha",
        "duration": "Instantâneo",
        "requirements": "Pistola, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "piercing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-sonic-boom-aventureiro",
    "name": "Sonic Boom",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "sonic-boom",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 3,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "6d6",
        "range": "Até 21 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Chicote, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-prison-whip-aventureiro",
    "name": "Prison Whip",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "prison-whip",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-power-whip-aventureiro",
    "name": "Power Whip",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "power-whip",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 4,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "8d10",
        "range": "Até 6 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Chicote, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-laco-de-dominacao-aventureiro",
    "name": "Laço de Dominação",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "laco-de-dominacao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 5,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "2d8",
        "range": "Até 6 metros, Linha",
        "duration": "Até 1 minuto",
        "requirements": "Chicote, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-nebula-storm-aventureiro",
    "name": "Nebula Storm",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "nebula-storm",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-circulo-da-morte-aventureiro",
    "name": "Círculo da Morte",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "circulo-da-morte",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 6,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "6d6",
        "range": "Até 9 metros de raio, Emanação",
        "duration": "Até 1 minuto, Concentração",
        "requirements": "Chicote, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-pain-whip-aventureiro",
    "name": "Pain Whip",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "pain-whip",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.53",
      "description": "Consultar a regra em Jogador 2.1, página 53.",
      "grade": 7,
      "tags": [
        "style:aventureiro"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "14d10",
        "range": "Até 6 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Chicote, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-demonio-incarnado-brutamontes-56",
    "name": "Demônio Incarnado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "demonio-incarnado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.56",
      "description": "Consultar a regra em Jogador 2.1, página 56.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-sede-de-sangue-brutamontes-56",
    "name": "Sede De Sangue",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "sede-de-sangue",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.56",
      "description": "Consultar a regra em Jogador 2.1, página 56.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-8-trigramas-brutamontes-56",
    "name": "8 Trigramas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "8-trigramas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.56",
      "description": "Consultar a regra em Jogador 2.1, página 56.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-guerreiro-bruto-brutamontes-57",
    "name": "Guerreiro Bruto",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "guerreiro-bruto",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.57",
      "description": "Consultar a regra em Jogador 2.1, página 57.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-corpo-de-criatura-brutamontes-57",
    "name": "Corpo De Criatura",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "corpo-de-criatura",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.57",
      "description": "Consultar a regra em Jogador 2.1, página 57.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-brutamontes-57",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.57",
      "description": "Consultar a regra em Jogador 2.1, página 57.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-3-caminhos-da-besta-brutamontes-57",
    "name": "3 Caminhos Da Besta",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "3-caminhos-da-besta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.57",
      "description": "Consultar a regra em Jogador 2.1, página 57.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-sede-de-sangue-revigorante-brutamontes-58",
    "name": "Sede De Sangue Revigorante",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "sede-de-sangue-revigorante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.58",
      "description": "Consultar a regra em Jogador 2.1, página 58.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-6-caminhos-da-destruicao-brutamontes-58",
    "name": "6 Caminhos Da Destruição",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "6-caminhos-da-destruicao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.58",
      "description": "Consultar a regra em Jogador 2.1, página 58.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-aposta-certa-brutamontes-58",
    "name": "Aposta Certa",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "aposta-certa",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.58",
      "description": "Consultar a regra em Jogador 2.1, página 58.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-mestre-ogro-brutamontes-58",
    "name": "Mestre Ogro",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-ogro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.58",
      "description": "Consultar a regra em Jogador 2.1, página 58.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "feature-invencibilidade-brutamontes-58",
    "name": "Invencibilidade",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "invencibilidade",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.58",
      "description": "Consultar a regra em Jogador 2.1, página 58.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:brutamontes"
      ]
    }
  },
  {
    "id": "style-brutamontes",
    "name": "Brutamontes",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "brutamontes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.55",
      "description": "Consultar a regra em Jogador 2.1, página 55.",
      "hitDie": 12,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "athletics",
        "intimidation",
        "provocation",
        "survival"
      ],
      "saveProficiencies": [
        "strength",
        "constitution"
      ],
      "equipmentProficiencies": [
        "Kanabo/Tacape"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Corpo de Guerreiro",
            "Superioridade Absoluta"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-demonio-incarnado",
          "label": "Característica: Demônio Incarnado",
          "kind": "item",
          "options": [
            "catalog:feature-demonio-incarnado-brutamontes-56"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-sede-de-sangue",
          "label": "Característica: Sede De Sangue",
          "kind": "item",
          "options": [
            "catalog:feature-sede-de-sangue-brutamontes-56"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-8-trigramas",
          "label": "Característica: 8 Trigramas",
          "kind": "item",
          "options": [
            "catalog:feature-8-trigramas-brutamontes-56"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-guerreiro-bruto",
          "label": "Característica: Guerreiro Bruto",
          "kind": "item",
          "options": [
            "catalog:feature-guerreiro-bruto-brutamontes-57"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-corpo-de-criatura",
          "label": "Característica: Corpo De Criatura",
          "kind": "item",
          "options": [
            "catalog:feature-corpo-de-criatura-brutamontes-57"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-brutamontes-57"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-3-caminhos-da-besta",
          "label": "Característica: 3 Caminhos Da Besta",
          "kind": "item",
          "options": [
            "catalog:feature-3-caminhos-da-besta-brutamontes-57"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-sede-de-sangue-revigorante",
          "label": "Característica: Sede De Sangue Revigorante",
          "kind": "item",
          "options": [
            "catalog:feature-sede-de-sangue-revigorante-brutamontes-58"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-6-caminhos-da-destruicao",
          "label": "Característica: 6 Caminhos Da Destruição",
          "kind": "item",
          "options": [
            "catalog:feature-6-caminhos-da-destruicao-brutamontes-58"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-aposta-certa",
          "label": "Característica: Aposta Certa",
          "kind": "item",
          "options": [
            "catalog:feature-aposta-certa-brutamontes-58"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-ogro",
          "label": "Característica: Mestre Ogro",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-ogro-brutamontes-58"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-invencibilidade",
          "label": "Característica: Invencibilidade",
          "kind": "item",
          "options": [
            "catalog:feature-invencibilidade-brutamontes-58"
          ],
          "count": 1,
          "amount": 1,
          "level": 19,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "1 kanabo e; 6d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-nari-kabura-brutamontes",
    "name": "Nari Kabura",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "nari-kabura",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 1,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "9 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-shinsoku-hakujaku-brutamontes",
    "name": "Shinsoku Hakujaku",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shinsoku-hakujaku",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-kosanze-ragnaraku-brutamontes",
    "name": "Kosanze Ragnaraku",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kosanze-ragnaraku",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 2,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "4d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-mahoroba-brutamontes",
    "name": "Mahoroba",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mahoroba",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 3,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "5d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-yamantaka-brutamontes",
    "name": "Yamantaka",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "yamantaka",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-raimei-hakke-brutamontes",
    "name": "Raimei Hakke",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "raimei-hakke",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 4,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "8d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-gundari-ryuseigun-brutamontes",
    "name": "Gundari Ryuseigun",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "gundari-ryuseigun",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 5,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "10d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-oni-no-youna-brutamontes",
    "name": "Oni no Youna",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "oni-no-youna",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-horai-hakke-brutamontes",
    "name": "Horai Hakke",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "horai-hakke",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 6,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-hakai-brutamontes",
    "name": "Hakai",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "hakai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.59",
      "description": "Consultar a regra em Jogador 2.1, página 59.",
      "grade": 7,
      "tags": [
        "style:brutamontes"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "14d6",
        "range": "30 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Arma Favorita, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-seiken-carateca-homem-peixe-62",
    "name": "Seiken",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "seiken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.62",
      "description": "Consultar a regra em Jogador 2.1, página 62.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-samehada-shotei-carateca-homem-peixe-62",
    "name": "Samehada Shotei",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "samehada-shotei",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.62",
      "description": "Consultar a regra em Jogador 2.1, página 62.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-jujutsu-homem-peixe-carateca-homem-peixe-62",
    "name": "Jujutsu Homem-Peixe",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "jujutsu-homem-peixe",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.62",
      "description": "Consultar a regra em Jogador 2.1, página 62.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-manipulacao-da-agua-carateca-homem-peixe-63",
    "name": "Manipulação Da Água",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "manipulacao-da-agua",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.63",
      "description": "Consultar a regra em Jogador 2.1, página 63.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-filho-do-mar-carateca-homem-peixe-63",
    "name": "Filho Do Mar",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "filho-do-mar",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.63",
      "description": "Consultar a regra em Jogador 2.1, página 63.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-carateca-homem-peixe-63",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.63",
      "description": "Consultar a regra em Jogador 2.1, página 63.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-umidaiko-carateca-homem-peixe-63",
    "name": "Umidaiko",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "umidaiko",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.63",
      "description": "Consultar a regra em Jogador 2.1, página 63.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-ataque-atordoante-carateca-homem-peixe-63",
    "name": "Ataque Atordoante",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-atordoante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.63",
      "description": "Consultar a regra em Jogador 2.1, página 63.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "feature-mizugokoro-carateca-homem-peixe-63",
    "name": "Mizugokoro",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mizugokoro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.63",
      "description": "Consultar a regra em Jogador 2.1, página 63.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:carateca-homem-peixe"
      ]
    }
  },
  {
    "id": "style-carateca-homem-peixe",
    "name": "Carateca Homem-Peixe",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "carateca-homem-peixe",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.61",
      "description": "Consultar a regra em Jogador 2.1, página 61.",
      "hitDie": 12,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "acrobatics",
        "athletics",
        "performance",
        "intimidation"
      ],
      "saveProficiencies": [
        "strength",
        "constitution"
      ],
      "equipmentProficiencies": [
        "Armas Marciais e Tridente"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Corpo de Guerreiro",
            "Aprimoramento de Atributo"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-seiken",
          "label": "Característica: Seiken",
          "kind": "item",
          "options": [
            "catalog:feature-seiken-carateca-homem-peixe-62"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-samehada-shotei",
          "label": "Característica: Samehada Shotei",
          "kind": "item",
          "options": [
            "catalog:feature-samehada-shotei-carateca-homem-peixe-62"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-jujutsu-homem-peixe",
          "label": "Característica: Jujutsu Homem-Peixe",
          "kind": "item",
          "options": [
            "catalog:feature-jujutsu-homem-peixe-carateca-homem-peixe-62"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-manipulacao-da-agua",
          "label": "Característica: Manipulação Da Água",
          "kind": "item",
          "options": [
            "catalog:feature-manipulacao-da-agua-carateca-homem-peixe-63"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-filho-do-mar",
          "label": "Característica: Filho Do Mar",
          "kind": "item",
          "options": [
            "catalog:feature-filho-do-mar-carateca-homem-peixe-63"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-carateca-homem-peixe-63"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-umidaiko",
          "label": "Característica: Umidaiko",
          "kind": "item",
          "options": [
            "catalog:feature-umidaiko-carateca-homem-peixe-63"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-atordoante",
          "label": "Característica: Ataque Atordoante",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-atordoante-carateca-homem-peixe-63"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mizugokoro",
          "label": "Característica: Mizugokoro",
          "kind": "item",
          "options": [
            "catalog:feature-mizugokoro-carateca-homem-peixe-63"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "Um tipo de arma marcial à sua escolha ou 40.000 Bellys; e 15d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-uchimizu-carateca-homem-peixe",
    "name": "Uchimizu",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "uchimizu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 1,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 9 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-shizurase-carateca-homem-peixe",
    "name": "Shizurase",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shizurase",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-mawashigeri-carateca-homem-peixe",
    "name": "Mawashigeri",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mawashigeri",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 2,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "3d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-samegawara-seiken-carateca-homem-peixe",
    "name": "Samegawara Seiken",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "samegawara-seiken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 3,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "6d8",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-gyojin-karate-giganteum-carateca-homem-peixe",
    "name": "Gyojin Karate - Giganteum",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "gyojin-karate-giganteum",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-soshark-carateca-homem-peixe",
    "name": "Soshark",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "soshark",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 4,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "3d6",
        "range": "Toque",
        "duration": "Até 1 minuto",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-yarinami-carateca-homem-peixe",
    "name": "Yarinami",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "yarinami",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 5,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "10d10",
        "range": "Até 33 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "3.000 litros de água, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-dai-uzu-carateca-homem-peixe",
    "name": "Dai Uzu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "dai-uzu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-gyojin-karate-ogi-buraikan-carateca-homem-peixe",
    "name": "Gyojin Karate Ogi – Buraikan",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "gyojin-karate-ogi-buraikan",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 6,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-gyojin-karate-ogi-onigawara-seiken-carateca-homem-peixe",
    "name": "Gyojin Karate Ogi – Onigawara Seiken",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "gyojin-karate-ogi-onigawara-seiken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.64",
      "description": "Consultar a regra em Jogador 2.1, página 64.",
      "grade": 7,
      "tags": [
        "style:carateca-homem-peixe"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "14d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-corpo-robotico-ciborgue-67",
    "name": "Corpo Robótico",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "corpo-robotico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.67",
      "description": "Consultar a regra em Jogador 2.1, página 67.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-mira-robotica-ciborgue-68",
    "name": "Mira Robótica",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mira-robotica",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.68",
      "description": "Consultar a regra em Jogador 2.1, página 68.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-guerreiro-da-ciencia-ciborgue-68",
    "name": "Guerreiro Da Ciência",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "guerreiro-da-ciencia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.68",
      "description": "Consultar a regra em Jogador 2.1, página 68.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-reparos-de-emergencia-ciborgue-69",
    "name": "Reparos De Emergência",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "reparos-de-emergencia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-arma-assimilada-ciborgue-69",
    "name": "Arma Assimilada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "arma-assimilada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-tecnologia-avancada-ciborgue-69",
    "name": "Tecnologia Avançada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "tecnologia-avancada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-guerreiro-da-ciencia-avancada-ciborgue-69",
    "name": "Guerreiro Da Ciência Avançada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "guerreiro-da-ciencia-avancada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-overclock-ciborgue-69",
    "name": "Overclock",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "overclock",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-pontos-de-vida-virtuais-ciborgue-69",
    "name": "Pontos De Vida Virtuais",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "pontos-de-vida-virtuais",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-protocolo-de-combate-avancado-ciborgue-69",
    "name": "Protocolo De Combate Avançado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "protocolo-de-combate-avancado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "feature-mestre-ciborgue-ciborgue-69",
    "name": "Mestre Ciborgue",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-ciborgue",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.69",
      "description": "Consultar a regra em Jogador 2.1, página 69.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ciborgue"
      ]
    }
  },
  {
    "id": "style-ciborgue",
    "name": "Ciborgue",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "ciborgue",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.66",
      "description": "Consultar a regra em Jogador 2.1, página 66.",
      "hitDie": 12,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "athletics",
        "investigation",
        "sleightOfHand",
        "survival"
      ],
      "saveProficiencies": [
        "strength",
        "wisdom"
      ],
      "equipmentProficiencies": [
        "Nenhum"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Aprimoramento de Atributo",
            "Perito em Técnicas"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-corpo-robotico",
          "label": "Característica: Corpo Robótico",
          "kind": "item",
          "options": [
            "catalog:feature-corpo-robotico-ciborgue-67"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mira-robotica",
          "label": "Característica: Mira Robótica",
          "kind": "item",
          "options": [
            "catalog:feature-mira-robotica-ciborgue-68"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-guerreiro-da-ciencia",
          "label": "Característica: Guerreiro Da Ciência",
          "kind": "item",
          "options": [
            "catalog:feature-guerreiro-da-ciencia-ciborgue-68"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-reparos-de-emergencia",
          "label": "Característica: Reparos De Emergência",
          "kind": "item",
          "options": [
            "catalog:feature-reparos-de-emergencia-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-arma-assimilada",
          "label": "Característica: Arma Assimilada",
          "kind": "item",
          "options": [
            "catalog:feature-arma-assimilada-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-tecnologia-avancada",
          "label": "Característica: Tecnologia Avançada",
          "kind": "item",
          "options": [
            "catalog:feature-tecnologia-avancada-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-guerreiro-da-ciencia-avancada",
          "label": "Característica: Guerreiro Da Ciência Avançada",
          "kind": "item",
          "options": [
            "catalog:feature-guerreiro-da-ciencia-avancada-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-overclock",
          "label": "Característica: Overclock",
          "kind": "item",
          "options": [
            "catalog:feature-overclock-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-pontos-de-vida-virtuais",
          "label": "Característica: Pontos De Vida Virtuais",
          "kind": "item",
          "options": [
            "catalog:feature-pontos-de-vida-virtuais-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-protocolo-de-combate-avancado",
          "label": "Característica: Protocolo De Combate Avançado",
          "kind": "item",
          "options": [
            "catalog:feature-protocolo-de-combate-avancado-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-ciborgue",
          "label": "Característica: Mestre Ciborgue",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-ciborgue-ciborgue-69"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "20 unidades de Combustível de Motor e 10d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-buster-gun-ciborgue",
    "name": "Buster Gun",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "buster-gun",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 1,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 15 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-escudo-metalico-ciborgue",
    "name": "Escudo Metálico",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "escudo-metalico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-metralhadora-portatil-ciborgue",
    "name": "Metralhadora Portátil",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "metralhadora-portatil",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 2,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "4d6",
        "range": "Até 18 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "8 Munições (Qualquer), Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-lanca-chamas-ciborgue",
    "name": "Lança-Chamas",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "lanca-chamas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 3,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "6d6",
        "range": "Até 18 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-canhao-de-vento-ciborgue",
    "name": "Canhão de Vento",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "canhao-de-vento",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-soco-foguete-ciborgue",
    "name": "Soco Foguete",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "soco-foguete",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 4,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "8d10",
        "range": "Até 33 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-rocket-launcher-ciborgue",
    "name": "Rocket Launcher",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rocket-launcher",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 5,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "1d10",
        "range": "Até 33 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-hard-armor-ciborgue",
    "name": "Hard Armor",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "hard-armor",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-laser-beam-ciborgue",
    "name": "Laser Beam",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "laser-beam",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 6,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d8",
        "range": "Até 39 metros de comprimento e 1,5 metro de largura, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-ultra-cannon-ciborgue",
    "name": "Ultra Cannon",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ultra-cannon",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.70",
      "description": "Consultar a regra em Jogador 2.1, página 70.",
      "grade": 7,
      "tags": [
        "style:ciborgue"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "11d6",
        "range": "Até 30 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-postura-de-espadachim-espadachim-73",
    "name": "Postura De Espadachim",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "postura-de-espadachim",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.73",
      "description": "Consultar a regra em Jogador 2.1, página 73.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-consciencia-expandida-espadachim-74",
    "name": "Consciência Expandida",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "consciencia-expandida",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.74",
      "description": "Consultar a regra em Jogador 2.1, página 74.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-empunhadura-espadachim-74",
    "name": "Empunhadura",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "empunhadura",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.74",
      "description": "Consultar a regra em Jogador 2.1, página 74.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-honra-de-um-espadachim-espadachim-75",
    "name": "Honra De Um Espadachim",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "honra-de-um-espadachim",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.75",
      "description": "Consultar a regra em Jogador 2.1, página 75.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-aura-bestial-espadachim-75",
    "name": "Aura Bestial",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "aura-bestial",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.75",
      "description": "Consultar a regra em Jogador 2.1, página 75.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-analise-de-batalha-espadachim-76",
    "name": "Análise De Batalha",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "analise-de-batalha",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.76",
      "description": "Consultar a regra em Jogador 2.1, página 76.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-postura-aperfeicoada-espadachim-76",
    "name": "Postura Aperfeiçoada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "postura-aperfeicoada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.76",
      "description": "Consultar a regra em Jogador 2.1, página 76.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-aura-demoniaca-espadachim-76",
    "name": "Aura Demoníaca",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "aura-demoniaca",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.76",
      "description": "Consultar a regra em Jogador 2.1, página 76.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "feature-apogeu-espadachim-76",
    "name": "Apogeu",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "apogeu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.76",
      "description": "Consultar a regra em Jogador 2.1, página 76.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:espadachim"
      ]
    }
  },
  {
    "id": "style-espadachim",
    "name": "Espadachim",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "espadachim",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.72",
      "description": "Consultar a regra em Jogador 2.1, página 72.",
      "hitDie": 10,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "athletics",
        "intimidation",
        "insight",
        "perception"
      ],
      "saveProficiencies": [
        "dexterity",
        "will"
      ],
      "equipmentProficiencies": [
        "Armas Cortantes"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Perito em Técnicas",
            "Superando Limites"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-postura-de-espadachim",
          "label": "Característica: Postura De Espadachim",
          "kind": "item",
          "options": [
            "catalog:feature-postura-de-espadachim-espadachim-73"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-consciencia-expandida",
          "label": "Característica: Consciência Expandida",
          "kind": "item",
          "options": [
            "catalog:feature-consciencia-expandida-espadachim-74"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-empunhadura",
          "label": "Característica: Empunhadura",
          "kind": "item",
          "options": [
            "catalog:feature-empunhadura-espadachim-74"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-honra-de-um-espadachim",
          "label": "Característica: Honra De Um Espadachim",
          "kind": "item",
          "options": [
            "catalog:feature-honra-de-um-espadachim-espadachim-75"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-aura-bestial",
          "label": "Característica: Aura Bestial",
          "kind": "item",
          "options": [
            "catalog:feature-aura-bestial-espadachim-75"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-analise-de-batalha",
          "label": "Característica: Análise De Batalha",
          "kind": "item",
          "options": [
            "catalog:feature-analise-de-batalha-espadachim-76"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-postura-aperfeicoada",
          "label": "Característica: Postura Aperfeiçoada",
          "kind": "item",
          "options": [
            "catalog:feature-postura-aperfeicoada-espadachim-76"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-aura-demoniaca",
          "label": "Característica: Aura Demoníaca",
          "kind": "item",
          "options": [
            "catalog:feature-aura-demoniaca-espadachim-76"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-apogeu",
          "label": "Característica: Apogeu",
          "kind": "item",
          "options": [
            "catalog:feature-apogeu-espadachim-76"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "2 sabres ou 2 katanas e; 5d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-ittoryu-baki-espadachim",
    "name": "Ittoryu - Baki",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ittoryu-baki",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 1,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 9 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-kiri-shigure-espadachim",
    "name": "Kiri Shigure",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kiri-shigure",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-trueno-bastardo-espadachim",
    "name": "Trueno Bastardo",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "trueno-bastardo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 2,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "4d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-ittoryu-iai-shishi-sonson-espadachim",
    "name": "Ittoryu Iai - Shishi Sonson",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ittoryu-iai-shishi-sonson",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 3,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "6d10",
        "range": "Toque",
        "duration": "Até o final do seu turno",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-clear-lance-espadachim",
    "name": "Clear Lance",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "clear-lance",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ittoryu-sanjuroku-36-pound-hou-espadachim",
    "name": "Ittoryu - Sanjuroku (36) Pound Hou",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ittoryu-sanjuroku-36-pound-hou",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 4,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "8d6",
        "range": "Até 27 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-biken-blue-bird-espadachim",
    "name": "Biken - Blue Bird",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "biken-blue-bird",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 5,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "auxiliary-kiai-no-tate-espadachim",
    "name": "Kiai no Tate",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kiai-no-tate",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ittoryu-dai-shinkan-espadachim",
    "name": "Ittoryu - Dai Shinkan",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ittoryu-dai-shinkan",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 6,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-kamusari-espadachim",
    "name": "Kamusari",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kamusari",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.77",
      "description": "Consultar a regra em Jogador 2.1, página 77.",
      "grade": 7,
      "tags": [
        "style:espadachim"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "14d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-mestre-das-armas-guerrilheiro-80",
    "name": "Mestre Das Armas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-das-armas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.80",
      "description": "Consultar a regra em Jogador 2.1, página 80.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-musculos-e-cerebro-guerrilheiro-81",
    "name": "Músculos E Cérebro",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "musculos-e-cerebro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.81",
      "description": "Consultar a regra em Jogador 2.1, página 81.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-especialista-em-combate-guerrilheiro-81",
    "name": "Especialista Em Combate",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "especialista-em-combate",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.81",
      "description": "Consultar a regra em Jogador 2.1, página 81.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-doutrinamento-guerrilheiro-81",
    "name": "Doutrinamento",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "doutrinamento",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.81",
      "description": "Consultar a regra em Jogador 2.1, página 81.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-ordens-taticas-guerrilheiro-82",
    "name": "Ordens Táticas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ordens-taticas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-potencializador-guerrilheiro-82",
    "name": "Potencializador",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "potencializador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-especialista-em-estrategias-guerrilheiro-82",
    "name": "Especialista Em Estratégias",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "especialista-em-estrategias",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-galaxy-revolution-guerrilheiro-82",
    "name": "Galaxy Revolution",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "galaxy-revolution",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-acao-tatica-guerrilheiro-82",
    "name": "Ação Tática",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "acao-tatica",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-erudito-guerrilheiro-82",
    "name": "Erudito",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "erudito",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-mestre-guerrilheiro-guerrilheiro-82",
    "name": "Mestre Guerrilheiro",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-guerrilheiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "feature-super-soldado-guerrilheiro-82",
    "name": "Super Soldado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "super-soldado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.82",
      "description": "Consultar a regra em Jogador 2.1, página 82.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:guerrilheiro"
      ]
    }
  },
  {
    "id": "style-guerrilheiro",
    "name": "Guerrilheiro",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "guerrilheiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.79",
      "description": "Consultar a regra em Jogador 2.1, página 79.",
      "hitDie": 10,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "acrobatics",
        "athletics",
        "stealth",
        "history",
        "survival"
      ],
      "saveProficiencies": [
        "strength",
        "dexterity"
      ],
      "equipmentProficiencies": [
        "Armas Cortantes, Armas de Fogo, Armas Especiais e Armas Marciais"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Corpo de Guerreiro",
            "Perito em Técnicas"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-mestre-das-armas",
          "label": "Característica: Mestre Das Armas",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-das-armas-guerrilheiro-80"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-musculos-e-cerebro",
          "label": "Característica: Músculos E Cérebro",
          "kind": "item",
          "options": [
            "catalog:feature-musculos-e-cerebro-guerrilheiro-81"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-especialista-em-combate",
          "label": "Característica: Especialista Em Combate",
          "kind": "item",
          "options": [
            "catalog:feature-especialista-em-combate-guerrilheiro-81"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-doutrinamento",
          "label": "Característica: Doutrinamento",
          "kind": "item",
          "options": [
            "catalog:feature-doutrinamento-guerrilheiro-81"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ordens-taticas",
          "label": "Característica: Ordens Táticas",
          "kind": "item",
          "options": [
            "catalog:feature-ordens-taticas-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-potencializador",
          "label": "Característica: Potencializador",
          "kind": "item",
          "options": [
            "catalog:feature-potencializador-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-especialista-em-estrategias",
          "label": "Característica: Especialista Em Estratégias",
          "kind": "item",
          "options": [
            "catalog:feature-especialista-em-estrategias-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-galaxy-revolution",
          "label": "Característica: Galaxy Revolution",
          "kind": "item",
          "options": [
            "catalog:feature-galaxy-revolution-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-acao-tatica",
          "label": "Característica: Ação Tática",
          "kind": "item",
          "options": [
            "catalog:feature-acao-tatica-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-erudito",
          "label": "Característica: Erudito",
          "kind": "item",
          "options": [
            "catalog:feature-erudito-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-guerrilheiro",
          "label": "Característica: Mestre Guerrilheiro",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-guerrilheiro-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-super-soldado",
          "label": "Característica: Super Soldado",
          "kind": "item",
          "options": [
            "catalog:feature-super-soldado-guerrilheiro-82"
          ],
          "count": 1,
          "amount": 1,
          "level": 19,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "2 pistolas ou 1 mosquete com 80 unidades de munição esférica ou 2 Armas Cortantes e; 5d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-genkotsu-meteor-guerrilheiro",
    "name": "Genkotsu Meteor",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "genkotsu-meteor",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 1,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 15 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "1 Bola de canhão, pedra ou objeto similar, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-conselho-precioso-guerrilheiro",
    "name": "Conselho Precioso",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "conselho-precioso",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-great-impact-guerrilheiro",
    "name": "Great Impact",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "great-impact",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 2,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "3d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-galaxy-divide-guerrilheiro",
    "name": "Galaxy Divide",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "galaxy-divide",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 3,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "damageFormula": "1d6",
        "range": "Até 6 metros de raio, Esfera",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-seiretsu-guerrilheiro",
    "name": "Seiretsu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "seiretsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-killer-bowling-guerrilheiro",
    "name": "Killer Bowling",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "killer-bowling",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 4,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 7,
        "damageFormula": "8d10",
        "range": "Até 27 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "1 criatura agarrada, pedra grande ou objeto similar, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-blue-hole-guerrilheiro",
    "name": "Blue Hole",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "blue-hole",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 5,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "10d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Estar em terra firme, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-comando-guerrilheiro",
    "name": "Comando",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "comando",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-infinitum-explosion-guerrilheiro",
    "name": "Infinitum Explosion",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "infinitum-explosion",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 6,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-galaxy-impact-guerrilheiro",
    "name": "Galaxy Impact",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "galaxy-impact",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.83",
      "description": "Consultar a regra em Jogador 2.1, página 83.",
      "grade": 7,
      "tags": [
        "style:guerrilheiro"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "14d6",
        "range": "Até 30 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-combatente-selvagem-lutador-86",
    "name": "Combatente Selvagem",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "combatente-selvagem",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.86",
      "description": "Consultar a regra em Jogador 2.1, página 86.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-bom-de-briga-lutador-86",
    "name": "Bom De Briga",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "bom-de-briga",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.86",
      "description": "Consultar a regra em Jogador 2.1, página 86.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-posicoes-de-luta-lutador-86",
    "name": "Posições De Luta",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "posicoes-de-luta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.86",
      "description": "Consultar a regra em Jogador 2.1, página 86.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-sedento-lutador-87",
    "name": "Sedento",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "sedento",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.87",
      "description": "Consultar a regra em Jogador 2.1, página 87.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-golpe-brutal-lutador-87",
    "name": "Golpe Brutal",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "golpe-brutal",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.87",
      "description": "Consultar a regra em Jogador 2.1, página 87.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-lutador-87",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.87",
      "description": "Consultar a regra em Jogador 2.1, página 87.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-resistencia-sobrenatural-lutador-87",
    "name": "Resistência Sobrenatural",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "resistencia-sobrenatural",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.87",
      "description": "Consultar a regra em Jogador 2.1, página 87.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-metralhadora-de-golpes-lutador-87",
    "name": "Metralhadora De Golpes",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "metralhadora-de-golpes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.87",
      "description": "Consultar a regra em Jogador 2.1, página 87.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "feature-espirito-de-luta-lutador-87",
    "name": "Espírito De Luta",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "espirito-de-luta",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.87",
      "description": "Consultar a regra em Jogador 2.1, página 87.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:lutador"
      ]
    }
  },
  {
    "id": "style-lutador",
    "name": "Lutador",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "lutador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.85",
      "description": "Consultar a regra em Jogador 2.1, página 85.",
      "hitDie": 12,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "athletics",
        "intimidation",
        "provocation",
        "survival"
      ],
      "saveProficiencies": [
        "strength",
        "constitution"
      ],
      "equipmentProficiencies": [
        "Armas Marciais"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Corpo de Guerreiro",
            "Superando Limites"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-combatente-selvagem",
          "label": "Característica: Combatente Selvagem",
          "kind": "item",
          "options": [
            "catalog:feature-combatente-selvagem-lutador-86"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-bom-de-briga",
          "label": "Característica: Bom De Briga",
          "kind": "item",
          "options": [
            "catalog:feature-bom-de-briga-lutador-86"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-posicoes-de-luta",
          "label": "Característica: Posições De Luta",
          "kind": "item",
          "options": [
            "catalog:feature-posicoes-de-luta-lutador-86"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-sedento",
          "label": "Característica: Sedento",
          "kind": "item",
          "options": [
            "catalog:feature-sedento-lutador-87"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-golpe-brutal",
          "label": "Característica: Golpe Brutal",
          "kind": "item",
          "options": [
            "catalog:feature-golpe-brutal-lutador-87"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-lutador-87"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-resistencia-sobrenatural",
          "label": "Característica: Resistência Sobrenatural",
          "kind": "item",
          "options": [
            "catalog:feature-resistencia-sobrenatural-lutador-87"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-metralhadora-de-golpes",
          "label": "Característica: Metralhadora De Golpes",
          "kind": "item",
          "options": [
            "catalog:feature-metralhadora-de-golpes-lutador-87"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-espirito-de-luta",
          "label": "Característica: Espírito De Luta",
          "kind": "item",
          "options": [
            "catalog:feature-espirito-de-luta-lutador-87"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "Um tipo de arma marcial à sua escolha ou 40.000 Bellys e; 15d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-overthrow-lutador",
    "name": "Overthrow",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "overthrow",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 1,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-hard-block-lutador",
    "name": "Hard Block",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "hard-block",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-power-shoot-lutador",
    "name": "Power Shoot",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "power-shoot",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 2,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "3d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-kick-course-lutador",
    "name": "Kick Course",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kick-course",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 3,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "5d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-rage-uppercut-lutador",
    "name": "Rage Uppercut",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rage-uppercut",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-kick-overdrive-lutador",
    "name": "Kick Overdrive",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kick-overdrive",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 4,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "8d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-rotary-pain-lutador",
    "name": "Rotary Pain",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rotary-pain",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 5,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "10d8",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-dempsey-roll-lutador",
    "name": "Dempsey Roll",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "dempsey-roll",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-tekken-lutador",
    "name": "Tekken",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tekken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 6,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-berserker-barrage-lutador",
    "name": "Berserker Barrage",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "berserker-barrage",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.88",
      "description": "Consultar a regra em Jogador 2.1, página 88.",
      "grade": 7,
      "tags": [
        "style:lutador"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "17d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-yami-no-kijin-ninja-91",
    "name": "Yami No Kijin",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "yami-no-kijin",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.91",
      "description": "Consultar a regra em Jogador 2.1, página 91.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-ninjutsu-ninja-91",
    "name": "Ninjutsu",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ninjutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.91",
      "description": "Consultar a regra em Jogador 2.1, página 91.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-assassinar-ninja-92",
    "name": "Assassinar",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "assassinar",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.92",
      "description": "Consultar a regra em Jogador 2.1, página 92.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-nindo-ninja-92",
    "name": "Nindo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "nindo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.92",
      "description": "Consultar a regra em Jogador 2.1, página 92.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-equipamento-ninja-ninja-92",
    "name": "Equipamento Ninja",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "equipamento-ninja",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.92",
      "description": "Consultar a regra em Jogador 2.1, página 92.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-arte-ninja-ninja-93",
    "name": "Arte Ninja",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "arte-ninja",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-agilidade-shinobi-ninja-93",
    "name": "Agilidade Shinobi",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "agilidade-shinobi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-corpo-das-sombras-ninja-93",
    "name": "Corpo Das Sombras",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "corpo-das-sombras",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-owari-ninja-93",
    "name": "Owari",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "owari",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-golpe-de-sorte-ninja-93",
    "name": "Golpe De Sorte",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "golpe-de-sorte",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-mestre-ninja-ninja-93",
    "name": "Mestre Ninja",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-ninja",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "feature-dadiva-dos-ninjas-ninja-93",
    "name": "Dádiva Dos Ninjas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "dadiva-dos-ninjas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.93",
      "description": "Consultar a regra em Jogador 2.1, página 93.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:ninja"
      ]
    }
  },
  {
    "id": "style-ninja",
    "name": "Ninja",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "ninja",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.90",
      "description": "Consultar a regra em Jogador 2.1, página 90.",
      "hitDie": 8,
      "primaryAttribute": "dexterity",
      "skillCount": 2,
      "skillProficiencies": [
        "acrobatics",
        "deception",
        "stealth",
        "sleightOfHand"
      ],
      "saveProficiencies": [
        "dexterity",
        "wisdom"
      ],
      "equipmentProficiencies": [
        "Katana, Kunai, Adaga, Shuriken, Foice e Arco"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Defesa Ofensiva",
            "Sortudo"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-yami-no-kijin",
          "label": "Característica: Yami No Kijin",
          "kind": "item",
          "options": [
            "catalog:feature-yami-no-kijin-ninja-91"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ninjutsu",
          "label": "Característica: Ninjutsu",
          "kind": "item",
          "options": [
            "catalog:feature-ninjutsu-ninja-91"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-assassinar",
          "label": "Característica: Assassinar",
          "kind": "item",
          "options": [
            "catalog:feature-assassinar-ninja-92"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-nindo",
          "label": "Característica: Nindo",
          "kind": "item",
          "options": [
            "catalog:feature-nindo-ninja-92"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-equipamento-ninja",
          "label": "Característica: Equipamento Ninja",
          "kind": "item",
          "options": [
            "catalog:feature-equipamento-ninja-ninja-92"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-arte-ninja",
          "label": "Característica: Arte Ninja",
          "kind": "item",
          "options": [
            "catalog:feature-arte-ninja-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-agilidade-shinobi",
          "label": "Característica: Agilidade Shinobi",
          "kind": "item",
          "options": [
            "catalog:feature-agilidade-shinobi-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-corpo-das-sombras",
          "label": "Característica: Corpo Das Sombras",
          "kind": "item",
          "options": [
            "catalog:feature-corpo-das-sombras-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-owari",
          "label": "Característica: Owari",
          "kind": "item",
          "options": [
            "catalog:feature-owari-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-golpe-de-sorte",
          "label": "Característica: Golpe De Sorte",
          "kind": "item",
          "options": [
            "catalog:feature-golpe-de-sorte-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-ninja",
          "label": "Característica: Mestre Ninja",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-ninja-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-dadiva-dos-ninjas",
          "label": "Característica: Dádiva Dos Ninjas",
          "kind": "item",
          "options": [
            "catalog:feature-dadiva-dos-ninjas-ninja-93"
          ],
          "count": 1,
          "amount": 1,
          "level": 19,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "Uma katana, 5 kunais, 30 shurikens e; 6d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-ninpo-raisen-no-jutsu-ninja",
    "name": "Ninpo –  Raisen no Jutsu",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-raisen-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 1,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "auxiliary-ninpo-kawarimi-no-jutsu-ninja",
    "name": "Ninpo - Kawarimi no Jutsu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-kawarimi-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ninpo-ryuka-no-jutsu-ninja",
    "name": "Ninpo –  Ryuka no Jutsu",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-ryuka-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 2,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-hana-shuriken-ninja",
    "name": "Hana Shuriken",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "hana-shuriken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 3,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "1d6",
        "range": "Até 21 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "6 shuriken, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-ninpo-enton-no-jutsu-ninja",
    "name": "Ninpo - Enton no Jutsu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-enton-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ninpo-kazekiri-no-jutsu-ninja",
    "name": "Ninpo – Kazekiri no Jutsu",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-kazekiri-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 4,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "8d10",
        "range": "Até 27 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-ninpo-goukakyuu-no-jutsu-ninja",
    "name": "Ninpo – Goukakyuu no Jutsu",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-goukakyuu-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 5,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "5d6",
        "range": "Até 33 metros, Linha",
        "duration": "Até 1 minuto",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-ninpo-bunshin-no-jutsu-ninja",
    "name": "Ninpo - Bunshin no Jutsu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-bunshin-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "dexterity",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ninpo-kintama-tsubushi-ninja",
    "name": "Ninpo – Kintama-Tsubushi",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-kintama-tsubushi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 6,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "6d10",
        "range": "Até 39 metros, Linha",
        "duration": "Até 1 minuto",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-ninpo-kanashibari-no-jutsu-ninja",
    "name": "Ninpo – Kanashibari no Jutsu",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ninpo-kanashibari-no-jutsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.94",
      "description": "Consultar a regra em Jogador 2.1, página 94.",
      "grade": 7,
      "tags": [
        "style:ninja"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "dexterity",
        "proficient": true,
        "powerCost": 14,
        "range": "Até 9 metros, Linha",
        "duration": "Especial, Concentração",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "will",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-protegendo-um-amigo-okama-kenpo-97",
    "name": "Protegendo Um Amigo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "protegendo-um-amigo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.97",
      "description": "Consultar a regra em Jogador 2.1, página 97.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-ambiguidade-okama-kenpo-97",
    "name": "Ambiguidade",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ambiguidade",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.97",
      "description": "Consultar a regra em Jogador 2.1, página 97.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-okama-way-okama-kenpo-97",
    "name": "Okama Way",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "okama-way",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.97",
      "description": "Consultar a regra em Jogador 2.1, página 97.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-surto-okama-okama-kenpo-97",
    "name": "Surto Okama",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "surto-okama",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.97",
      "description": "Consultar a regra em Jogador 2.1, página 97.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-stalker-okama-kenpo-97",
    "name": "Stalker",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "stalker",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.97",
      "description": "Consultar a regra em Jogador 2.1, página 97.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-okama-kenpo-98",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-acerto-destruidor-okama-kenpo-98",
    "name": "Acerto Destruidor",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "acerto-destruidor",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-tasukeru-okama-kenpo-98",
    "name": "Tasukeru",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "tasukeru",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-ballet-kenpo-okama-kenpo-98",
    "name": "Ballet Kenpo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ballet-kenpo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-makeup-armor-okama-kenpo-98",
    "name": "Makeup Armor",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "makeup-armor",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-mestre-okama-okama-kenpo-98",
    "name": "Mestre Okama",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-okama",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "feature-friends-for-life-okama-kenpo-98",
    "name": "Friends For Life",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "friends-for-life",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.98",
      "description": "Consultar a regra em Jogador 2.1, página 98.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:okama-kenpo"
      ]
    }
  },
  {
    "id": "style-okama-kenpo",
    "name": "Okama Kenpo",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "okama-kenpo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.96",
      "description": "Consultar a regra em Jogador 2.1, página 96.",
      "hitDie": 10,
      "primaryAttribute": "strength",
      "skillCount": 3,
      "skillProficiencies": [
        "acrobatics",
        "athletics",
        "performance",
        "deception",
        "intimidation",
        "insight",
        "provocation"
      ],
      "saveProficiencies": [
        "dexterity",
        "presence"
      ],
      "equipmentProficiencies": [
        "Armas Marciais"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Corpo de Guerreiro",
            "Superando Limites"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-protegendo-um-amigo",
          "label": "Característica: Protegendo Um Amigo",
          "kind": "item",
          "options": [
            "catalog:feature-protegendo-um-amigo-okama-kenpo-97"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ambiguidade",
          "label": "Característica: Ambiguidade",
          "kind": "item",
          "options": [
            "catalog:feature-ambiguidade-okama-kenpo-97"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-okama-way",
          "label": "Característica: Okama Way",
          "kind": "item",
          "options": [
            "catalog:feature-okama-way-okama-kenpo-97"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-surto-okama",
          "label": "Característica: Surto Okama",
          "kind": "item",
          "options": [
            "catalog:feature-surto-okama-okama-kenpo-97"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-stalker",
          "label": "Característica: Stalker",
          "kind": "item",
          "options": [
            "catalog:feature-stalker-okama-kenpo-97"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-acerto-destruidor",
          "label": "Característica: Acerto Destruidor",
          "kind": "item",
          "options": [
            "catalog:feature-acerto-destruidor-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-tasukeru",
          "label": "Característica: Tasukeru",
          "kind": "item",
          "options": [
            "catalog:feature-tasukeru-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ballet-kenpo",
          "label": "Característica: Ballet Kenpo",
          "kind": "item",
          "options": [
            "catalog:feature-ballet-kenpo-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-makeup-armor",
          "label": "Característica: Makeup Armor",
          "kind": "item",
          "options": [
            "catalog:feature-makeup-armor-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-okama",
          "label": "Característica: Mestre Okama",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-okama-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-friends-for-life",
          "label": "Característica: Friends For Life",
          "kind": "item",
          "options": [
            "catalog:feature-friends-for-life-okama-kenpo-98"
          ],
          "count": 1,
          "amount": 1,
          "level": 19,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "Um tipo de arma marcial à sua escolha ou 40.000 Bellys e; 15d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-death-wink-okama-kenpo",
    "name": "Death Wink",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "death-wink",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 1,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 9 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-rolling-aesthe-okama-kenpo",
    "name": "Rolling Aesthe",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rolling-aesthe",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ballet-chop-okama-kenpo",
    "name": "Ballet Chop",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ballet-chop",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 2,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 4,
        "damageFormula": "4d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-bombardier-okama-kenpo",
    "name": "Bombardier",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "bombardier",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 3,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "6d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-conforto-okama-kenpo",
    "name": "Conforto",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "conforto",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-keri-pointe-okama-kenpo",
    "name": "Keri Pointe",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "keri-pointe",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 4,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "7d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-grand-fouette-ano-natsu-no-hi-no-memoir-okama-kenpo",
    "name": "Grand Fouetté: Ano Natsu no hi no Memoir",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "grand-fouette-ano-natsu-no-hi-no-memoir",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 5,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 10,
        "damageFormula": "8d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-furia-okama-okama-kenpo",
    "name": "Fúria Okama",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "furia-okama",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-ohikae-na-fouette-okama-kenpo",
    "name": "Ohikae na Fouetté",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ohikae-na-fouette",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 6,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "9d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-newkama-kenpo-ogi-mudade-shori-ken-okama-kenpo",
    "name": "Newkama Kenpo Ogi – Mudade Shori Ken",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "newkama-kenpo-ogi-mudade-shori-ken",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.99",
      "description": "Consultar a regra em Jogador 2.1, página 99.",
      "grade": 7,
      "tags": [
        "style:okama-kenpo"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "feature-6-habilidades-rokushiki-102",
    "name": "6 Habilidades",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "6-habilidades",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.102",
      "description": "Consultar a regra em Jogador 2.1, página 102.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-taticas-rokushiki-103",
    "name": "Táticas",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "taticas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.103",
      "description": "Consultar a regra em Jogador 2.1, página 103.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-arma-viva-rokushiki-103",
    "name": "Arma Viva",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "arma-viva",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.103",
      "description": "Consultar a regra em Jogador 2.1, página 103.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-resposta-perfeita-rokushiki-104",
    "name": "Resposta Perfeita",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "resposta-perfeita",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.104",
      "description": "Consultar a regra em Jogador 2.1, página 104.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-atributos-aperfeicoados-rokushiki-104",
    "name": "Atributos Aperfeiçoados",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "atributos-aperfeicoados",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.104",
      "description": "Consultar a regra em Jogador 2.1, página 104.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-rokushiki-104",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.104",
      "description": "Consultar a regra em Jogador 2.1, página 104.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-rokushiki-aperfeicoado-rokushiki-104",
    "name": "Rokushiki Aperfeiçoado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "rokushiki-aperfeicoado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.104",
      "description": "Consultar a regra em Jogador 2.1, página 104.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-estrategia-de-batalha-rokushiki-104",
    "name": "Estratégia De Batalha",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "estrategia-de-batalha",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.104",
      "description": "Consultar a regra em Jogador 2.1, página 104.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "feature-analise-aprofundada-rokushiki-104",
    "name": "Análise Aprofundada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "analise-aprofundada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.104",
      "description": "Consultar a regra em Jogador 2.1, página 104.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:rokushiki"
      ]
    }
  },
  {
    "id": "style-rokushiki",
    "name": "Rokushiki",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "rokushiki",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.101",
      "description": "Consultar a regra em Jogador 2.1, página 101.",
      "hitDie": 10,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "acrobatics",
        "athletics",
        "deception",
        "stealth",
        "history",
        "investigation"
      ],
      "saveProficiencies": [
        "strength",
        "dexterity"
      ],
      "equipmentProficiencies": [
        "Armas Marciais"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Corpo de Guerreiro",
            "Perito em Técnicas"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-6-habilidades",
          "label": "Característica: 6 Habilidades",
          "kind": "item",
          "options": [
            "catalog:feature-6-habilidades-rokushiki-102"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-taticas",
          "label": "Característica: Táticas",
          "kind": "item",
          "options": [
            "catalog:feature-taticas-rokushiki-103"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-arma-viva",
          "label": "Característica: Arma Viva",
          "kind": "item",
          "options": [
            "catalog:feature-arma-viva-rokushiki-103"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-resposta-perfeita",
          "label": "Característica: Resposta Perfeita",
          "kind": "item",
          "options": [
            "catalog:feature-resposta-perfeita-rokushiki-104"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-atributos-aperfeicoados",
          "label": "Característica: Atributos Aperfeiçoados",
          "kind": "item",
          "options": [
            "catalog:feature-atributos-aperfeicoados-rokushiki-104"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-rokushiki-104"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-rokushiki-aperfeicoado",
          "label": "Característica: Rokushiki Aperfeiçoado",
          "kind": "item",
          "options": [
            "catalog:feature-rokushiki-aperfeicoado-rokushiki-104"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-estrategia-de-batalha",
          "label": "Característica: Estratégia De Batalha",
          "kind": "item",
          "options": [
            "catalog:feature-estrategia-de-batalha-rokushiki-104"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-analise-aprofundada",
          "label": "Característica: Análise Aprofundada",
          "kind": "item",
          "options": [
            "catalog:feature-analise-aprofundada-rokushiki-104"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "Um tipo de arma marcial à sua escolha ou 40.000 Bellys e; 15d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-tobu-shigan-rokushiki",
    "name": "Tobu Shigan",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tobu-shigan",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 1,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 15 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-zanshin-rokushiki",
    "name": "Zanshin",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "zanshin",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-rankyaku-hakurai-rokushiki",
    "name": "Rankyaku: Hakurai",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rankyaku-hakurai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 2,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 3,
        "damageFormula": "4d8",
        "range": "Até 9 metros de comprimento e 1,5 metro de largura, Linha",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-shigan-oren-rokushiki",
    "name": "Shigan: Oren",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shigan-oren",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 3,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "5d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-kamisori-rokushiki",
    "name": "Kamisori",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kamisori",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-rankyaku-amanedachi-rokushiki",
    "name": "Rankyaku: Amanedachi",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rankyaku-amanedachi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 4,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "8d6",
        "range": "Até 7,5 metros de raio, Emanação",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-rokushiki-ogi-rokuogan-rokushiki",
    "name": "Rokushiki Ogi – Rokuogan",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rokushiki-ogi-rokuogan",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 5,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "10d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-tekkai-utsugi-rokushiki",
    "name": "Tekkai Utsugi",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tekkai-utsugi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-shugan-rokushiki",
    "name": "Shugan",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "shugan",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 6,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 12,
        "damageFormula": "4d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "piercing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-rokushiki-ogi-sai-dai-rin-rokuogan-rokushiki",
    "name": "Rokushiki Ogi – Sai Dai Rin: Rokuogan",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "rokushiki-ogi-sai-dai-rin-rokuogan",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.105",
      "description": "Consultar a regra em Jogador 2.1, página 105.",
      "grade": 7,
      "tags": [
        "style:rokushiki"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 13,
        "damageFormula": "14d6",
        "range": "Até 30 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "bludgeoning",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-armamento-samurai-samurai-108",
    "name": "Armamento Samurai",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "armamento-samurai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.108",
      "description": "Consultar a regra em Jogador 2.1, página 108.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-juramento-samurai-108",
    "name": "Juramento",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "juramento",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.108",
      "description": "Consultar a regra em Jogador 2.1, página 108.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-bushido-samurai-109",
    "name": "Bushido",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "bushido",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.109",
      "description": "Consultar a regra em Jogador 2.1, página 109.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-concentracao-total-samurai-109",
    "name": "Concentração Total",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "concentracao-total",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.109",
      "description": "Consultar a regra em Jogador 2.1, página 109.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-armadura-samurai-samurai-110",
    "name": "Armadura Samurai",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "armadura-samurai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-ataque-extra-samurai-110",
    "name": "Ataque Extra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ataque-extra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ],
      "rules": [
        {
          "id": "extra-attack",
          "kind": "attacks",
          "key": "",
          "amount": 2,
          "scale": "fixed"
        }
      ]
    }
  },
  {
    "id": "feature-combate-elegante-samurai-110",
    "name": "Combate Elegante",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "combate-elegante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-desafiar-a-honra-samurai-110",
    "name": "Desafiar A Honra",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "desafiar-a-honra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-furia-indomavel-samurai-110",
    "name": "Fúria Indomável",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "furia-indomavel",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-orgulho-inquebravel-samurai-110",
    "name": "Orgulho Inquebrável",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "orgulho-inquebravel",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "feature-mestre-samurai-samurai-110",
    "name": "Mestre Samurai",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mestre-samurai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.110",
      "description": "Consultar a regra em Jogador 2.1, página 110.",
      "activity": {
        "activation": "passive"
      },
      "tags": [
        "style:samurai"
      ]
    }
  },
  {
    "id": "style-samurai",
    "name": "Samurai",
    "type": "style",
    "img": "icons/svg/sword.svg",
    "system": {
      "identifier": "samurai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.107",
      "description": "Consultar a regra em Jogador 2.1, página 107.",
      "hitDie": 10,
      "primaryAttribute": "strength",
      "skillCount": 2,
      "skillProficiencies": [
        "intimidation",
        "insight",
        "perception",
        "survival"
      ],
      "saveProficiencies": [
        "constitution",
        "will"
      ],
      "equipmentProficiencies": [
        "Armas Cortantes"
      ],
      "advancements": [
        {
          "id": "innate",
          "label": "Habilidade Básica Inata",
          "kind": "trait",
          "options": [
            "Superioridade Absoluta",
            "Superando Limites"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": true
        },
        {
          "id": "feature-armamento-samurai",
          "label": "Característica: Armamento Samurai",
          "kind": "item",
          "options": [
            "catalog:feature-armamento-samurai-samurai-108"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-juramento",
          "label": "Característica: Juramento",
          "kind": "item",
          "options": [
            "catalog:feature-juramento-samurai-108"
          ],
          "count": 1,
          "amount": 1,
          "level": 2,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-bushido",
          "label": "Característica: Bushido",
          "kind": "item",
          "options": [
            "catalog:feature-bushido-samurai-109"
          ],
          "count": 1,
          "amount": 1,
          "level": 3,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-concentracao-total",
          "label": "Característica: Concentração Total",
          "kind": "item",
          "options": [
            "catalog:feature-concentracao-total-samurai-109"
          ],
          "count": 1,
          "amount": 1,
          "level": 5,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-armadura-samurai",
          "label": "Característica: Armadura Samurai",
          "kind": "item",
          "options": [
            "catalog:feature-armadura-samurai-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 6,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-ataque-extra",
          "label": "Característica: Ataque Extra",
          "kind": "item",
          "options": [
            "catalog:feature-ataque-extra-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 7,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-combate-elegante",
          "label": "Característica: Combate Elegante",
          "kind": "item",
          "options": [
            "catalog:feature-combate-elegante-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 10,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-desafiar-a-honra",
          "label": "Característica: Desafiar A Honra",
          "kind": "item",
          "options": [
            "catalog:feature-desafiar-a-honra-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 11,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-furia-indomavel",
          "label": "Característica: Fúria Indomável",
          "kind": "item",
          "options": [
            "catalog:feature-furia-indomavel-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 14,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-orgulho-inquebravel",
          "label": "Característica: Orgulho Inquebrável",
          "kind": "item",
          "options": [
            "catalog:feature-orgulho-inquebravel-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 15,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "feature-mestre-samurai",
          "label": "Característica: Mestre Samurai",
          "kind": "item",
          "options": [
            "catalog:feature-mestre-samurai-samurai-110"
          ],
          "count": 1,
          "amount": 1,
          "level": 18,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "ava-4",
          "label": "Aumento de atributo — estilo 4",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 4,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-8",
          "label": "Aumento de atributo — estilo 8",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 8,
          "scope": "style",
          "cap": 20,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-12",
          "label": "Aumento de atributo — estilo 12",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 12,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-16",
          "label": "Aumento de atributo — estilo 16",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 16,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        },
        {
          "id": "ava-20",
          "label": "Aumento de atributo — estilo 20",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 2,
          "amount": 1,
          "level": 20,
          "scope": "style",
          "cap": 22,
          "allowRepeat": true,
          "initialOnly": false
        }
      ],
      "automationNotes": "Características de combate são concedidas com referência à fonte; gatilhos específicos devem ser configurados no item. Equipamento inicial, arma favorita e técnicas exigem as escolhas do livro.",
      "initialEquipmentNote": "2 katanas e; 7d10 x 1000 Bellys"
    }
  },
  {
    "id": "technique-kiri-zutsumi-samurai",
    "name": "Kiri Zutsumi",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kiri-zutsumi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 1,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 2,
        "damageFormula": "2d10",
        "range": "Até 9 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-kiri-shigure-samurai",
    "name": "Kiri Shigure",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "kiri-shigure",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 1,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-zansetsu-gama-samurai",
    "name": "Zansetsu-Gama",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "zansetsu-gama",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 2,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 3,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 3,
        "damageFormula": "4d6",
        "range": "Até 15 metros, Cone",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-gun-modoki-samurai",
    "name": "Gun Modoki",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "gun-modoki",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 3,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "6d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "strength",
        "damageType": "bludgeoning",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-engetsu-samurai",
    "name": "Engetsu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "engetsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 6,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-amano-gawa-samurai",
    "name": "Amano-Gawa",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "amano-gawa",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 4,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 9,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 6,
        "damageFormula": "8d6",
        "range": "Até 9 metros de raio, Esfera",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "slashing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-togen-shirataki-samurai",
    "name": "Togen Shirataki",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "togen-shirataki",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 5,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 8,
        "damageFormula": "10d10",
        "range": "33 metros, Linha",
        "duration": "Instantâneo",
        "requirements": "2 Armas Cortantes, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "auxiliary-mangetsu-samurai",
    "name": "Mangetsu",
    "type": "auxiliary",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mangetsu",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 12,
      "activity": {
        "activation": "other",
        "attribute": "strength",
        "proficient": true
      },
      "rulesReviewed": false
    }
  },
  {
    "id": "technique-dohatsu-kohai-samurai",
    "name": "Dohatsu Kohai",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "dohatsu-kohai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 6,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 16,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 9,
        "damageFormula": "12d8",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "save",
        "saveAttribute": "dexterity",
        "damageType": "piercing",
        "onSave": "half",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "technique-togen-totsuka-samurai",
    "name": "Togen Totsuka",
    "type": "technique",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "togen-totsuka",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.111",
      "description": "Consultar a regra em Jogador 2.1, página 111.",
      "grade": 7,
      "tags": [
        "style:samurai"
      ],
      "levelRequirement": 20,
      "activity": {
        "activation": "powerful",
        "attribute": "strength",
        "proficient": true,
        "powerCost": 14,
        "damageFormula": "13d10",
        "range": "Toque",
        "duration": "Instantâneo",
        "requirements": "1 Arma Cortante, Ação Poderosa"
      },
      "rulesReviewed": false,
      "resolution": {
        "kind": "attack",
        "saveAttribute": "constitution",
        "damageType": "slashing",
        "onSave": "none",
        "addAttributeToAttack": true
      }
    }
  },
  {
    "id": "feature-ecos-do-passado",
    "name": "Ecos Do Passado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "ecos-do-passado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.170",
      "description": "Consultar a regra em Jogador 2.1, página 170.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-amnesia",
    "name": "Amnésia",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "amnesia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.170",
      "description": "Consultar a regra em Jogador 2.1, página 170.",
      "skillProficiencies": [
        "history",
        "insight",
        "investigation",
        "perception"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "insight",
            "investigation",
            "perception"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-ecos-do-passado"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-rock-star",
    "name": "Rock Star",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "rock-star",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.170",
      "description": "Consultar a regra em Jogador 2.1, página 170.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-artista",
    "name": "Artista",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "artista",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.170",
      "description": "Consultar a regra em Jogador 2.1, página 170.",
      "skillProficiencies": [
        "acrobatics",
        "performance",
        "history",
        "persuasion",
        "sleightOfHand",
        "provocation"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "acrobatics",
            "performance",
            "history",
            "persuasion",
            "sleightOfHand",
            "provocation"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-rock-star"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-contatos",
    "name": "Contatos",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "contatos",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-criminoso",
    "name": "Criminoso",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "criminoso",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "skillProficiencies": [
        "deception",
        "stealth",
        "intimidation",
        "sleightOfHand"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "deception",
            "stealth",
            "intimidation",
            "sleightOfHand"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-contatos"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-marcas-da-derrota",
    "name": "Marcas Da Derrota",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "marcas-da-derrota",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-derrotado",
    "name": "Derrotado",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "derrotado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "skillProficiencies": [
        "history",
        "insight",
        "investigation",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "insight",
            "investigation",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-marcas-da-derrota"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-conhecimento-acumulado",
    "name": "Conhecimento Acumulado",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "conhecimento-acumulado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-erudito",
    "name": "Erudito",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "erudito",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "skillProficiencies": [
        "history",
        "investigation",
        "nature",
        "supernatural"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "investigation",
            "nature",
            "supernatural"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-conhecimento-acumulado"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-esperanca",
    "name": "Esperança",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "esperanca",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-escravo",
    "name": "Escravo",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "escravo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.171",
      "description": "Consultar a regra em Jogador 2.1, página 171.",
      "skillProficiencies": [
        "athletics",
        "insight",
        "perception",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "athletics",
            "insight",
            "perception",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-esperanca"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-apoio-no-exilio",
    "name": "Apoio No Exílio",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "apoio-no-exilio",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-exilado",
    "name": "Exilado",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "exilado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "skillProficiencies": [
        "history",
        "insight",
        "investigation",
        "persuasion"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "insight",
            "investigation",
            "persuasion"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-apoio-no-exilio"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "background-familia-d",
    "name": "Família D.",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "familia-d",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "skillProficiencies": [
        "haki",
        "intimidation",
        "insight",
        "perception"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "haki",
            "intimidation",
            "insight",
            "perception"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-carteirada",
    "name": "Carteirada",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "carteirada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-marinheiro",
    "name": "Marinheiro",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "marinheiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "skillProficiencies": [
        "athletics",
        "investigation",
        "medicine",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "athletics",
            "investigation",
            "medicine",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-carteirada"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-bom-negocio",
    "name": "Bom Negócio",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "bom-negocio",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-mercador",
    "name": "Mercador",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mercador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.172",
      "description": "Consultar a regra em Jogador 2.1, página 172.",
      "skillProficiencies": [
        "deception",
        "insight",
        "investigation",
        "persuasion"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "deception",
            "insight",
            "investigation",
            "persuasion"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-bom-negocio"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-contrato-temporario",
    "name": "Contrato Temporário",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "contrato-temporario",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-mercenario",
    "name": "Mercenário",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "mercenario",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "skillProficiencies": [
        "athletics",
        "intimidation",
        "investigation",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "athletics",
            "intimidation",
            "investigation",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-contrato-temporario"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-influencia",
    "name": "Influência",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "influencia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-nobre",
    "name": "Nobre",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "nobre",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "skillProficiencies": [
        "history",
        "insight",
        "investigation",
        "nature"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "insight",
            "investigation",
            "nature"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-influencia"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-malandragem",
    "name": "Malandragem",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "malandragem",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-orfao",
    "name": "Órfão",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "orfao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "skillProficiencies": [
        "athletics",
        "stealth",
        "insight",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "athletics",
            "stealth",
            "insight",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-malandragem"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-historias-do-mar",
    "name": "Histórias Do Mar",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "historias-do-mar",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-pescador",
    "name": "Pescador",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "pescador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.173",
      "description": "Consultar a regra em Jogador 2.1, página 173.",
      "skillProficiencies": [
        "deception",
        "insight",
        "persuasion",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "deception",
            "insight",
            "persuasion",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-historias-do-mar"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-discurso",
    "name": "Discurso",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "discurso",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.174",
      "description": "Consultar a regra em Jogador 2.1, página 174.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-politico",
    "name": "Político",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "politico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.174",
      "description": "Consultar a regra em Jogador 2.1, página 174.",
      "skillProficiencies": [
        "performance",
        "deception",
        "history",
        "insight",
        "persuasion",
        "provocation"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "performance",
            "deception",
            "history",
            "insight",
            "persuasion",
            "provocation"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-discurso"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-mao-do-destino",
    "name": "Mão Do Destino",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "mao-do-destino",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.174",
      "description": "Consultar a regra em Jogador 2.1, página 174.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-predestinado",
    "name": "Predestinado",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "predestinado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.174",
      "description": "Consultar a regra em Jogador 2.1, página 174.",
      "skillProficiencies": [
        "insight",
        "perception",
        "persuasion",
        "luck"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "insight",
            "perception",
            "persuasion",
            "luck"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-mao-do-destino"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-heroi-do-povo",
    "name": "Herói Do Povo",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "heroi-do-povo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.174",
      "description": "Consultar a regra em Jogador 2.1, página 174.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-revolucionario",
    "name": "Revolucionário",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "revolucionario",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.174",
      "description": "Consultar a regra em Jogador 2.1, página 174.",
      "skillProficiencies": [
        "acrobatics",
        "athletics",
        "history",
        "medicine",
        "persuasion"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "acrobatics",
            "athletics",
            "history",
            "medicine",
            "persuasion"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-heroi-do-povo"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-fieis",
    "name": "Fiéis",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "fieis",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.175",
      "description": "Consultar a regra em Jogador 2.1, página 175.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-sacerdote",
    "name": "Sacerdote",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "sacerdote",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.175",
      "description": "Consultar a regra em Jogador 2.1, página 175.",
      "skillProficiencies": [
        "history",
        "medicine",
        "persuasion",
        "supernatural"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "medicine",
            "persuasion",
            "supernatural"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-fieis"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-reputacao",
    "name": "Reputação",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "reputacao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.175",
      "description": "Consultar a regra em Jogador 2.1, página 175.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-sobrevivente",
    "name": "Sobrevivente",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "sobrevivente",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.175",
      "description": "Consultar a regra em Jogador 2.1, página 175.",
      "skillProficiencies": [
        "history",
        "insight",
        "perception",
        "survival"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "insight",
            "perception",
            "survival"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-reputacao"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "feature-costas-quentes",
    "name": "Costas Quentes",
    "type": "feature",
    "img": "icons/svg/aura.svg",
    "system": {
      "identifier": "costas-quentes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.175",
      "description": "Consultar a regra em Jogador 2.1, página 175.",
      "activity": {
        "activation": "passive"
      }
    }
  },
  {
    "id": "background-tenryuubito",
    "name": "Tenryuubito",
    "type": "background",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "tenryuubito",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.175",
      "description": "Consultar a regra em Jogador 2.1, página 175.",
      "skillProficiencies": [
        "history",
        "intimidation",
        "investigation",
        "nature"
      ],
      "advancements": [
        {
          "id": "background-attribute",
          "label": "Aprimoramento do antecedente: +2",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 2,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-skill",
          "label": "Perícia do antecedente",
          "kind": "skill",
          "options": [
            "history",
            "intimidation",
            "investigation",
            "nature"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        },
        {
          "id": "background-feature",
          "label": "Característica especial",
          "kind": "item",
          "options": [
            "catalog:feature-costas-quentes"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "training-apostador",
    "name": "Apostador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "apostador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.177",
      "description": "Consultar a regra em Jogador 2.1, página 177.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom",
              "will"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-bom-nadador",
    "name": "Bom Nadador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "bom-nadador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.177",
      "description": "Consultar a regra em Jogador 2.1, página 177.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-corredor",
    "name": "Corredor",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "corredor",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.177",
      "description": "Consultar a regra em Jogador 2.1, página 177.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "constitution"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-desarmador",
    "name": "Desarmador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "desarmador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.178",
      "description": "Consultar a regra em Jogador 2.1, página 178.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-improvisador",
    "name": "Improvisador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "improvisador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.178",
      "description": "Consultar a regra em Jogador 2.1, página 178.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-jogador-experiente",
    "name": "Jogador Experiente",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "jogador-experiente",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.178",
      "description": "Consultar a regra em Jogador 2.1, página 178.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom",
              "will"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-ladrao",
    "name": "Ladrão",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "ladrao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.178",
      "description": "Consultar a regra em Jogador 2.1, página 178.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-genialidade-inusitada",
    "name": "Genialidade Inusitada",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "genialidade-inusitada",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.178",
      "description": "Consultar a regra em Jogador 2.1, página 178.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "constitution",
              "wisdom"
            ],
            "minimum": 12
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-soru",
    "name": "Soru",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "soru",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.178",
      "description": "Consultar a regra em Jogador 2.1, página 178.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 18
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-entusiasta-de-plantas",
    "name": "Entusiasta De Plantas",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "entusiasta-de-plantas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.179",
      "description": "Consultar a regra em Jogador 2.1, página 179.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 18
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-combatente-montado",
    "name": "Combatente Montado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "combatente-montado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.179",
      "description": "Consultar a regra em Jogador 2.1, página 179.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 13
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-copiador",
    "name": "Copiador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "copiador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.179",
      "description": "Consultar a regra em Jogador 2.1, página 179.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 17
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-controle-corporal",
    "name": "Controle Corporal",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "controle-corporal",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.179",
      "description": "Consultar a regra em Jogador 2.1, página 179.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "constitution"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-especialista-em-combate-aereo",
    "name": "Especialista Em Combate Aéreo",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "especialista-em-combate-aereo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-estrategista",
    "name": "Estrategista",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "estrategista",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom",
              "presence"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-geppo",
    "name": "Geppo",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "geppo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 18
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-kamie",
    "name": "Kamie",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "kamie",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity"
            ],
            "minimum": 18
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-resistencia-a-kairoseki",
    "name": "Resistência À Kairoseki",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "resistencia-a-kairoseki",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "constitution",
              "will"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-tekkai",
    "name": "Tekkai",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "tekkai",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "constitution"
            ],
            "minimum": 18
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-tecnica-as",
    "name": "Técnica Ás",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "tecnica-as",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.180",
      "description": "Consultar a regra em Jogador 2.1, página 180.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-algoz-de-usuarios-de-akuma-no-mi",
    "name": "Algoz De Usuários De Akuma No Mi",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "algoz-de-usuarios-de-akuma-no-mi",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.181",
      "description": "Consultar a regra em Jogador 2.1, página 181.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "will"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-arte-do-tempo",
    "name": "Arte Do Tempo",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "arte-do-tempo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.181",
      "description": "Consultar a regra em Jogador 2.1, página 181.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": true,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom"
            ],
            "minimum": 19
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-autoaperfeicoamento",
    "name": "Autoaperfeiçoamento",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "autoaperfeicoamento",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.181",
      "description": "Consultar a regra em Jogador 2.1, página 181.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": true,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity",
              "constitution",
              "wisdom",
              "presence",
              "will"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      },
      "advancements": [
        {
          "id": "training-attribute",
          "label": "Autoaperfeiçoamento: +1",
          "kind": "attribute",
          "options": [
            "strength",
            "dexterity",
            "constitution",
            "wisdom",
            "presence",
            "will"
          ],
          "count": 1,
          "amount": 1,
          "level": 1,
          "scope": "style",
          "cap": 20,
          "allowRepeat": false,
          "initialOnly": false
        }
      ]
    }
  },
  {
    "id": "training-conhecimento-celestial",
    "name": "Conhecimento Celestial",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "conhecimento-celestial",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.181",
      "description": "Consultar a regra em Jogador 2.1, página 181.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-guerreiro-treinado",
    "name": "Guerreiro Treinado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "guerreiro-treinado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.181",
      "description": "Consultar a regra em Jogador 2.1, página 181.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "constitution"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      },
      "rules": [
        {
          "id": "trained-hp",
          "kind": "vitality",
          "key": "",
          "amount": 3,
          "scale": "proficiency"
        }
      ]
    }
  },
  {
    "id": "training-hipnotizador",
    "name": "Hipnotizador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "hipnotizador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.182",
      "description": "Consultar a regra em Jogador 2.1, página 182.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "wisdom",
              "presence"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-punho-bebado",
    "name": "Punho Bêbado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "punho-bebado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.182",
      "description": "Consultar a regra em Jogador 2.1, página 182.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": true,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 17
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-resistencia-a-kairoseki-superior",
    "name": "Resistência À Kairoseki Superior",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "resistencia-a-kairoseki-superior",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.182",
      "description": "Consultar a regra em Jogador 2.1, página 182.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "constitution",
              "will"
            ],
            "minimum": 20
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-bombardeador",
    "name": "Bombardeador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "bombardeador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.183",
      "description": "Consultar a regra em Jogador 2.1, página 183.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 16
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-combatente-exotico",
    "name": "Combatente Exótico",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "combatente-exotico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.183",
      "description": "Consultar a regra em Jogador 2.1, página 183.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-combatente-versatil",
    "name": "Combatente Versátil",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "combatente-versatil",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.183",
      "description": "Consultar a regra em Jogador 2.1, página 183.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-arqueiro-treinado",
    "name": "Arqueiro Treinado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "arqueiro-treinado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.183",
      "description": "Consultar a regra em Jogador 2.1, página 183.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-espadachim-treinado",
    "name": "Espadachim Treinado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "espadachim-treinado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.184",
      "description": "Consultar a regra em Jogador 2.1, página 184.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-estilingueiro-treinado",
    "name": "Estilingueiro Treinado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "estilingueiro-treinado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.184",
      "description": "Consultar a regra em Jogador 2.1, página 184.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-gangster",
    "name": "Gangster",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "gangster",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.184",
      "description": "Consultar a regra em Jogador 2.1, página 184.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-ceifador",
    "name": "Ceifador",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "ceifador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.185",
      "description": "Consultar a regra em Jogador 2.1, página 185.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 13
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-guerreiro-atroz",
    "name": "Guerreiro Atroz",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "guerreiro-atroz",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.185",
      "description": "Consultar a regra em Jogador 2.1, página 185.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-lutar-com-machado",
    "name": "Lutar Com Machado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "lutar-com-machado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.185",
      "description": "Consultar a regra em Jogador 2.1, página 185.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-lanceiro-treinado",
    "name": "Lanceiro Treinado",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "lanceiro-treinado",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.186",
      "description": "Consultar a regra em Jogador 2.1, página 186.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 3,
        "days": 10,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-combatente-ardiloso",
    "name": "Combatente Ardiloso",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "combatente-ardiloso",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.186",
      "description": "Consultar a regra em Jogador 2.1, página 186.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "dexterity",
              "wisdom"
            ],
            "minimum": 15
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-espadachim-negro",
    "name": "Espadachim Negro",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "espadachim-negro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.186",
      "description": "Consultar a regra em Jogador 2.1, página 186.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": false,
        "repeatable": false,
        "species": [],
        "requirements": [
          {
            "attributes": [
              "strength",
              "dexterity"
            ],
            "minimum": 17
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-pequeno-gigante",
    "name": "Pequeno Gigante",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "pequeno-gigante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.187",
      "description": "Consultar a regra em Jogador 2.1, página 187.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "anoes"
        ],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      },
      "rules": [
        {
          "id": "small-giant-defense",
          "kind": "defense",
          "key": "",
          "amount": 2,
          "scale": "fixed",
          "condition": {
            "aboveHalfHP": true
          }
        }
      ]
    }
  },
  {
    "id": "training-conexao-com-a-natureza",
    "name": "Conexão Com A Natureza",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "conexao-com-a-natureza",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.187",
      "description": "Consultar a regra em Jogador 2.1, página 187.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "anoes"
        ],
        "requirements": [
          {
            "attributes": [
              "wisdom"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": [
          {
            "target": "entusiasta-de-plantas",
            "cost": 1,
            "days": 0,
            "ignoreRequirements": true,
            "ignoreTutor": true
          }
        ]
      }
    }
  },
  {
    "id": "training-afinidade-cultural",
    "name": "Afinidade Cultural",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "afinidade-cultural",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.187",
      "description": "Consultar a regra em Jogador 2.1, página 187.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "celestiais"
        ],
        "requirements": [
          {
            "attributes": [
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": [
          {
            "target": "conhecimento-celestial",
            "cost": 1,
            "days": 0,
            "ignoreRequirements": true,
            "ignoreTutor": true
          }
        ]
      },
      "rules": [
        {
          "id": "celestial-acrobatics",
          "kind": "skillAdvantage",
          "key": "acrobatics",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "context": "Altura elevada"
          }
        },
        {
          "id": "celestial-save",
          "kind": "saveAdvantage",
          "key": "dexterity",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "context": "Altura elevada"
          }
        }
      ]
    }
  },
  {
    "id": "training-guerreiro-nato",
    "name": "Guerreiro Nato",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "guerreiro-nato",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.187",
      "description": "Consultar a regra em Jogador 2.1, página 187.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "gigantes"
        ],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-resistencia-dos-gigantes",
    "name": "Resistência Dos Gigantes",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "resistencia-dos-gigantes",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.187",
      "description": "Consultar a regra em Jogador 2.1, página 187.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "gigantes"
        ],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-expertise-cultural",
    "name": "Expertise Cultural",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "expertise-cultural",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.187",
      "description": "Consultar a regra em Jogador 2.1, página 187.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "strength"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      },
      "rules": [
        {
          "id": "weaponProficiency-Tridente",
          "kind": "weaponProficiency",
          "key": "Tridente",
          "amount": 1,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        },
        {
          "id": "attackBonus-all",
          "kind": "attackBonus",
          "key": "",
          "amount": 2,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "Submerso",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  },
  {
    "id": "training-iniciada-em-haki-apenas-para-a-variante-da-especie-kuja",
    "name": "Iniciada Em Haki (Apenas Para A Variante Da Espécie – Kuja)",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "iniciada-em-haki-apenas-para-a-variante-da-especie-kuja",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "will"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-resiliencia",
    "name": "Resiliência",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "resiliencia",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "wisdom"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-versatilidade-humana",
    "name": "Versatilidade Humana",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "versatilidade-humana",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "wisdom"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-hakka",
    "name": "Hakka",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "hakka",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-asas-funcionais",
    "name": "Asas Funcionais",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "asas-funcionais",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-leao-da-lua",
    "name": "Leão Da Lua",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "leao-da-lua",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 5,
        "days": 15,
        "tutorRequired": true,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "constitution"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "training-furtividade-animal",
    "name": "Furtividade Animal",
    "type": "training",
    "img": "icons/svg/upgrade.svg",
    "system": {
      "identifier": "furtividade-animal",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.188",
      "description": "Consultar a regra em Jogador 2.1, página 188.",
      "activity": {
        "activation": "passive"
      },
      "training": {
        "cost": 1,
        "days": 5,
        "tutorRequired": false,
        "repeatable": false,
        "species": [
          "povo-do-mar"
        ],
        "requirements": [
          {
            "attributes": [
              "dexterity"
            ],
            "minimum": 14
          }
        ],
        "manualRequirement": "",
        "state": "unlearned",
        "modifiers": []
      }
    }
  },
  {
    "id": "personalization-fisico-perfeito",
    "name": "Físico Perfeito",
    "type": "personalization",
    "system": {
      "identifier": "fisico-perfeito",
      "origin": "official",
      "source": "Jogador 2.1 p.164",
      "rules": [
        {
          "id": "short-rest",
          "kind": "shortRestMinutes",
          "key": "",
          "amount": 15,
          "scale": "fixed",
          "condition": {
            "minimumLevel": 1,
            "context": "",
            "training": "",
            "aboveHalfHP": false,
            "equipped": false
          }
        }
      ]
    }
  }
];
