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
    this.player = new Player(playerConfig);
    this.camera = new Camera(playerConfig);
    this.camera.x = 0;
    this.camera.y = 0;
    this.camera.center = {x: this.x + (1280 / 2), y: this.y + (720 / 2)}
    // this.player.keyBind();

    this.test = new GameEntity(playerConfig);
    this.platform = new Platform({x: 130, y: 300, xLen: 300, yLen: 25, context: this.context})
    this.platforms.push(this.platform);
  }


  update(viewPort){
    //each game step
    viewPort.x = this.player.x - (1280 / 2);
    viewPort.y = this.player.y - (720 / 2);
    this.player.update(viewPort);


    this.camera.x = this.player.x - (1280 / 2);
    this.camera.y = this.player.y - (720 / 2);
    this.platform.update(viewPort);
    this.test.update(viewPort);
    this.camera.update(viewPort);
  }

  platformCollision(x, y, obj){
  //check if new position overlaps with any platforms in platforms entitity
    for (let i = 0; i < this.platforms.length; i++) {
      // obj.positionMeeting(obj.x, obj.y, platforms[i]);
      if (
        (
          (obj.x + obj.xLen > this.platforms[i].x && obj.x < this.platforms[i].x + this.platforms[i].xLen) &&
          (obj.y + obj.yLen > this.platforms[i].y && obj.y < this.platforms[i].y + this.platforms[i].yLen))
      ) {
        console.log('ow')
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
    };

    //key press
    document.addEventListener('keydown', (event) => {
      // const keyName = event.key;
      if (PLAYER_KEYS.includes(event.key)) {
        this.playerInput[event.key] = true;
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
  }

}

export default Game;