// Somente regras conferidas; nenhuma dependência de Foundry ou de outro sistema.
export const ATTRIBUTES = Object.freeze({strength: "Força", dexterity: "Destreza", constitution: "Constituição", wisdom: "Sabedoria", presence: "Presença", will: "Vontade"});
export const CATEGORIES = Object.freeze({species: "Espécie / Raça", style:"Estilo de combate",profession:"Profissão",training:"Treinamento",hakiTalent:"Talento de Haki",fruit:"Akuma no Mi",personalization:"Personalização",weapon: "Arma / Ataque comum", feature: "Característica", technique: "Técnica de combate", auxiliary: "Técnica auxiliar", legendary: "Ação lendária", equipment: "Equipamento"});
export const SHEET_TABS=Object.freeze([{id:"details",label:"Detalhes",icon:"fa-solid fa-user"},{id:"inventory",label:"Inventário",icon:"fa-solid fa-box"},{id:"features",label:"Características",icon:"fa-solid fa-list"},{id:"techniques",label:"Técnicas",icon:"fa-solid fa-book"},{id:"powers",label:"Haki e Akuma",icon:"fa-solid fa-fire"},{id:"effects",label:"Efeitos",icon:"fa-solid fa-bolt"},{id:"training",label:"Treinamentos",icon:"fa-solid fa-dumbbell"},{id:"professions",label:"Profissões",icon:"fa-solid fa-briefcase"},{id:"personal",label:"Personalização",icon:"fa-solid fa-feather"},{id:"creation",label:"Criação",icon:"fa-solid fa-compass"}]);
export const ACTIVATIONS = Object.freeze({action: "Ação", powerful: "Ação poderosa", bonus: "Ação bônus", reaction: "Reação", legendary: "Ação lendária", passive: "Passiva", other: "Outra / conforme fonte"});
export function attributeModifier(value) { return Math.floor((value - 10) / 2); }
export function proficiencyBonus(level) {
  if (!Number.isInteger(level) || level < 1 || level > 20) throw new Error("Proficiência automática disponível somente nos níveis 1–20.");
  return 2 + Math.floor((level - 1) / 4);
}
export function d20Formula({advantage = false, disadvantage = false, modifier = 0, proficiency = 0} = {}) {
  if (![modifier, proficiency].every(Number.isFinite)) throw new Error("Bônus inválido.");
  const die = advantage === disadvantage ? "1d20" : advantage ? "2d20kh" : "2d20kl";
  return `${die} + ${modifier} + ${proficiency}`;
}
export function creationChecklist(system) {
  return [
    {label: "Escolher espécie / raça", complete: Boolean(system.identity.species.name)},
    {label: "Registrar estilo de combate", complete: Boolean(system.identity.combatStyle.trim())},
    {label: "Registrar profissão (ou indicar sem profissão)", complete: Boolean(system.identity.profession.trim())},
    {label: "Conferir atributos e escolhas da fonte", complete: system.creation.attributesReviewed},
    {label: "Conferir PV, defesa, equipamentos e características", complete: system.creation.resourcesReviewed}
  ];
}
export function speciesSnapshot(item) {
  if (item.type !== "species") throw new Error("Selecione uma espécie.");
  return {uuid: item.uuid, name: item.name, origin: item.system.origin, version: item.system.contentVersion, traits: item.system.traits};
}
