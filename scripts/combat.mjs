export class OPRPGCombat extends foundry.documents.Combat {
  async nextTurn() {
    if(!game.user.isGM||!this.started||!this.combatant?.actor)return super.nextTurn();
    const current=this.combatant;
    if(!this.turns.some(turn=>turn.id!==current.id&&(turn.actor?.system.legendaryActions?.max??0)>0))return super.nextTurn();
    await this.setFlag("oprpg-native","endTurnWindow",{round:this.round,turn:this.turn,actorUUID:current.actor.uuid});
    const advance=await foundry.applications.api.DialogV2.confirm({window:{title:"Fim do turno"},content:"<p>A janela de ações lendárias está aberta. Use as fichas dos NPCs que podem agir e confirme para avançar.</p>",modal:false,yes:{label:"Avançar turno"},no:{label:"Continuar no turno"}});
    await this.unsetFlag("oprpg-native","endTurnWindow");
    if(advance)return super.nextTurn();
    return this;
  }
}
