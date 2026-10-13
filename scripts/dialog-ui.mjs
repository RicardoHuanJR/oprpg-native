const classes=new WeakMap();
export const searchText=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
export function bindChoiceSearch(root){
  for(const picker of root.querySelectorAll('.op-picker')){
    const input=picker.querySelector('[data-op-search]'),status=picker.querySelector('[data-op-search-status]');
    if(!input||input.dataset.opBound)continue;
    input.dataset.opBound='true';
    const entries=[...picker.querySelectorAll('.op-pick-entry')];
    const filter=()=>{
      const words=searchText(input.value).trim().split(/\s+/).filter(Boolean);let visible=0;
      for(const entry of entries){entry.hidden=!words.every(word=>searchText(entry.textContent).includes(word));if(!entry.hidden)visible++;}
      status.textContent=`${visible} de ${entries.length} opções${visible?'':'. Nenhuma corresponde à busca.'}`;
    };
    input.addEventListener('input',filter);filter();
  }
}
function nativeDialog(){
  const Base=foundry.applications.api.DialogV2;
  if(typeof Base!=='function'||!Base.prototype._onSubmit)return Base;
  if(!classes.has(Base))classes.set(Base,class extends Base{
    async _onSubmit(target,event){
      if(this._opSubmitting){event.preventDefault();return this;}
      this._opSubmitting=true;
      const states=[...this.element.querySelectorAll('.form-footer button')].map(button=>[button,button.disabled]);
      try{return await super._onSubmit(target,event);}
      catch(error){
        let notice=this.element.querySelector('.op-form-error');
        if(!notice){notice=document.createElement('p');notice.className='op-form-error';notice.setAttribute('role','alert');notice.tabIndex=-1;this.element.querySelector('.dialog-content').prepend(notice);}
        notice.textContent=error.message||'Não foi possível confirmar. Confira os campos.';notice.focus();
        for(const [button,disabled]of states)button.disabled=disabled;
        return this;
      }finally{this._opSubmitting=false;}
    }
  });
  return classes.get(Base);
}
export async function nativePrompt({validate,render,ok={},buttons=[],...options}){
  const callback=ok.callback;
  const result=await nativeDialog().prompt({...options,buttons:[...buttons,{action:'opCancel',label:'Cancelar',type:'button',callback:()=> '__op_cancel__'}],render:(event,app)=>{bindChoiceSearch(app.element);render?.(event,app);},ok:{...ok,callback:async(...args)=>{const result=await callback?.(...args);await validate?.(result,args[2]);return result;}}});
  return result==='__op_cancel__'?null:result;
}
export async function navigationDialog(title,entries,content=''){
  const result=await nativeDialog().wait({classes:['oprpg-native','op-dialog','op-menu'],window:{title},position:{width:520},content,buttons:[...entries.map(entry=>({action:entry.id,label:entry.name,type:'button',callback:()=>entry.id})),{action:'opCancel',label:'Fechar',type:'button',default:true,callback:()=> '__op_cancel__'}]});
  return result==='__op_cancel__'?null:result;
}
