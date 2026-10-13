import {SKILLS} from './engine.mjs';
// Names and first-profession skill choices, Jogador 2.1 pp.133–134.
export const PROFESSION_CATALOG = [
  {
    "id": "profession-adestrador",
    "type": "profession",
    "name": "Adestrador",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "adestrador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "acrobatics",
          "performance",
          "insight",
          "perception",
          "persuasion",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-arqueologo",
    "type": "profession",
    "name": "Arqueólogo",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "arqueologo",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "history",
          "insight",
          "investigation",
          "perception",
          "persuasion",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-botanico",
    "type": "profession",
    "name": "Botânico",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "botanico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "history",
          "insight",
          "investigation",
          "nature",
          "perception",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-cacador-de-recompensas",
    "type": "profession",
    "name": "Caçador de Recompensas",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "cacador-de-recompensas",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "stealth",
          "intimidation",
          "investigation",
          "perception",
          "persuasion",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-carpinteiro",
    "type": "profession",
    "name": "Carpinteiro",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "carpinteiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "acrobatics",
          "athletics",
          "history",
          "investigation",
          "persuasion",
          "sleightOfHand"
        ]
      }
    }
  },
  {
    "id": "profession-cientista",
    "type": "profession",
    "name": "Cientista",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "cientista",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "investigation",
          "insight",
          "medicine",
          "perception",
          "sleightOfHand",
          "nature"
        ]
      }
    }
  },
  {
    "id": "profession-contrabandista",
    "type": "profession",
    "name": "Contrabandista",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "contrabandista",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "deception",
          "stealth",
          "intimidation",
          "insight",
          "persuasion",
          "provocation"
        ]
      }
    }
  },
  {
    "id": "profession-cozinheiro",
    "type": "profession",
    "name": "Cozinheiro",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "cozinheiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "performance",
          "insight",
          "persuasion",
          "sleightOfHand",
          "provocation",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-engenheiro",
    "type": "profession",
    "name": "Engenheiro",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "engenheiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "history",
          "insight",
          "investigation",
          "perception",
          "sleightOfHand",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-espiao",
    "type": "profession",
    "name": "Espião",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "espiao",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "deception",
          "stealth",
          "insight",
          "investigation",
          "perception",
          "sleightOfHand"
        ]
      }
    }
  },
  {
    "id": "profession-farmaceutico",
    "type": "profession",
    "name": "Farmacêutico",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "farmaceutico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "history",
          "insight",
          "investigation",
          "medicine",
          "nature",
          "perception"
        ]
      }
    }
  },
  {
    "id": "profession-ferreiro",
    "type": "profession",
    "name": "Ferreiro",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "ferreiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.133",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.133 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "athletics",
          "history",
          "insight",
          "investigation",
          "perception",
          "sleightOfHand"
        ]
      }
    }
  },
  {
    "id": "profession-informante",
    "type": "profession",
    "name": "Informante",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "informante",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "deception",
          "stealth",
          "investigation",
          "insight",
          "perception",
          "persuasion"
        ]
      }
    }
  },
  {
    "id": "profession-inventor",
    "type": "profession",
    "name": "Inventor",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "inventor",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "history",
          "investigation",
          "insight",
          "nature",
          "sleightOfHand",
          "perception"
        ]
      }
    }
  },
  {
    "id": "profession-jornalista",
    "type": "profession",
    "name": "Jornalista",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "jornalista",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "deception",
          "history",
          "investigation",
          "insight",
          "perception",
          "persuasion"
        ]
      }
    }
  },
  {
    "id": "profession-medico",
    "type": "profession",
    "name": "Médico",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "medico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "insight",
          "investigation",
          "medicine",
          "perception",
          "sleightOfHand",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-musico",
    "type": "profession",
    "name": "Músico",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "musico",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "performance",
          "deception",
          "stealth",
          "intimidation",
          "persuasion",
          "sleightOfHand",
          "provocation"
        ]
      }
    }
  },
  {
    "id": "profession-navegador",
    "type": "profession",
    "name": "Navegador",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "navegador",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "deception",
          "insight",
          "investigation",
          "perception",
          "persuasion",
          "survival"
        ]
      }
    }
  },
  {
    "id": "profession-psiquiatra",
    "type": "profession",
    "name": "Psiquiatra",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "psiquiatra",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "insight",
          "investigation",
          "medicine",
          "perception",
          "persuasion",
          "provocation"
        ]
      }
    }
  },
  {
    "id": "profession-timoneiro",
    "type": "profession",
    "name": "Timoneiro",
    "img": "icons/svg/book.svg",
    "system": {
      "identifier": "timoneiro",
      "origin": "official",
      "contentVersion": "2.1",
      "source": "OP RPG — Jogador 2.1, p.134",
      "description": "Perícias iniciais e graduação configuradas. Consulte os equipamentos e características específicos em Jogador 2.1, p.134 e na seção desta profissão.",
      "rulesReviewed": false,
      "profession": {
        "rank": "professional",
        "initialSkillCount": 2,
        "skillOptions": [
          "athletics",
          "performance",
          "insight",
          "perception",
          "persuasion",
          "sleightOfHand"
        ]
      }
    }
  },
  {id:'profession-sem-profissao',type:'profession',name:'Sem Profissão',img:'icons/svg/hand.svg',system:{identifier:'sem-profissao',origin:'official',contentVersion:'2.1',source:'OP RPG — Jogador 2.1, p.134',description:'Escolha de não exercer profissão. Ajudante Perfeito: +5 em um teste profissional de outra criatura, 3 usos por descanso longo; em combate exige Ajudar. Foco: duas perícias, exceto Haki, Sobrenatural e Sorte. Parceiro de Treino: metade do tempo, arredondado para cima, apenas sem tutor obrigatório; impede seus próprios treinos nesse período. Tempo Livre: até cinco funções do navio sem impedir treinamento. Esta escolha impede aprender profissões.',profession:{rank:'professional',initialSkillCount:2,skillOptions:Object.keys(SKILLS).filter(key=>!['haki','supernatural','luck'].includes(key))}}}
];
