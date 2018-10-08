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

const platformAdder = function(platform){
  this.platforms.push(platform);
  this.entities.push(platform);
}
const boxAdder = function(box){
  this.physicsObjs.push(box);
  this.entities.push(box);
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
  const boxConfig = { x: 50, y: 500, xLen: 100, yLen: 150, context: this.context, game: this, platformCollision: this.platformCollision, physicsObj: true, physicsCollision: this.physicsCollision,}

  // wall.call(this, 'top', this.canvasWidth * 2, 0);
  let platform = new Platform({ x: this.canvasWidth * 2, y: 0 - 25, xLen: this.canvasWidth - 100, yLen: 50, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);

  wall.call(this, 'bottom', this.canvasWidth * 2, this.canvasHeight);
  wall.call(this, 'right', this.canvasWidth * 3, 0);

  platform = new Platform({ x: this.canvasWidth * 2 + 300, y: 0, xLen: 25, yLen: this.canvasHeight / 2, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);

  
  platform = new Platform({ x: this.canvasWidth * 2  + 150, y: this.canvasHeight / 2, xLen: 360, yLen: 25, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);
  
  platform = new Platform({ x: this.canvasWidth * 2  + 300, y: this.canvasHeight / 2 + 175, xLen: 25, yLen: 125, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);

  this.box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 + 325, y: 400}));
  this.entities.push(this.box);
  this.physicsObjs.push(this.box);

  platform = new Platform({ x: this.canvasWidth * 3 - 200, y: this.canvasHeight / 2 - 200, xLen: 200, yLen: 25, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);
}

export const roomFour = function(){
  const boxConfig = { x: 50, y: 500, xLen: 25, yLen: 75, context: this.context, game: this, platformCollision: this.platformCollision, physicsObj: true, physicsCollision: this.physicsCollision, }

  // wall.call(this, 'left', this.canvasWidth * 2, 0 - this.canvasHeight)
  wall.call(this, 'right', this.canvasWidth * 3, 0 - this.canvasHeight)
  wall.call(this, 'top', this.canvasWidth * 2, 0 - this.canvasHeight)
  

  let platform = new Platform({ x: this.canvasWidth * 2 + 420, y: 0 - 200, xLen: 200, yLen: 25, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);

  platform = new Platform({ x: this.canvasWidth * 2 + 420, y: 0 - 550, xLen: 200, yLen: 25, context: this.context })
  platformAdder.call(this, platform);
  platform = new Platform({ x: this.canvasWidth * 2 + 420, y: 0 - 175, xLen: 25, yLen: 25, context: this.context })
  platformAdder.call(this, platform);
  let box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 + 420, y: 0 - 150}))
  boxAdder.call(this, box);

  box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 + 25, y: 0 - this.canvasHeight + 25, xLen: 100, yLen: 75 * 4}))
  boxAdder.call(this, box)
  
  box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 + 125, y: 0 - this.canvasHeight + 25, xLen: 100, yLen: 75 * 3}))
  boxAdder.call(this, box)

  box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 + 225, y: 0 - this.canvasHeight + 25, xLen: 100, yLen: 75 * 2}))
  boxAdder.call(this, box)
  
  // box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 + 25, y: 0 - this.canvasHeight + 25, xLen: 75, yLen: 75 * 4}))
  // boxAdder.call(this, box)
  
  platform = new Platform({ x: this.canvasWidth * 2 - 25, y: 0 - this.canvasHeight * 1, xLen: 50, yLen: 325, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth * 2 - 25, y: 0 - this.canvasHeight * 1 + 425, xLen: 50, yLen: 215, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth * 2, y: 0 - 75, xLen: 350, yLen: 75, context: this.context })
  this.platforms.push(platform);
  this.entities.push(platform);
}

export const roomFive = function(){
  wall.call(this, 'top', this.canvasWidth * 1, 0 - this.canvasHeight);
  let platform = new Platform({ x: this.canvasWidth * 1 - 25, y: 0 - this.canvasHeight * 1, xLen: 50, yLen: 75, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth * 1 - 25, y: 0 - this.canvasHeight * 1 + 175, xLen: 50, yLen: 465, context: this.context })
  platformAdder.call(this, platform);
  


  platform = new Platform({ x: this.canvasWidth * 1 + 540, y: 0 - this.canvasHeight * 1 + 300, xLen: 100, yLen: 25, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth * 1 + 250, y: 0 - this.canvasHeight * 1 + 300, xLen: 150, yLen: 25, context: this.context })
  platformAdder.call(this, platform);

  // platform = new Platform({ x: this.canvasWidth * 1 + 250, y: 0 - this.canvasHeight * 1 + 300, xLen: 150, yLen: 25, context: this.context })
  // platformAdder.call(this, platform);
}

export const roomSix = function(){
  const boxConfig = { x: 50, y: 500, xLen: 75, yLen: 100, context: this.context, game: this, platformCollision: this.platformCollision, physicsObj: true, physicsCollision: this.physicsCollision, }

  wall.call(this, 'left', this.canvasWidth * 0, 0 - this.canvasHeight);

  let platform = new Platform({ x: this.canvasWidth * 0, y: 0 - this.canvasHeight * 1 - 25, xLen: 100, yLen: 50, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth * 0 + 240, y: 0 - this.canvasHeight * 1 - 25, xLen: 400, yLen: 50, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth / 2, y: 0 - this.canvasHeight * 1, xLen: 25, yLen: 400, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth / 2 + 140, y: 0 - this.canvasHeight * 1 + 200, xLen: 200, yLen: 25, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: this.canvasWidth / 2, y: 0 - this.canvasHeight * 1 + 375, xLen: 200, yLen: 25, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: 100, y: 0 - this.canvasHeight * 1 + 375, xLen: 100, yLen: 25, context: this.context } )
  platformAdder.call(this, platform);

}

export const roomSeven = function(){
  const boxConfig = { x: 50, y: 500, xLen: 50, yLen: 100, context: this.context, game: this, platformCollision: this.platformCollision, physicsObj: true, physicsCollision: this.physicsCollision, }

  wall.call(this, 'top', 0, 0 - this.canvasHeight * 2)
  wall.call(this, 'left', 0, 0 - this.canvasHeight * 2)

  let platform = new Platform({ x: 100, y: 0 - this.canvasHeight * 2 + 500, xLen: 140, yLen: 25, context: this.context })
  platformAdder.call(this, platform);
  platform = new Platform({ x: 300, y: 0 - this.canvasHeight * 2 + 250, xLen: 140, yLen: 25, context: this.context })
  platformAdder.call(this, platform);

  platform = new Platform({ x: 400, y: 0 - this.canvasHeight * 2 + 450, xLen: 140, yLen: 25, context: this.context })
  platformAdder.call(this, platform);

  let box = new GameEntity(Object.assign({}, boxConfig, {x: 380, y: 0 - this.canvasHeight * 2 + 300}))
  boxAdder.call(this, box);

  platform = new Platform({ x: this.canvasWidth - 25, y: 0 - this.canvasHeight * 2, xLen: 50, yLen: 100, context: this.context })
  platformAdder.call(this, platform);
  platform = new Platform({ x: this.canvasWidth - 25, y: 0 - this.canvasHeight * 2 + 200, xLen: 50, yLen: 440, context: this.context })
  platformAdder.call(this, platform);

}
export const roomEight = function(){
  wall.call(this, 'top', this.canvasWidth, 0 - this.canvasHeight * 2)
  let platform = new Platform({ x: this.canvasWidth * 2 - 25, y: 0 - this.canvasHeight * 2 + 200, xLen: 50, yLen: 440, context: this.context })
  platformAdder.call(this, platform);
  platform = new Platform({ x: this.canvasWidth * 2 - 25, y: 0 - this.canvasHeight * 2 , xLen: 50, yLen: 100, context: this.context })
  platformAdder.call(this, platform)

  platform = new Platform({ x: this.canvasWidth * 2 - 250, y: 0 - this.canvasHeight * 2 , xLen: 25, yLen: 450, context: this.context })
  platformAdder.call(this, platform)

  platform = new Platform({ x: this.canvasWidth * 2 - 550, y: 0 - this.canvasHeight * 2 + 200, xLen: 75, yLen: 25, context: this.context })
  platformAdder.call(this, platform)
  platform = new Platform({ x: this.canvasWidth * 2 - 350, y: 0 - this.canvasHeight * 2 + 300, xLen: 75, yLen: 25, context: this.context })
  platformAdder.call(this, platform)
  platform = new Platform({ x: this.canvasWidth * 2 - 500, y: 0 - this.canvasHeight * 2 + 400, xLen: 75, yLen: 25, context: this.context })
  platformAdder.call(this, platform)
  const boxConfig = { x: 50, y: 500, xLen: 25, yLen: 75, context: this.context, game: this, platformCollision: this.platformCollision, physicsObj: true, physicsCollision: this.physicsCollision, }

  let box = new GameEntity(Object.assign({}, boxConfig, {x: this.canvasWidth * 2 - 125, y: 0 - this.canvasHeight * 2 + 100 }))
  boxAdder.call(this, box);
}
export const roomNine = function(){
  wall.call(this, 'top', this.canvasWidth * 2, 0 - this.canvasHeight * 2)
  wall.call(this, 'right', this.canvasHeight * 3, 0 - this.canvasHeight * 2)

}

