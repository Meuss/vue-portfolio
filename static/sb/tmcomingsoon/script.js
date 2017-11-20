window.onload = load_animation();

function load_animation(){
  // console.log('started');
  single_animations('#Thomas-miller', 4);
  single_animations('#Coming', 5);
  single_animations('#soon', 6);
  single_animations('#o-1', 1.5);
  single_animations('#o-2', 2);
  single_animations('#o-3', 2.5);
  // console.log('finished');
  window.setTimeout(fillText, 3500);

};

function single_animations(id, x){
  var path = document.querySelector(id);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + x + 's ease-in-out, fill 0.3s ease-in-out';
  path.style.strokeDashoffset = '0';
};

function fillText(){
  document.body.classList.add('filled');
  document.getElementById('wrapper').onclick = function() {
    document.body.classList.toggle('filled');
  }
};