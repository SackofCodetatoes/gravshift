import Display from "./display.js"


const display = new Display();
const grid = new Image();
// grid.src = "./images/grid.png";
grid.src = "./images/space.jpg";
display.grid = grid;
grid.onload = display.render;