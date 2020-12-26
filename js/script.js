
var gam = document.querySelector('.hamburger');
var head = document.querySelector('.blockheader');
var blocktop = document.querySelector('.block-top');
var black = document.querySelector('.black');
var element = document.querySelector('.element');
var stop = document.querySelector('.stop');
var dontclose = document.querySelector('.dont-close');

gam.addEventListener('click', function() {
  gam.classList.toggle('clicked')
  head.classList.toggle('clicked')
  black.classList.toggle('clicked')
  
})

element.addEventListener('click', function() {
  stop.classList.toggle('clicked')
})

dontclose.addEventListener('click', function() {
  stop.classList.remove('clicked');
})


blocktop.addEventListener('click', function() {
  head.classList.remove('clicked');
  black.classList.remove('clicked')
})



