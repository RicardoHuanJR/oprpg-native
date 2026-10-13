import {identifier} from './advancement.mjs';
export function speciesFamilies(content){
 const groups=new Map();
 for(const item of content){
  const name=item.family?.trim()||item.name.split(/\s+[—–]\s+/)[0];
  if(!groups.has(name))groups.set(name,{id:name,name,bases:[],variants:[]});
  const group=groups.get(name);
  group[identifier(item.name)===identifier(name)?'bases':'variants'].push(item);
 }
 return [...groups.values()];
}
export function levelOptions(system,content,{multiStyle=false}={}){
 const owned=system.progression.styles??[];
 const seen=new Set();
 return content.flatMap(item=>{
  const key=item.identifier||identifier(item.name);if(seen.has(key))return [];seen.add(key);
  const existing=owned.find(style=>style.uuid===item.uuid||style.identifier&&style.identifier===key);
  if(owned.length&&!existing&&!multiStyle)return [];
  return [{...item,existing:Boolean(existing),levels:existing?.levels??0,label:existing?`${item.name} · nível ${existing.levels} → ${existing.levels+1}`:owned.length?`${item.name} · novo estilo (Multiestilo)`:`${item.name} · primeiro nível`}];
 });
}
