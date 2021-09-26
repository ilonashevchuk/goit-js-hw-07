"use strict";

var images = [{
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat'
}, {
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
}, {
  url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running'
}];

function makeGallery(images) {
  var gallery = document.querySelector('#gallery');
  gallery.classList.add('ul-container');
  var markUpString = images.reduce(function (string, item) {
    return string + "<li class=\"li\">\n      <img class=\"image\" src=\"".concat(item.url, " alt=\"").concat(item.alt, "\" width=\"280\" height=\"160\">\n      </li>");
  }, '');
  gallery.insertAdjacentHTML('afterbegin', markUpString);
}

console.log(makeGallery(images));
gallery.style.display = 'flex';