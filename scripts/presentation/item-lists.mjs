/** Native counterpart of the old inventory/filter components. Presentation state stays local. */
export function normalizedText(value){return String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');}
export function visibleItems(items,{search='',filter='all',sort='original'}={}){
 const words=normalizedText(search).trim().split(/\s+/).filter(Boolean);
 const result=items.filter(item=>words.every(word=>normalizedText(item.name).includes(word))&&(filter!=='favorites'||item.favorite)&&(filter!=='equipped'||item.equipped)&&(filter!=='homebrew'||item.homebrew));
 if(sort==='name')result.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR',{numeric:true,sensitivity:'base'}));
 if(sort==='quantity')result.sort((a,b)=>Number(b.quantity??0)-Number(a.quantity??0));
 return result;
}
export function bindItemLists(sheet){
 sheet._itemListController?.abort();sheet._itemListController=new AbortController();
 sheet._itemListState??=new Map();
 for(const group of sheet.element.querySelectorAll('[data-op-item-list]')){
  const key=group.dataset.opItemList;
  const state=sheet._itemListState.get(key)??{search:'',filter:'all',sort:'original',collapsed:false};
  sheet._itemListState.set(key,state);
  const rows=[...group.querySelectorAll('[data-op-item-row]')].map(element=>({element,name:element.dataset.itemName??'',favorite:element.dataset.favorite==='true',equipped:element.dataset.equipped==='true',homebrew:element.dataset.homebrew==='true',quantity:Number(element.dataset.quantity??0)}));
  const refresh=()=>{
   const filtered=visibleItems(rows,state),visible=new Set(filtered);
   for(const row of rows)row.element.hidden=!visible.has(row);
   const list=group.querySelector('ul');for(const row of filtered)list.append(row.element);
   const status=group.querySelector('[data-list-status]');if(status)status.textContent=`${filtered.length} / ${rows.length}`;
   const empty=group.querySelector('[data-list-no-results]');if(empty)empty.hidden=filtered.length!==0||rows.length===0;
   const content=group.querySelector('[data-list-content]');content.hidden=state.collapsed;
   const toggle=group.querySelector('[data-list-collapse]');toggle.setAttribute('aria-expanded',String(!state.collapsed));
  };
  for(const control of group.querySelectorAll('[data-op-list-control]')){
   control.disabled=false;control.value=state[control.dataset.opListControl];
   control.addEventListener(control.tagName==='INPUT'?'input':'change',()=>{state[control.dataset.opListControl]=control.value;refresh();},{signal:sheet._itemListController.signal});
  }
  group.querySelector('[data-list-collapse]').addEventListener('click',()=>{state.collapsed=!state.collapsed;refresh();},{signal:sheet._itemListController.signal});
  refresh();
 }
}
