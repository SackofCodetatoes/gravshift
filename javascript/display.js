import Game from "./game.js";

class Display {
  constructor(){
    this.canvas = document.getElementById('game-canvas');
    this.context = this.canvas.getContext('2d');
    let gameConfig = {
      canvas: this.canvas,
      context: this.context,
    }

    this.game = new Game(gameConfig);
    this.game.initialize();

    this.viewPort = {
      x: 0,
      y: 0,
    }

    this.render = this.render.bind(this);
  }

  render(){
    //create request animation loop
    this.context.clearRect(0, 0, 1280, 720);
    // debugger
    this.context.drawImage(this.grid, 0, 0, 1920, 1920, -this.viewPort.x, -1280 - this.viewPort.y, 1920, 1920);
    // this.context.drawImage(this.grid, 0, 0, 1920, 1920, -this.viewPort.x, -this.viewPort.y, 1920, 1920);

    this.game.update(this.viewPort);
    this.context.font = "30px Arial";
    this.context.fillStyle = 'white'
    this.context.fillText("Congradulations, You did it!", 1280 + 140  - this.viewPort.x, -1280 + 200 - this.viewPort.y)


    requestAnimationFrame(() => this.render());
  }

}

export default Display;