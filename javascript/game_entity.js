class GameEntity {
  constructor(options){
    this.x = options.x;
    this.y = options.y;
    this.xLen = options.xLen;
    this.yLen = options.yLen;
    // this.canvas = options.canvas;
    this.context = options.context;

    this.draw = this.draw.bind(this);
  }

  draw(viewPort){
    //check if sprite, else draw green
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x - viewPort.x, this.y - viewPort.y, this.xLen, this.yLen);
  }

  update(viewPort){
    this.draw(viewPort);
  }

  positionMeeting(x, y, obj){
    if ((x + this.xLen > obj.x && x < obj.x + obj.xLen) &&
      (y + this.yLen > obj.y && y < obj.y + obj.yLen)
    ) {
      return true;
    } // end of if
    return false;
  }
}

export default GameEntity;