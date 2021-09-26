"use strict";

var wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter ')
};
var counterValue = 0;

var increment = function increment() {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};

var decrement = function decrement() {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};

wrap_button.sub.addEventListener('click', increment);
wrap_button.add.addEventListener('click', decrement);