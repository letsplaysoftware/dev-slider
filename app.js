var app = a = {};
a.elements = e = {};
a.listeners = l = {};
a.handlers = h  = {};
a.utilities = u = {};

e.title, e.bullets = undefined;

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello slider thing one');

  e.title = document.getElementById('title');
  e.bullets = document.getElementById('bullets');


  document.addEventListener('keypress', l.onKeyPress);
});

l.onKeyPress = function(event) {
  console.log(event.key);
  if (event.key === 't') {
    e.title.classList.remove('hidden');
  } else if (event.key === 'b') {
    e.bullets.classList.remove('hidden');
  }
}
