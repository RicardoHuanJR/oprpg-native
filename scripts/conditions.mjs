export const CONDITIONS=Object.freeze({grappled:"Agarrado",frightened:"Amedrontado",stunned:"Atordoado",drunk:"Bêbado",prone:"Caído",blinded:"Cego",empowered:"Empoderado",charmed:"Enfeitiçado",weakened:"Enfraquecido",enraged:"Enfurecido",poisoned:"Envenenado",shaken:"Estremecido",restrained:"Impedido",incapacitated:"Incapacitado",unconscious:"Inconsciente",invisible:"Invisível",lethargic:"Letárgico",paralyzed:"Paralisado",burned:"Queimado",bleeding:"Sangramento",sleepy:'Sonolento',suffocated:'Sufocado',deaf:'Surdo'});
export function conditionSet(statuses,{value,max,dead=false}={}) {
 const result=new Set(statuses??[]);
 if(value===0&&max>0&&!dead)result.add("unconscious");
 if(["stunned","paralyzed","unconscious","weakened"].some(id=>result.has(id)))result.add("incapacitated");
 if(result.has("unconscious"))result.add("prone");
 return result;
}
export function conditionModifiers(statuses,{kind,attribute,category,usesSight=false,usesHearing=false,fearSourceVisible=false}={}) {
 const ids=new Set(statuses);let advantage=false,disadvantage=false,automaticFailure=false;
 if(kind==="attribute") {
  disadvantage=ids.has("poisoned")||ids.has("weakened")||(ids.has("frightened")&&fearSourceVisible)||(ids.has("drunk")&&attribute==="dexterity")||(ids.has('sleepy')&&['dexterity','wisdom'].includes(attribute));
  automaticFailure=ids.has("blinded")&&usesSight||ids.has('deaf')&&usesHearing;
 }
 if(kind==="save") {
  disadvantage=ids.has("drunk")||(ids.has("restrained")&&attribute==="dexterity");
  automaticFailure=ids.has("weakened")||(["strength","dexterity"].includes(attribute)&&["stunned","paralyzed","unconscious"].some(id=>ids.has(id)));
 }
 if(kind==="attack") {
  disadvantage=["prone","blinded","enraged","poisoned","shaken","restrained"].some(id=>ids.has(id))||(category==="weapon"&&ids.has("frightened")&&fearSourceVisible);
  advantage=ids.has("invisible");
 }
 return {advantage,disadvantage,automaticFailure,reactionBlocked:ids.has('sleepy'),incapacitated:ids.has("incapacitated"),techniquesBlocked:["weakened","shaken","lethargic"].some(id=>ids.has(id)),concentrationBlocked:["incapacitated","enraged","burned","shaken"].some(id=>ids.has(id))};
}
export function targetAttackModifiers(statuses,{distance=null,canSeeInvisible=false}={}) {
 const ids=new Set(statuses);let advantage=["stunned","blinded","weakened","restrained","unconscious","paralyzed"].some(id=>ids.has(id));
 let disadvantage=ids.has("invisible")&&!canSeeInvisible;
 if(ids.has("prone")&&distance!==null){if(distance<=1.5)advantage=true;else disadvantage=true;}
 const close=distance!==null&&distance<=1.5;
 return {advantage,disadvantage,criticalOnHit:close&&(ids.has("unconscious")||ids.has("paralyzed")),extraCriticalDice:ids.has("stunned")||ids.has("paralyzed")?2:0};
}
export function movementFromConditions(distance,statuses) {
 const ids=new Set(statuses);
 if(["grappled","restrained","stunned","paralyzed","unconscious"].some(id=>ids.has(id)))return 0;
 return ids.has("weakened")?distance/2:distance;
}
