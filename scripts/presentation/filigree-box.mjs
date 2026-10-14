/** Double rectangular frame from the approved OP layout. Presentation only. */
export default class FiligreeBoxElement extends HTMLElement {
 static tagName='op-filigree-box';
 constructor(){
  super();
  const root=this.attachShadow({mode:'open'}),style=document.createElement('style');
  style.textContent=`:host{position:relative;display:block;isolation:isolate;min-height:56px}.backdrop{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,#28202d70,transparent 90px),var(--filigree-background-color,#18141f);border:1px solid var(--filigree-border-color,#ae8c45);box-shadow:inset 0 0 0 3px #342b35,inset 0 0 0 4px #97784260}.backdrop::after{content:'';position:absolute;inset:4px;border:1px solid #97784230;pointer-events:none}`;
  root.append(style);
  const backdrop=document.createElement('div');backdrop.className='backdrop';backdrop.setAttribute('aria-hidden','true');root.append(backdrop);
  root.append(document.createElement('slot'));
 }
}
