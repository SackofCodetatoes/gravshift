import Player from "./player.js";
import Camera from "./camera.js";
import GameEntity from "./game_entity.js";
import Platform from "./platform.js"

const PLAYER_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '];


class Game {
  constructor(options){
   //preload 
   this.canvas = options.canvas;
   this.context = options.context;
   this.platforms = [];
   this.entities = [];
   this.physicsObjs = [];

   this.keyBind = this.keyBind.bind(this);
   this.getInput = this.getInput.bind(this);
   this.platformCollision = this.platformCollision.bind(this);
  }


  initialize(){
    //game init
    let playerConfig = {
      x: 205,
      y: 205,
      xLen: 25,
      yLen: 25,
      context: this.context,
    }

    // this.keyBind()
    
    this.platform = new Platform({x: 130, y: 300, xLen: 300, yLen: 25, context: this.context})
    this.platforms.push(this.platform);
    this.entities.push(this.platform);

    this.platform2 = new Platform({x: 300, y: 0, xLen: 25, yLen: 200, context: this.context})
    this.platforms.push(this.platform2);
    this.entities.push(this.platform2);

    this.player = new Player(playerConfig);
    this.camera = new Camera(playerConfig);
    this.camera.x = 0;
    this.camera.y = 0;
    this.camera.center = {x: this.x + (1280 / 2), y: this.y + (720 / 2)}

    this.player.platformCollision = this.platformCollision;
    this.player.keyBind();

    this.entities.push(this.player);
    
    this.physicsObjs.push(this.player);
  }


  update(viewPort){
    //each game step
    viewPort.x = this.player.x - (1280 / 2);
    viewPort.y = this.player.y - (720 / 2);
    // this.player.update(viewPort);
    
    this.applyGravity();
    // this.getInput(viewPort);
    
    this.camera.x = this.player.x - (1280 / 2);
    this.camera.y = this.player.y - (720 / 2);


    for(let i = 0; i < this.entities.length; i++){
      this.entities[i].update(viewPort);
    }

    // this.platform.update(viewPort);
    // this.camera.update(viewPort);


  }



  getInput(viewPort){
    // if (this.playerInput.ArrowDown) {
    //   if(!this.platformCollision(this.player.x, this.player.y + this.player.moveSpd, this.player)){
    //     this.player.y += this.player.moveSpd;
    //     viewPort.y += this.player.moveSpd;
    //   }
    //   else {
    //     while(!this.platformCollision(this.player.x, this.player.y + 1, this.player)){
    //       console.log('trigger')
    //       this.player.y += 1;
    //       viewPort.y += 1;
    //     }
    //   }
    // }
    // if (this.playerInput.ArrowUp) {
    //   if (!this.platformCollision(this.player.x, this.player.y - this.player.moveSpd, this.player)) {
    //     this.player.y -= this.player.moveSpd;
    //     viewPort.y -= this.player.moveSpd;
    //   } else {
    //     while (!this.platformCollision(this.player.x, this.player.y - 1, this.player)) {
    //       this.player.y -= 1;
    //       viewPort.y -= 1;
    //     }
    //   }
    // }
    // if (this.playerInput.ArrowLeft) {
    //   if (!this.platformCollision(this.player.x - this.player.moveSpd, this.player.y, this.player)) {
    //     this.player.x -= this.player.moveSpd;
    //     viewPort.x -= this.player.moveSpd;
    //   } else {
    //     while (!this.platformCollision(this.player.x - 1, this.player.y, this.player)) {
    //       this.player.x -= 1;
    //       viewPort.x -= 1;
    //     }
    //   }
    // }
    // if (this.playerInput.ArrowRight) {
    //   if (!this.platformCollision(this.player.x + this.player.moveSpd, this.player.y, this.player)) {
    //     this.player.x += this.player.moveSpd;
    //     viewPort.x += this.player.moveSpd;
    //   }
    //   else {
    //     while (!this.platformCollision(this.player.x + 1, this.player.y, this.player)) {
    //       this.player.x += 1;
    //       viewPort.x += 1;
    //     }
    //   }
    // }

    // if(this.playerInput[' '] && this.playerInput.canJump){
    //   this.player.y -= 10;
    // }

  }



  platformCollision(x, y, obj){
  //check if new position overlaps with any platforms in platforms entitity
    for (let i = 0; i < this.platforms.length; i++) {
      // obj.positionMeeting(obj.x, obj.y, platforms[i]);
      if (
        (
          (x + obj.xLen > this.platforms[i].x && x < this.platforms[i].x + this.platforms[i].xLen) &&
          (y + obj.yLen > this.platforms[i].y && y < this.platforms[i].y + this.platforms[i].yLen))
      ) {
        return true;
      }
    }
    return false;
  }

  keyBind(){
    this.playerInput = {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false,
      ' ': false,
      canJump: true,
    };

    //key press
    document.addEventListener('keydown', (event) => {
      // const keyName = event.key;
      if (PLAYER_KEYS.includes(event.key)) {
        this.playerInput[event.key] = true;
        // if(event.key === ' '){
        //   this.playerInput.canJump = false;
        // }
      }
    });
    // key release
    document.addEventListener('keyup', (event) => {
      if (PLAYER_KEYS.includes(event.key)) {
        this.playerInput[event.key] = false;
      }
    });
  }

  applyGravity(){
    //iterate over list of entities and apply gravity
    for(let i = 0; i < this.physicsObjs.length; i++){
      let curObj = this.physicsObjs[i];
      if(curObj.vspd < 6 && !this.platformCollision(curObj.x, curObj.y + curObj.vspd, curObj)){
        curObj.vspd += 0.2;
      }
    }
  }

}

export default Game;