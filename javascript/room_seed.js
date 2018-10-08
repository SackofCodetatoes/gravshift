import Player from "./player.js";
import Camera from "./camera.js";
import GameEntity from "./game_entity.js";
import Platform from "./platform.js";

export const roomOne = function() {
  this.platform = new Platform({ x: 130, y: 300, xLen: 4400, yLen: 25, context: this.context })
  
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.platform2 = new Platform({ x: 400, y: 0, xLen: 25, yLen: 200, context: this.context })
  this.platforms.push(this.platform2);
  this.entities.push(this.platform2);

  this.platform3 = new Platform({ x: 500, y: 0, xLen: 4425, yLen: 25, context: this.context })
  this.platforms.push(this.platform3);
  this.entities.push(this.platform3);


  this.platform4 = new Platform({ x: 0, y: -400, xLen: 4425, yLen: 25, context: this.context })
  this.platforms.push(this.platform4);
  this.entities.push(this.platform4);

  // this.box = new GameEntity(Object.assign({}, playerConfig, {
  //   x: 255,
  //   y: 205
  // }));
  // this.entities.push(this.box);
  // this.physicsObjs.push(this.box);


}

