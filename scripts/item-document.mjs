/** Race and style definitions are selected from the official library, not authored. */
export class OPRPGItem extends foundry.documents.Item {
 static async createDialog(data={},createOptions={},dialogOptions={},renderOptions={}){
  if(['species','style'].includes(data.type)){ui.notifications.warn('Escolha raças e estilos no catálogo oficial.');return null;}
  const types=(dialogOptions.types??Object.keys(CONFIG.Item.dataModels)).filter(type=>!['species','style'].includes(type));
  return super.createDialog(data,createOptions,{...dialogOptions,types},renderOptions);
 }
}
