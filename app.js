// 1. Generate three random images (non-duplicate images) (part of the controller)
'use strict'

var clickTotal = 0;
var productsArray = [];

var bag = new Products('images/bag.jpg');
var banana = new Products('images/banana.jpg');
var bathroom = new Products('images/bathroom.jpg');
var boots = new Products('images/boots.jpg');
var breakfast = new Products('images/breakfast.jpg');
var bubblegum = new Products('images/bubblegum.jpg');
var chair = new Products('images/chair.jpg');
var cthulhu = new Products('images/cthulhu.jpg');
var dog = new Products('images/dog.jpg');
var dragon = new Products('images/dragon.jpg');
var pen = new Products('images/pen.jpg');
var pet = new Products('images/pet.jpg');
var scissors = new Products('images/scissors.jpg');
var shark = new Products('images/shark.jpg');
var sweep = new Products('images/sweep.jpg');
var tauntaun = new Products('images/tauntaun.jpg');
var unicorn = new Products('images/unicorn.jpg');
var usb = new Products('images/usb.jpg');
var water = new Products('images/water.jpg');
var wine = new Products('images/wine.jpg');

function Products(images) {
  // this.name= name;
  this.images = images;
  // this.votes = votes;
  productsArray.push(this);
};


//Create function to generate random number from 1-20
function getRandom() {
  return (Math.floor(Math.random() * productsArray.length));
}

// a simple IIFE to build all the product images
var imageAppear = function(){
  var productImageOne = document.getElementById('imgOne');
  var img1 = getRandom();
  productImageOne.src = productsArray[img1].images;

  var productImageTwo = document.getElementById('imgTwo');
  var img2 = getRandom();
  productImageTwo.src = productsArray[img2].images;

  var productImageThree = document.getElementById('imgThree');
  var img3 = getRandom();
  productImageThree.src = productsArray[img3].images;
}
imageAppear();




function tracker(event) {
  console.log(event);
  var firstClick = 0;
  var secondClick = 0;
  var thirdClick = 0;
  firstClick += 1;
  secondClick += 1;
  thirdClick += 1;
  clickTotal += 1;
  imageAppear();
}
tracker();

imgOne.addEventListener('click', tracker);
imgTwo.addEventListener('click', tracker);
imgThree.addEventListener('click', tracker);

// someEl.addEventListener ('click', function(e)) {
//   // does some stuff on click
// })

// 2. Object constructor for Products:
// a. Include name, image, path, votes
// 3. A tracker object that will controll funcionality of app (controller)
// 4. Event listener(s) for image clicks
