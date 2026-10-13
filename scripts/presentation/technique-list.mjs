import {ACTIVATIONS} from '../rules.mjs';
import {visibleItems} from './item-lists.mjs';

export function hasFruit(system,items=[]){return Boolean(system.fruit?.category&&system.fruit.category!=='none'||system.fruit?.name?.trim()||items.some(item=>item.type==='fruit'));}
export function techniqueRollPreview(system,type,{activity,resolution},extraBonus=0){
 if(resolution?.kind==='save')return `CD ${resolution.saveDC??(type==='npc'?system.saveDifficulty:8+(system.attributes?.[activity?.attribute]?.modifier??0)+(system.proficiency?.bonus??0))}`;
 if(resolution?.kind==='healing')return '✚';
 if(resolution?.kind!=='attack')return '—';
 const base=resolution.attackBonus??((resolution.addAttributeToAttack?system.attributes?.[activity?.attribute]?.modifier??0:0)+(activity?.proficient?system.proficiency?.bonus??0:0));
 const total=base+extraBonus-2*(system.exhaustion??0);return `${total>=0?'+':''}${total}`;
}
export function techniqueSections(items,preview){
 const groups=new Map();
 for(const item of items){
  if(!['technique','auxiliary'].includes(item.type))continue;
  const key=item.type==='auxiliary'?'auxiliary':`grade-${item.system.grade??1}`;
  if(!groups.has(key))groups.set(key,{key,grade:item.type==='auxiliary'?0:item.system.grade??1,label:item.type==='auxiliary'?'Auxiliares':`Grau ${item.system.grade??1}`,items:[]});
  const {activity=item.system.activity,resolution=item.system.resolution,roll='—',rollTitle=''}=preview?.(item)??{};
  groups.get(key).items.push({id:item.id,name:item.name,img:item.img,time:activity?.activation==='reaction'?'R':ACTIVATIONS[activity?.activation]??'—',range:activity?.range||'—',target:activity?.targetLabel||'—',roll,rollTitle,canUse:Boolean(activity)&&activity.activation!=='passive',favorite:Boolean(item.favorite),descriptionTitle:[activity?.requirements,resolution?.kind==='save'?'Salvaguarda':null].filter(Boolean).join(' · ')});
 }
 return [...groups.values()].sort((a,b)=>a.grade-b.grade);
}
export function bindTechniqueList(sheet){
 const root=sheet.element.querySelector('[data-technique-list]');if(!root)return;
 sheet._techniqueController?.abort();sheet._techniqueController=new AbortController();
 const signal=sheet._techniqueController.signal;
 const ContextMenu=globalThis.foundry?.applications?.ux?.ContextMenu;
 if(ContextMenu){
  void sheet._techniqueContextMenu?.close();
  const run=callback=>async(event,target)=>{try{await callback(event,target);}catch(error){ui.notifications.error(error.message);}};
  sheet._techniqueContextMenu=new ContextMenu(root,'[data-technique-menu]',[
   {label:'Alternar favorito',icon:'fa-solid fa-star',visible:()=>sheet.actor.isOwner,onClick:run(async(_event,target)=>{const id=target.dataset.itemId,favorites=sheet.actor.system.favorites??[];await sheet.actor.update({'system.favorites':favorites.includes(id)?favorites.filter(value=>value!==id):[...favorites,id]});})},
   {label:'Abrir técnica',icon:'fa-solid fa-up-right-from-square',onClick:run((_event,target)=>sheet.actor.items.get(target.dataset.itemId)?.sheet.render({force:true}))},
   {label:'Remover técnica',icon:'fa-solid fa-trash',visible:target=>sheet.actor.isOwner&&sheet.editMode!==false&&!sheet.actor.items.get(target.dataset.itemId)?.getFlag('oprpg-native','grantReceipt'),onClick:run((event,target)=>sheet.options.actions.deleteItem.call(sheet,event,target))}
  ],{eventName:'click',jQuery:false,fixed:true,relative:'target'});
 }
 const state=sheet._techniqueState??={search:'',filter:'all',sort:'original'};
 const input=root.querySelector('[data-technique-search]'),filter=root.querySelector('[data-technique-filter]');
 const sections=[...root.querySelectorAll('[data-technique-section]')].map(element=>({element,list:element.querySelector('ul'),rows:[...element.querySelectorAll('[data-technique-row]')].map(element=>({element,name:element.dataset.itemName,favorite:element.dataset.favorite==='true'}))}));
 const refresh=()=>{
  let count=0;
  for(const section of sections){const rows=visibleItems(section.rows,state),visible=new Set(rows);for(const row of section.rows)row.element.hidden=!visible.has(row);for(const row of rows)section.list.append(row.element);section.element.hidden=!rows.length;count+=rows.length;}
  root.querySelector('[data-technique-empty]').hidden=count!==0;
  const sort=root.querySelector('[data-technique-sort]');sort.setAttribute('aria-pressed',String(state.sort==='name'));sort.title=state.sort==='name'?'Ordenação por nome; voltar à ordem da ficha':'Ordenar por nome';
 };
 input.disabled=false;input.value=state.search;input.addEventListener('input',()=>{state.search=input.value;refresh();},{signal});
 filter.disabled=false;filter.value=state.filter;filter.hidden=state.filter==='all';filter.addEventListener('change',()=>{state.filter=filter.value;refresh();},{signal});
 root.querySelector('[data-technique-clear]').addEventListener('click',()=>{state.search='';input.value='';input.focus();refresh();},{signal});
 root.querySelector('[data-technique-filters]').addEventListener('click',()=>{filter.hidden=!filter.hidden;if(!filter.hidden)filter.focus();},{signal});
 root.querySelector('[data-technique-sort]').addEventListener('click',()=>{state.sort=state.sort==='name'?'original':'name';refresh();},{signal});
 refresh();
}
