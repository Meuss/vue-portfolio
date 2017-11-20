const tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

const fireworks = (function () {
  const getFontSize = function () {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  };

  // setup initial varibles
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const numberOfParticules = 94;
  const numberOfCirles = 5;
  const numberOfLines = 10;
  const distance = 300;
  const length = 30;
  let x = 0;
  let y = 0;
  const animations = [];
  const setCanvasSize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  const updateCoords = function (e) {
    x = e.clientX || e.touches[0].clientX;
    y = e.clientY || e.touches[0].clientY;
  };
  const colors = ['#FFAE03', '#E67F0D', '#FE4E00', '#E9190F', '#06AED5'];

  // Circles
  const createCircle = function (x, y) {
    const p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = 0;
    p.alpha = 1;
    p.lineWidth = 6;
    p.draw = function () {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.lineWidth = p.lineWidth;
      ctx.strokeStyle = p.color;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };
    return p;
  };
  
  const createCircles = function (x, y) {
    const circles = [];
    for (var i = 0; i < numberOfCirles; i++) {
      const p = createCircle(x, y);
      circles.push(p);
    }
    return circles;
  };

  // Particles
  const createParticule = function (x, y) {
    const p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(getFontSize(), getFontSize() * 2);
    p.draw = function () {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  };
  
  const createParticles = function (x, y) {
    const particules = [];
    for (var i = 0; i < numberOfParticules; i++) {
      const p = createParticule(x, y);
      particules.push(p);
    }
    return particules;
  };
  
  // Lines
  const createLine = function (x, y) {
    const p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    // p.length = anime.random(getFontSize(), getFontSize() * 2);
    p.draw = function () {
      newX = x+anime.random(-length, length);
      newY = y+anime.random(-length, length);
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(newX,newY);
      ctx.strokeStyle = p.color;
      ctx.stroke();
    };
    return p;
  };

  const createLines = function (x, y) {
    const lines = [];
    for (var i = 0; i < numberOfLines; i++) {
      const p = createLine(x, y);
      lines.push(p);
    }
    return lines;
  };

  const removeAnimation = function (animation) {
    const index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
  };

  const animateParticules = function (x, y) {
    setCanvasSize();
    const particules = createParticles(x, y);
    const circles = createCircles(x, y);
    const lines = createLines(x, y);
    const particulesAnimation = anime({
      targets: particules,
      x(p) { return p.x + anime.random(-distance, distance); },
      y(p) { return p.y + anime.random(-distance, distance); },
      radius: 0,
      duration() { return anime.random(1200, 1800); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    const circlesAnimation = anime({
      targets: circles,
      radius() { return anime.random(getFontSize() * 4.75, getFontSize() * 16.25); },
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration() { return anime.random(100, 800); },
      },
      duration() { return anime.random(200, 1800); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    const linesAnimation = anime({
      targets: lines,
      // x(p) { return p.x + anime.random(-distance, distance); },
      // y(p) { return p.y + anime.random(-distance, distance); },
      x(p) { return p.x; },
      y(p) { return p.y; },
      // radius: 0,
      alpha: {
        value: 0.5,
        easing: 'linear',
        duration() { return anime.random(100, 200); },
      },
      duration() { return anime.random(100, 400); },
      easing: 'linear',
      complete: removeAnimation,
    });
    animations.push(particulesAnimation);
    animations.push(circlesAnimation);
    animations.push(linesAnimation);
  };

  const mainLoop = anime({
    duration: Infinity,
    update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animations.forEach((anim) => {
        anim.animatables.forEach((animatable) => {
          animatable.target.draw();
        });
      });
    },
  });

  const counter = function (x, y) {
    if (localStorage.hasOwnProperty('clicks')) {
      localStorage.clicks = Number(localStorage.clicks) + 1;
    } else {
      localStorage.clicks = 0;
    }
    document.querySelector('#clicks span').innerHTML = localStorage.clicks;
  };
  // set localstorage counter
  if (localStorage.hasOwnProperty('clicks')) {
    document.querySelector('#clicks span').innerHTML = localStorage.clicks;
  } else {
    document.querySelector('#clicks span').innerHTML = 0;
  }
  document.addEventListener(tap, (e) => {
    counter();
    updateCoords(e);
    animateParticules(x, y);
  }, false);

  window.addEventListener('resize', setCanvasSize, false);

  return {
    boom: animateParticules,
  };

}());
