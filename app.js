// 1. Generate three random images (non-duplicate images) (part of the controller)
'use strict'

var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog','dragon','pen','pet','scissors','shark','sweep','tauntaun','unicorn','water','wine'];
// store product objects
var productsArray = [];

function Products(name) {
  this.name = name;
  this.path = 'images/' + name + '.jpg';
  this.votes = 0;
  productsArray.push(this);
}

// a simple IIFE to build all the product images
(function() {
  for(var i = 0; i < productImageNames.length; i++) {
    // Add to product function
    new Products(productImageNames[i]);
  }
})();


var tracker = {
  imgOneEl: document.getElementById('img-one'),
  imgTwoEl: document.getElementById('img-two'),
  imgThreeEl: document.getElementById('img-three'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,

  getRandomIndex: function() {
    return Math.floor(Math.random() * productsArray.length);
  },

  displayImages: function() {
    this.imgOneEl.src = productsArray[this.getRandomIndex()].path;
    this.imgTwoEl.src = productsArray[this.getRandomIndex()].path;
    this.imgThreeEl.src = productsArray[this.getRandomIndex()].path;
  }
};
