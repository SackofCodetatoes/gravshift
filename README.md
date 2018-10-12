# GravShift

[Live Demo](https://sackofcodetatoes.github.io/gravshift/)

<!-- ![GravShift Preview]() -->

Gravity Shift is a 2d puzzle platformer that focuses on changing gravity to traverse the levels. Gravity Shift was written in vanilla JavaScript and HTML5 Canvas to control the game's logic and rendering. Additionally, the core logic to creating and rendering entities were written to allow ease of use for future additions to the game. 

## Features
Players can: 
* Move along x and y axis to traverse rooms
* Change enviornment's gravity for additional plane of logic

## Engine 
The game Engine/Logic was created by creating a `game` object and a `display` object where the display runs a `requestAnimationFrame` loop on it's `render` function. Within the `render`, `display` calls the `game`'s update which is analgous to a `step` function which runs one tick of logic for the `game`. The core logic for the `game` object was to initialize the gamespace objects, such as the player, physical blocks, and walls, and provide the `display` object that gamespace to run. There, the `display` object runs the `render` loop which calls the `display`'s  `game` instance and runs `game.update()` which updates the objects created from `game` and makes appropriate updates. 

The main logic is controlled by the `game`. New `gameEntity`s are added to an array called `entities` which is scanned through on the `update` method to render and update each entity. Additional logic methods were written in the `game` instance as well, such as `applyGravity()` to apply gravity on objects in the `physicsObjs` array, `platformCollision` to check collisions on `platforms` array, and `physicalCollision` to check collisions against objects in the `physicsObjs` array.
```
  //game update method
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
## Entities 
Following the game logic, game entities are created from the `gameEntitiy` base class which takes in an `options` object containing the starting position, x and y, reference to `game` object for collision checks against platforms and other objects. Each game entitiy contains an `update` and `draw` method where the object's attributes are updated within a step and drawn from `game.update()`. Additionally, the `viewPort` object is passed as an argument for the purpose of rendering objects based on `viewPort`'s position. Given that objects drawn on canvas are drawn to the screen based on height and width of the screen, maintaining the object's position when the x or y is off screen, we need to draw relative to a specific point. In some cases we can have `viewPort` follow the player for a more dynamic camera system, but for Gravity Shift, the `viewPort` transitions when the player has moved off screen for a feel and better view for solving the room puzzles.
```
  draw(viewPort){
    //check if object has color, else default to light green
    this.context.fillStyle = this.defaultColor || '#A9F5A9';
    
    //draw object, can be replaced by drawing sprite
    this.context.fillRect(this.x - viewPort.x, this.y - viewPort.y, this.xLen, this.yLen);
  }
```

## Architexture and Technologies
The project uses the following technologies:
* Vanilla JavaScript for controls and logic
* HTML5 `canvas` to render game assets
* Webpack to bundle JavaScript files into single script file


## Future Features
- Add room hazards (lasers, checkpoints, redzone) for additional puzzles
- Create additional seed rooms to allow randomly generated 3x3 room puzzle
- Additional polish