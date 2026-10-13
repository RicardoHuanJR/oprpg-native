export function automaticSuffocation(){
  return game.settings.get('oprpg-native','suffocationAutomation')===true;
}
export function automaticConcentration(){return game.settings.get('oprpg-native','concentrationAutomation')!==false;}
export function automaticRegeneration(){return game.settings.get('oprpg-native','regenerationAutomation')!==false;}
