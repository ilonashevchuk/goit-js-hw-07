"use strict";

var controlFont = document.getElementById('font-size-control');
var text = document.getElementById('text');

controlFont.oninput = function () {
  text.style.fontSize = controlFont.value + 'px';
};