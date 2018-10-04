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

   this.gravDir = 1;

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
      game: this,
    }

    // this.keyBind()
    
    this.platform = new Platform({x: 130, y: 300, xLen: 300, yLen: 25, context: this.context})
    this.platforms.push(this.platform);
    this.entities.push(this.platform);

    this.platform2 = new Platform({x: 400, y: 0, xLen: 25, yLen: 200, context: this.context})
    this.platforms.push(this.platform2);
    this.entities.push(this.platform2);

    this.platform3 = new Platform({x: 205, y: 0, xLen: 225, yLen: 25, context: this.context})
    this.platforms.push(this.platform3);
    this.entities.push(this.platform3);

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
    
    this.applyGravity();
    
    this.camera.x = this.player.x - (1280 / 2);
    this.camera.y = this.player.y - (720 / 2);

    for(let i = 0; i < this.entities.length; i++){
      this.entities[i].update(viewPort);
    }

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


  applyGravity(){
    //iterate over list of entities and apply gravity
    for(let i = 0; i < this.physicsObjs.length; i++){
      let curObj = this.physicsObjs[i];
      
      //normal gravity
      if(this.gravDir > 0){
        if(curObj.vspd < 6 && !this.platformCollision(curObj.x, curObj.y + curObj.vspd, curObj)){
          curObj.vspd += 0.2;
        }
      }
      else {
        if(curObj.vspd > -6 && !this.platformCollision(curObj.x, curObj.y + curObj.vspd, curObj)) {
          curObj.vspd -= 0.2;
        }
      }
    }
  }

}

export default Game;