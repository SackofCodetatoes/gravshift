import GameEntity from "./game_entity.js"

const PLAYER_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '];

class Player extends GameEntity {
  constructor(options){
    super(options);
    this.moveSpd = 4;

  }

  keyBind() {
    this.playerInput = {
      ArrowLeft: false,
      ArrowRight: false, 
      ArrowUp: false, 
      ArrowDown: false,
      ' ': false,
    };

    const canvas = document.getElementById('game-canvas');

    //key press
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if(PLAYER_KEYS.includes(event.key)){
        this.playerInput[event.key] = true;
      }
    });
    // key release
    document.addEventListener('keyup', (event) => {
      if (PLAYER_KEYS.includes(event.key)) {
        this.playerInput[event.key] = false;

      }
    });
  }// end of keybind

  draw(viewPort){
    this.context.fillStyle = 'blue';
    this.context.fillRect(this.x - viewPort.x, this.y - viewPort.y, 25, 25);
  }

  update(viewPort){
    // if(this.playerInput.ArrowDown){
    //   this.y += this.moveSpd;
    //   viewPort.y += this.moveSpd;
    // }
    // if(this.playerInput.ArrowUp){
    //   this.y -= this.moveSpd;
    //   viewPort.y -= this.moveSpd;
    // }
    // if(this.playerInput.ArrowLeft){
    //   this.x -= this.moveSpd;
    //   viewPort.x -= this.moveSpd;
    // }
    // if(this.playerInput.ArrowRight){
    //   this.x += this.moveSpd;
    //   viewPort.x += this.moveSpd;
    // }
      // console.log(viewPort);


    this.draw(viewPort);
  }


}


export default Player;