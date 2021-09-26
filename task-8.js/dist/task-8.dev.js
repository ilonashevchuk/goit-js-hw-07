"use strict";

var controls = {
  inputNumber: document.querySelector('[type="number"]'),
  buttonRender: document.querySelector('[data-action="render"]'),
  buttonDestroy: document.querySelector('[data-action="destroy"]')
};
var boxes = document.querySelector('#boxes');

function getAmount() {
  var amount = Number(controls.inputNumber.value);
  createBoxes(amount);
}

function random() {
  return Math.floor(Math.random() * 256);
}

function createBoxes(amount) {
  var startlSize = 30;

  if (boxes.children.length > 0) {
    destroyBoxes();
  }

  if (!boxes.children.length) {
    for (var i = 0; i < amount; i++) {
      startlSize += 10;
      var newDiv = "<div style=\"width: ".concat(startlSize, "px; \n        height: ").concat(startlSize, "px; background-color: rgb(").concat(random(), ", \n        ").concat(random(), ", ").concat(random(), ")\"></div>");
      boxes.insertAdjacentHTML('beforeend', newDiv);
    }
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

controls.buttonRender.addEventListener('click', getAmount);
controls.buttonDestroy.addEventListener('click', destroyBoxes);