/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/camera.js":
/*!******************************!*\
  !*** ./javascript/camera.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_entity.js */ "./javascript/game_entity.js");


class Camera extends _game_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options){
    super(options);
  }


  draw(){
    this.context.beginPath();
    this.context.rect(0, 0, 1280, 720);
    this.context.stroke();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Camera);

/***/ }),

/***/ "./javascript/display.js":
/*!*******************************!*\
  !*** ./javascript/display.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./javascript/game.js");


class Display {
  constructor(){
    this.canvas = document.getElementById('game-canvas');
    this.context = this.canvas.getContext('2d');
    let gameConfig = {
      canvas: this.canvas,
      context: this.context,
    }

    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](gameConfig);
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

    this.context.drawImage(this.grid, 0, 300, 1584, 1020, -this.viewPort.x, -this.viewPort.y, 1584, 1020);

    this.game.update(this.viewPort);

    requestAnimationFrame(() => this.render());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./javascript/entry.js":
/*!*****************************!*\
  !*** ./javascript/entry.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./javascript/display.js");



const display = new _display_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const grid = new Image();
grid.src = "./images/grid.png";
display.grid = grid;
grid.onload = display.render;

/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./javascript/player.js");
/* harmony import */ var _camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.js */ "./javascript/camera.js");
/* harmony import */ var _game_entity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_entity.js */ "./javascript/game_entity.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform.js */ "./javascript/platform.js");





const PLAYER_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '];


class Game {
  constructor(options){
   //preload 
   this.canvas = options.canvas;
   this.context = options.context;
   this.platforms = [];
   this.entities = [];
   this.physicsObjs = [];
   this.staticObjs = [];

   this.gravDir = 1;

   this.viewTransition = {dir: 'none', target: 0};
  //  this.viewTransition = 'none';

   this.platformCollision = this.platformCollision.bind(this);
   this.physicsCollision = this.physicsCollision.bind(this);
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
      platformCollision: this.platformCollision,
      physicsObj: true,
      physicsCollision: this.physicsCollision,
    }


    //put all these in a seed file and use call/apply 
    this.platform = new _platform_js__WEBPACK_IMPORTED_MODULE_3__["default"]({x: 130, y: 300, xLen: 4400, yLen: 25, context: this.context})
    this.platforms.push(this.platform);
    this.entities.push(this.platform);

    this.platform2 = new _platform_js__WEBPACK_IMPORTED_MODULE_3__["default"]({x: 400, y: 0, xLen: 25, yLen: 200, context: this.context})
    this.platforms.push(this.platform2);
    this.entities.push(this.platform2);

    this.platform3 = new _platform_js__WEBPACK_IMPORTED_MODULE_3__["default"]({x: 205, y: 0, xLen: 4425, yLen: 25, context: this.context})
    this.platforms.push(this.platform3);
    this.entities.push(this.platform3);

    this.box = new _game_entity_js__WEBPACK_IMPORTED_MODULE_2__["default"](Object.assign({}, playerConfig, {x: 255, y: 205}));
    this.entities.push(this.box);
    this.physicsObjs.push(this.box);
    // this.platforms.push(this.box);


    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerConfig);
    this.camera = new _camera_js__WEBPACK_IMPORTED_MODULE_1__["default"](playerConfig);
    this.camera.x = 0;
    this.camera.y = 0;
    this.camera.center = {x: this.x + (1280 / 2), y: this.y + (720 / 2)}

    this.player.keyBind();

    this.entities.push(this.player);
    
    this.physicsObjs.push(this.player);
  }


  update(viewPort){
    //each game step
    this.applyGravity();

    

    if(this.player.x - viewPort.x > 1280 && this.viewTransition.dir === 'none'){
      // viewPort.x += 40;
      this.viewTransition.dir = 'right';
      this.viewTransition.target = viewPort.x + 1280
      // this.viewTransition.target = viewPort.x + 1280
    }

    if(this.viewTransition.dir != 'none' && viewPort.x < this.viewTransition.target){
      this.viewTransitionStep(this.viewTransition, viewPort);
      if(viewPort.x >= this.viewTransition.target){
        this.viewTransition.dir = 'none';
        this.viewTransition.target = 0;
      }
    }

    if(this.player.x - viewPort.x < 0 || this.player.y > 720 || this.player.y < 0){
      //restart
    }

    for(let i = 0; i < this.entities.length; i++){
      this.entities[i].update(viewPort);
    }

  }
  
  viewTransitionStep(viewTransition, viewPort){
    switch(viewTransition.dir){
      case 'right':
        viewPort.x += 40;
      break;

      case 'left': 

      break;

      case 'up':

      break;

      case 'down':

      break;
    }

  }


  physicsCollision(x, y, obj){
    //check collision with physics objs
    for (let i = 0; i < this.physicsObjs.length; i++) {
      // obj.positionMeeting(obj.x, obj.y, platforms[i]);
      if (
        (
          (x + obj.xLen > this.physicsObjs[i].x && x < this.physicsObjs[i].x + this.physicsObjs[i].xLen) &&
          (y + obj.yLen > this.physicsObjs[i].y && y < this.physicsObjs[i].y + this.physicsObjs[i].yLen) && 
          obj != this.physicsObjs[i]
        )
      ) {
        return true;
      }
    }
    return false;
  }

  platformCollision(x, y, obj){
  //check if new position overlaps with any platforms in platforms entitity
    for (let i = 0; i < this.platforms.length; i++) {
      // obj.positionMeeting(obj.x, obj.y, platforms[i]);
      if (
        (
          (x + obj.xLen > this.platforms[i].x && x < this.platforms[i].x + this.platforms[i].xLen) &&
          (y + obj.yLen > this.platforms[i].y && y < this.platforms[i].y + this.platforms[i].yLen)
          )
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

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./javascript/game_entity.js":
/*!***********************************!*\
  !*** ./javascript/game_entity.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameEntity {
  constructor(options){
    this.active = true;
    this.x = options.x;
    this.y = options.y;
    this.xLen = options.xLen;
    this.yLen = options.yLen;
    this.vspd = 0;
    this.hspd = 0;
    this.physicsObj = false || options.physicsObj;

    this.context = options.context;
    this.platformCollision = options.platformCollision;
    this.physicsCollision = options.physicsCollision;


    this.draw = this.draw.bind(this);
    this.stepCollisionCheck = this.stepCollisionCheck.bind(this);
  }

  draw(viewPort){
    //check if sprite, else draw green
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x - viewPort.x, this.y - viewPort.y, this.xLen, this.yLen);
  }

  update(viewPort){
    if(this.active){
      if(this.physicsObj){
        this.stepCollisionCheck();
      }
      this.draw(viewPort);
    }
  }

  stepCollisionCheck(){
    if (!this.platformCollision(this.x + this.hspd, this.y, this) && !this.physicsCollision(this.x + this.hspd, this.y, this)) {
      this.x += this.hspd;
    } else {
      let sign = 1;
      this.hspd < 0 ? sign = -1 : sign = sign;
      while (!this.platformCollision(this.x + sign, this.y, this) && !this.physicsCollision(this.x + sign, this.y, this)) {
        this.x += sign;
      }
    }

    this.hspd = 0;

    if (!this.platformCollision(this.x, this.y + this.vspd, this) && !this.physicsCollision(this.x, this.y + this.vspd, this)) {
      this.y += this.vspd;
    } else {
      let sign = 1;
      this.vspd < 0 ? sign = -1 : sign = sign;
      while (!this.platformCollision(this.x, this.y + sign, this) && !this.physicsCollision(this.x, this.y + sign, this)) {
        this.y += sign;
      }


      this.vspd = 0;
    }
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

/* harmony default export */ __webpack_exports__["default"] = (GameEntity);

/***/ }),

/***/ "./javascript/platform.js":
/*!********************************!*\
  !*** ./javascript/platform.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_entity.js */ "./javascript/game_entity.js");


class Platform extends _game_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options){
    super(options);
  }


}

/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ }),

/***/ "./javascript/player.js":
/*!******************************!*\
  !*** ./javascript/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_entity.js */ "./javascript/game_entity.js");


const PLAYER_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '];

class Player extends _game_entity_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options){
    super(options);
    this.moveSpd = 4;
    this.jumpSpd = 6;
    this.game = options.game;
    this.platformCollision = options.platformCollision;
    
    this.state = 'moving';


    this.takeInput = this.takeInput.bind(this);
  }

  keyBind() {
    this.playerInput = {
      ArrowLeft: false,
      ArrowRight: false, 
      ArrowUp: false, 
      ArrowDown: false,
      ' ': false,
      canJump: true,
      canInvert: true,
    };

    const canvas = document.getElementById('game-canvas');

    //key press
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if(PLAYER_KEYS.includes(event.key)){
        this.playerInput[event.key] = true;
      }
    });
    // key release
    document.addEventListener('keyup', (event) => {
      if (PLAYER_KEYS.includes(event.key)) {
        this.playerInput[event.key] = false;
      }
    });

  }// end of keybind

  draw(viewPort){
    this.context.fillStyle = 'blue';
    this.context.fillRect(this.x - viewPort.x, this.y - viewPort.y, 25, 25);
  }

  takeInput(viewPort){
    if (this.playerInput.ArrowLeft) {     
        this.hspd = -this.moveSpd;
    }
    if (this.playerInput.ArrowRight) {
        this.hspd = this.moveSpd;
    }

    if(this.playerInput[' '] && this.playerInput.canJump){
      this.vspd = this.jumpSpd * -this.game.gravDir;
      this.playerInput.canJump = false;
    }
    if(this.playerInput.ArrowUp && this.playerInput.canInvert) {
      this.game.gravDir = this.game.gravDir * -1;
      this.playerInput.canInvert = false;
    }
  }

  update(viewPort){
    this.takeInput();

    this.stepCollisionCheck();
    
    //reset jump limit
    if (this.platformCollision(this.x, this.y + (1 * this.game.gravDir), this) || this.physicsCollision(this.x, this.y + (1 * this.game.gravDir), this)) {
      this.playerInput.canJump = true;
      this.playerInput.canInvert = true;
    }
    

    this.draw(viewPort);
  }


}


/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map