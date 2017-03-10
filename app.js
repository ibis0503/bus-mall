'use strict'
// 1) Create contents for productImageNames
var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog','dragon','pen','pet','scissors','shark','sweep','tauntaun','unicorn','water','wine'];
// 3) Store to productsArray
var productsArray = [];
// 2) Create constructor of products
function Products(name) {
  this.name = name;
  this.path = 'images/' + name + '.jpg';
  this.votes = 0;
  productsArray.push(this);
}

// 4) a simple IIFE to build all the product images
(function() {
  for(var i = 0; i < productImageNames.length; i++) {
    // Add to product function
    new Products(productImageNames[i]);
  }
})();

//5) grab image elements / propert starts with Null value
var tracker = {
  imgOneEl: document.getElementById('img-one'),
  imgTwoEl: document.getElementById('img-two'),
  imgThreeEl: document.getElementById('img-three'),
  showResultsEl: document.getElementById('show-results'),
  resultsEl: document.getElementById('results'),
  imageContainerEl: document.getElementById('image-container'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,
  clicks: 0,

  //6) get random number
  getRandomIndex: function() {
    return Math.floor(Math.random() * productsArray.length);
  },

  displayImages: function() {
    this.imgObjOne = productsArray[this.getRandomIndex()];
    this.imgObjTwo = productsArray[this.getRandomIndex()];
    this.imgObjThree = productsArray[this.getRandomIndex()];

    if (this.imgObjOne === this.imgObjTwo || this.imgObjOne === this.imgObjThree || this.imgObjTwo === this.imgObjThree)
    this.displayImages();

    this.imgOneEl.src = this.imgObjOne.path;
    this.imgOneEl.id = this.imgObjOne.name;
    this.imgTwoEl.src = this.imgObjTwo.path;
    this.imgTwoEl.id = this.imgObjTwo.name;
    this.imgThreeEl.src = this.imgObjThree.path;
    this.imgThreeEl.id   = this.imgObjThree.name;
  },

  checkClicks: function() {
    if(this.clicks > 13) {
      this.imageContainerEl.removeEventListener('click', this.clickHandler);
      this.showResultsEl.addEventListener('click', function(e){
        e.preventDefault();
        tracker.renderResults();
      });
    }
  },

  clickHandler: function(e) {
    // console.log(e.target.id);
    tracker.checkClicks();
    if(
      e.target.id === tracker.imgObjOne.name ||
      e.target.id === tracker.imgObjTwo.name ||
      e.target.id === tracker.imgObjThree.name
    ) {

      tracker.clicks++;
      console.log(tracker.clicks);
      tracker.tallyVotes(e.target.id);
      tracker.displayImages();
    }
  },
// count a votes that image I click
  tallyVotes: function(elId) {
    // for(var i = 0; i < productsArray.length; i++) {} = Same as below
    for(var i in productsArray) {
      if(elId === productsArray[i].name) {
        productsArray[i].votes += 1;
        console.log(productsArray[i]);
        break;
      }
    }
  },

  renderResults: function (){
    // All of this happens on button click
    // create an UL
    // create each of the LI and add content
    // append each Li to the UL
    // append the UL to the DOM

    var ulEl = document.createElement('ul');

    for(var i in productsArray) {
      var liEl = document.createElement('li');
      liEl.textContent = productsArray[i].name + ': ' + productsArray[i].votes;
      ulEl.appendChild(liEl);
    }

    this.resultsEl.appendChild(ulEl);
  }
};

tracker.imageContainerEl.addEventListener('click', tracker.clickHandler);

tracker.displayImages();
