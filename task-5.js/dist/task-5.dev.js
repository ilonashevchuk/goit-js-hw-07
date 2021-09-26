"use strict";

var input = document.getElementById('name-input');
var nameOutput = document.getElementById('name-output');

input.oninput = function () {
  if (input.value === '') {
    nameOutput.innerHTML = 'незнакомец';
  } else {
    nameOutput.innerHTML = input.value;
  }
};