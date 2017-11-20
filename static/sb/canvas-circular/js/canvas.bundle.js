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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Initial Setup
var body = document.querySelector('body');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// Variables
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

var colors = ['#36213E', '#554971', '#63768D', '#B8F3FF', '#8AC6D0'];

// Event Listeners
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Particles
function Particle(x, y, radius, color) {
  var _this = this;

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.07;
  this.distanceFromCenter = randomIntFromRange(50, 180);
  this.lastMouse = { x: x, y: y };

  this.update = function () {
    var lastPoint = { x: _this.x, y: _this.y };
    // Move points over time
    _this.radians += _this.velocity;
    // Drag effect
    _this.lastMouse.x += (mouse.x - _this.lastMouse.x) * 0.05;
    _this.lastMouse.y += (mouse.y - _this.lastMouse.y) * 0.05;
    // Circular motion
    _this.x = _this.lastMouse.x + Math.cos(_this.radians) * _this.distanceFromCenter;
    _this.y = _this.lastMouse.y + Math.sin(_this.radians) * _this.distanceFromCenter;
    _this.draw(lastPoint);
  };

  this.draw = function (lastPoint) {
    c.beginPath();
    c.strokeStyle = _this.color;
    c.lineWidth = _this.radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(_this.x, _this.y);
    c.stroke();
    c.closePath();
  };
}

// Implementation
var particles = void 0;
function init() {
  particles = [];

  for (var i = 0; i < 150; i++) {
    var radius = Math.random() * 2 + 2;
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(54,33,62, 0.01)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(function (particle) {
    particle.update();
  });
}

body.addEventListener('click', startSpinning);

function startSpinning() {
  canvas.style.backgroundColor = '#542A54';
  document.querySelector('h1').style.display = 'none';
  body.style.cursor = 'default';
  init();
  animate();
  body.removeEventListener('click', startSpinning);
}

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map