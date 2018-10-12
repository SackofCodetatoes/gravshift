# GravShift

[Live Demo](https://sackofcodetatoes.github.io/gravshift/)

![GravShift Preview]()

Gravity Shift is a 2d puzzle platformer that focuses on changing gravity to traverse the levels. Gravity Shift was written in vanilla JavaScript and HTML5 Canvas to control the game's logic and rendering. Additionally, the core logic to creating and rendering entities were written to allow ease of use for future additions to the game. 

## Features
Players can: 
* Move along x and y axis to traverse rooms
* Change enviornment's gravity for additional plane of logic

## Engine 
The game Engine/Logic was created by creating a `game` object and a `display` object where the display runs a `requestAnimationFrame` loop on it's `render` function. Within the `render`, `display` calls the `game`'s update which is analgous to a `step` function which runs one tick of logic for the `game`. The core logic for the `game` object was to initialize the gamespace objects, such as the player, physical blocks, and walls, and provide the `display` object that gamespace to run. There, the `display` object runs the `render` loop which calls the `display`'s  `game` instance and runs `game.update()` which updates the objects created from `game` and makes appropriate updates. 

The main logic is controlled by the `game`. New `gameEntity`s are added to an array called `entities` which is scanned through on the `update` method to render and update each entity. Additional logic methods were written in the `game` instance as well, such as `applyGravity()` to apply gravity on objects in the `physicsObjs` array, `platformCollision` to check collisions on `platforms` array, and `physicalCollision` to check collisions against objects in the `physicsObjs` array.
```
update(viewPort){
  //each game step
  this.applyGravity();
  
  //additional game logic can go here for resetting game

  this.viewTransitionCheck.call(this, viewPort);
  for(let i = 0; i < this.entities.length; i++){
    this.entities[i].update(viewPort);
  }

}
```



## Future Features
- add hazzards
- add checkpoint system
- start screen where player can move
- start game button

- add entry platforms/tunnels
- add red zone in all rooms which resets 
- add a timer
