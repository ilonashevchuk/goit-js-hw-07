"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

function createLi(array, id) {
  var ingredientsEl = document.querySelector(id);
  var ingredientEl = array.map(function (item) {
    var itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
  });
  ingredientsEl.append.apply(ingredientsEl, _toConsumableArray(ingredientEl));
}

createLi(ingredients, '#ingredients');