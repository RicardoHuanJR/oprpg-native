/** Zoan presentation and fixed numerical traits, Jogador 2.1 pp.217–219.
 * Form changes are declared by the player; this module does not spend actions or move tokens.
 */
export function zoanProfile(fruit={},movement={}){
 const zoan=fruit.category==='zoan',traits=new Set(zoan?fruit.traits??[]:[]),transformed=zoan&&['hybrid','animal'].includes(fruit.form);
 const speeds={...movement};
 if(transformed&&movement.automatic!==false){
  if(traits.has('deslocamento-animal'))speeds.distance=fruit.form==='animal'?18:Math.max(speeds.distance??0,15);
  if(traits.has('voo'))speeds.flying=fruit.form==='animal'?15:Math.max(speeds.flying??0,9);
  if(traits.has('escalador'))speeds.climbing=Math.max(speeds.climbing??0,speeds.distance??0);
  else if(traits.has('escalada-aracnidea'))speeds.climbing=Math.max(speeds.climbing??0,(speeds.distance??0)/2);
 }
 const senses=[];
 if(traits.has('visao-noturna'))senses.push('Visão noturna 18 m');
 if(transformed&&traits.has('percepcao-as-cegas'))senses.push('Percepção às cegas 6 m');
 if(transformed&&traits.has('eco-localizacao'))senses.push('Ecolocalização 9 m; não funciona enquanto Surdo');
 return {transformed,speeds,hpBonus:traits.has('criatura-robusta')?20:0,size:transformed&&fruit.form==='animal'&&traits.has('animal-grande')?'large':null,senses};
}
export function pointSlots(level){return [1,3,6,9,12].filter(minimum=>level>=minimum).length;}
export function fruitContext(system,context){
 if(context?.startsWith('haki:'))return system.haki?.active?.includes(context.slice(5));
 if(!context?.startsWith('zoan:'))return system.situations?.includes(context);
 if(system.fruit?.category!=='zoan')return false;
 if(context==='zoan:transformed')return ['animal','hybrid'].includes(system.fruit.form);
 if(context==='zoan:animal')return system.fruit.form==='animal';
 if(context==='zoan:hybrid')return system.fruit.form==='hybrid';
 if(context.startsWith('zoan:point:'))return system.fruit.form==='hybrid'&&system.fruit.point===context.slice(11);
 return false;
}
