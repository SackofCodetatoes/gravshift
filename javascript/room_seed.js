import Player from "./player.js";
import Camera from "./camera.js";
import GameEntity from "./game_entity.js";
import Platform from "./platform.js";


const top = function() {
    //top
  let platform = new Platform({ x: 0, y: 0, xLen: this.canvasWidth, yLen: 25, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);
  
}
const bottom = function() {
  //bottom
  let platform3 = new Platform({ x: 0, y: this.canvasHeight - 25, xLen: this.canvasWidth, yLen: 25, context: this.context })
  this.platforms.push(platform3);
  this.entities.push(platform3);
}

const left = function() {
  //left
  let platform2 = new Platform({ x: 0, y: 25, xLen: 25, yLen: this.canvasHeight, context: this.context })
  this.platforms.push(platform2);
  this.entities.push(platform2);
}

const right = function (){
  //right
  let platform4 = new Platform({ x: this.canvasWidth - 25, y: 0, xLen: 25, yLen: this.canvasHeight, context: this.context })
  this.platforms.push(platform4);
  this.entities.push(platform4);
}

const wall = function(side, offsetX, offsetY){
  let platform;
  switch(side){
    case 'top':
      platform = new Platform({ x: offsetX, y: offsetY - 25, xLen: this.canvasWidth, yLen: 50, context: this.context }) 
    break;

    case 'bottom':
      platform = new Platform({ x: offsetX, y: offsetY - 25, xLen: this.canvasWidth, yLen: 50, context: this.context })
    break;

    case 'left':
      platform = new Platform({ x: offsetX - 25, y: offsetY, xLen: 50, yLen: this.canvasHeight, context: this.context })
    break;

    case 'right':
      platform = new Platform({ x: offsetX - 25, y: offsetY, xLen: 50, yLen: this.canvasHeight, context: this.context })
    break;
  }
  this.platforms.push(platform);
  this.entities.push(platform);

}

export const roomOne = function() {
  //basic square
  wall.call(this, 'top', 0, 0);
  wall.call(this, 'bottom', 0, this.canvasHeight);
  wall.call(this, 'left', 0, 0);
  wall.call(this, 'right', this.canvasWidth, 100);

  this.platform = new Platform({ x: this.canvasWidth / 2 - 100, y: this.canvasHeight - 100, xLen: this.canvasWidth / 2 + 100, yLen: 75, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.platform = new Platform({ x: 0, y: this.canvasHeight - 175, xLen: this.canvasWidth / 2 , yLen: 25, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.platform = new Platform({ x: 100, y: this.canvasHeight - 250, xLen: this.canvasWidth / 2  - 200, yLen: 25, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.platform = new Platform({ x: 300, y: this.canvasHeight - 325, xLen: this.canvasWidth / 2  - 250, yLen: 25, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.platform = new Platform({ x: 450, y: this.canvasHeight - 400, xLen: this.canvasWidth / 2  - 250, yLen: 25, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.platform = new Platform({ x: 550, y: this.canvasHeight - 475, xLen: this.canvasWidth / 2  - 250, yLen: 25, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

}

export const roomTwo = function() {
  const boxConfig = {
    x: 50,
    y: 500,
    xLen: 25,
    yLen: 25,
    context: this.context,
    game: this,
    platformCollision: this.platformCollision,
    physicsObj: true,
    physicsCollision: this.physicsCollision,
  }
  wall.call(this, 'top', this.canvasWidth * 1, 0);
  wall.call(this, 'bottom', this.canvasWidth * 1, this.canvasHeight);
  wall.call(this, 'right', this.canvasWidth * 2, 100);


  this.platform = new Platform({ x: this.canvasWidth * 1 + 300, y: 0, xLen: 25, yLen: this.canvasHeight - 200, context: this.context })
  this.platforms.push(this.platform);
  this.entities.push(this.platform);

  this.box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth + 100, y: 30}));
  this.entities.push(this.box);
  this.physicsObjs.push(this.box);
  
  this.box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth + 400, y: 30}));
  this.entities.push(this.box);
  this.physicsObjs.push(this.box);


}

export const roomThree = function() {
  wall.call(this, 'top', this.canvasWidth * 2, 0);
  wall.call(this, 'bottom', this.canvasWidth * 2, this.canvasHeight);
  wall.call(this, 'right', this.canvasWidth * 3, 0);
  
}

