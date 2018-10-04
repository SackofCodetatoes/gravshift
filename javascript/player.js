import GameEntity from "./game_entity.js"

const PLAYER_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '];

class Player extends GameEntity {
  constructor(options){
    super(options);
    this.moveSpd = 4;
    this.platformCollision = options.platformCollision;
    this.takeInput = this.takeInput.bind(this);
  }

  keyBind() {
    this.playerInput = {
      ArrowLeft: false,
      ArrowRight: false, 
      ArrowUp: false, 
      ArrowDown: false,
      ' ': false,
      canJump: true,
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

  takeInput(viewPort){
    if (this.playerInput.ArrowLeft) {     
        this.hspd = -this.moveSpd;
    }
    if (this.playerInput.ArrowRight) {
        this.hspd = this.moveSpd;
    }

    if(this.playerInput[' '] && this.playerInput.canJump){
      this.vspd = -5;
    }
  }

  update(viewPort){
    this.takeInput();
    console.log(this.vspd);

    if(!this.platformCollision(this.x + this.hspd, this.y, this)){
      this.x += this.hspd;
    } 
    else {
      let sign = 1;
      this.hspd < 0 ? sign = -1 : sign = sign; 
      while(!this.platformCollision(this.x + sign * 1, this.y, this)){
        this.x += sign;
      }
    }

    this.hspd = 0;

    if(!this.platformCollision(this.x, this.y + this.vspd, this)){
      this.y += this.vspd;
    } 
    else {
      this.vspd = 0;
      let sign = 1;
      this.vspd < 0 ? sign = -1 : sign = sign; 
      while(!this.platformCollision(this.x, this.y + sign, this)){
        debugger
        console.log('notgood')
        this.y += sign;
      }
      this.vspd = 0;
    }
    
    

    this.draw(viewPort);
  }


}


export default Player;