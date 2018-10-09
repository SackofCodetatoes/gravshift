import GameEntitiy from "./game_entity.js";

class Platform extends GameEntitiy {
  constructor(options){
    super(options);
    this.defaultColor = 'gray'
  }


}

export default Platform;