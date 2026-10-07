import {ATTRIBUTES} from "./rules.mjs";
// Registro compartilhado para catálogo e seletor. Campos de saldo não são bônus persistentes.
export const EFFECT_FIELDS=Object.freeze([
 ...Object.entries(ATTRIBUTES).map(([id,label])=>({path:`system.attributes.${id}.base`,label:`${label} — valor base`,type:"number",unit:"pontos",phase:"initial",operations:["add","subtract","multiply","override","upgrade","downgrade"],source:"Jogador 2.1 p.258"})),
 {path:"system.vitality.max",label:"PV máximos",type:"number",unit:"PV",phase:"initial",operations:["add","subtract","override"],source:"conforme característica"},
 {path:"system.defense.rating",label:"Classe de Resistência",type:"number",unit:"CR",phase:"initial",operations:["add","subtract","override"],source:"Jogador 2.1 p.12 / característica"},
 {path:"system.movement.distance",label:"Deslocamento base",type:"number",unit:"m",phase:"initial",operations:["add","subtract","multiply","override"],source:"conforme espécie/característica"},
 {path:"system.power.maxOverride",label:"Máximo personalizado de PP",type:"number",unit:"PP",phase:"initial",operations:["override"],source:"conforme fonte"}
]);
export function effectChange(path,type,value) {
 const field=EFFECT_FIELDS.find(field=>field.path===path);
 if(!field||!field.operations.includes(type)||!Number.isFinite(value)) throw new Error("Campo, operação ou valor de efeito inválido.");
 return {key:path,type,value,phase:field.phase,priority:null};
}
