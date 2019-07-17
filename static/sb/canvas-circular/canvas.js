// Initial Setup
const body = document.querySelector('body');
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#36213E', '#554971', '#63768D', '#B8F3FF', '#8AC6D0'];

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
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
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.07;
  this.distanceFromCenter = randomIntFromRange(50, 180);
  this.lastMouse = { x, y };

  this.update = () => {
    const lastPoint = { x: this.x, y: this.y };
    // Move points over time
    this.radians += this.velocity;
    // Drag effect
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;
    // Circular motion
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
    this.draw(lastPoint);
  };

  this.draw = (lastPoint) => {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  };
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 150; i++) {
    const radius = Math.random() * 2 + 2;
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(54,33,62, 0.01)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
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
