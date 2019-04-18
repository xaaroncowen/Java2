'use strict';

//  need an array ti hold all Pic images from image dir (img)

Pic.allPics = [];
Pic.shownPics = [];
var currentlyDisplayed1 = 99;
var currentlyDisplayed2 = 99;
var currentlyDisplayed3 = 99;
var maxClicks = 25;
var clicked = 0;
var resultsList = document.getElementById('results_list');
//var RandomPicNum = 0;

//  crete objects for the Pics

function Pic(name, filepath, counter) {
  this.name = name;
  this.filepath = filepath;
  this.counter = counter;
  this.totalclicks = 0;
  this.justshown = false;
  //this needs to now if true, need to code that
  Pic.allPics.push(this);
}

new Pic ('breakfast', 'img/breakfast.jpg', 0);
new Pic ('dragon', 'img/dragon.jpg', 1);
new Pic ('sweep', 'img/sweep.png', 2);
new Pic ('wine-glass', 'img/wine-glass.jpg', 3);
new Pic ('bag', 'img/bag.jpg', 4);
new Pic ('bubblegum', 'img/bubblegum.jpg', 5);
new Pic ('pen', 'img/pen.jpg', 6);
new Pic ('tauntaun', 'img/tauntaun.jpg', 7);
new Pic ('banana', 'img/banana.jpg', 8);
new Pic ('chair', 'img/chair.jpg', 9);
new Pic ('pet-sweep', 'img/pet-sweep.jpg', 10);
new Pic ('unicorn', 'img/unicorn.jpg', 11);
new Pic ('bathroom', 'img/bathroom.jpg', 12);
new Pic ('cthulhu', 'img/cthulhu.jpg', 13);
new Pic ('scissors', 'img/scissors.jpg', 14);
new Pic ('usb', 'img/usb.gif', 15);
new Pic ('boots', 'img/boots.jpg', 16);
new Pic ('dog-duck', 'img/dog-duck.jpg', 17);
new Pic ('shark', 'img/shark.jpg', 18);
new Pic ('water-can', 'img/water-can.jpg', 19);

//  need event listener to track clicks of the Pic images

//imageContainer.addEventListener('click', count);

var imageContainer = document.getElementById('pic');
var imageContainer2 = document.getElementById('pic2');
var imageContainer3 = document.getElementById('pic3');

function showResults(){
  for (var j = 0; j < Pic.allPics.length; j++){
    var outputText = document.createTextNode(`${Pic.allPics[j].totalclicks} Vote(s) for ${Pic.allPics[j].name}`);
    var outputNode = document.createElement('li');
    outputNode.appendChild(outputText);
    resultsList.appendChild (outputNode);
  }
}



function clickPic(){
  var randomIndex = getUniqueRandomIndex();
  Pic.allPics[currentlyDisplayed1].totalclicks++;
  imageContainer.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed1 = randomIndex;
  clicked++;
  if(clicked === maxClicks){
    showResults();
    imageContainer.removeEventListener('click',clickPic);
    imageContainer2.removeEventListener('click',clickPic2);
    imageContainer3.removeEventListener('click', clickPic3);
  }
  randomIndex = getUniqueRandomIndex();
  imageContainer2.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed2 = randomIndex;
  randomIndex = getUniqueRandomIndex();
  imageContainer3.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed3 = randomIndex;
}

function clickPic2(){
  var randomIndex = getUniqueRandomIndex();
  Pic.allPics[currentlyDisplayed2].totalclicks++;
  imageContainer2.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed2 = randomIndex;
  clicked++;
  if(clicked === maxClicks){
    showResults();
    imageContainer.removeEventListener('click',clickPic);
    imageContainer2.removeEventListener('click',clickPic2);
    imageContainer3.removeEventListener('click', clickPic3);
  }
  randomIndex = getUniqueRandomIndex();
  imageContainer.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed1 = randomIndex;
  randomIndex = getUniqueRandomIndex();
  imageContainer3.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed3 = randomIndex;
}

function clickPic3(){
  var randomIndex = getUniqueRandomIndex();
  Pic.allPics[currentlyDisplayed3].totalclicks++;
  imageContainer3.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed3 = randomIndex;
  clicked++;
  if(clicked === maxClicks){
    showResults();
    imageContainer.removeEventListener('click',clickPic);
    imageContainer2.removeEventListener('click',clickPic2);
    imageContainer3.removeEventListener('click', clickPic3);
  }
  randomIndex = getUniqueRandomIndex();
  imageContainer.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed1 = randomIndex;
  randomIndex = getUniqueRandomIndex();
  imageContainer2.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed2 = randomIndex;
}

function initDisplay (){
  var randomIndex = getRandomIndex ();
  imageContainer.src = Pic.allPics[randomIndex].filepath;
  currentlyDisplayed1 = randomIndex;
  for (var lp = 0; lp < 20; lp++){
    randomIndex = getRandomIndex ();
    if (currentlyDisplayed1 !== randomIndex ) {
      imageContainer2.src = Pic.allPics[randomIndex].filepath;
      currentlyDisplayed2 = randomIndex;
    } else{
      randomIndex = getRandomIndex ();
    }
  }
  for (lp = 0; lp < 20; lp++){
    randomIndex = getRandomIndex ();
    if (currentlyDisplayed1 !== randomIndex && currentlyDisplayed2 !== randomIndex) {
      imageContainer3.src = Pic.allPics[randomIndex].filepath;
      currentlyDisplayed3 = randomIndex;
    } else{
      randomIndex = getRandomIndex ();
    }
  }
}
initDisplay();

imageContainer.addEventListener('click', clickPic);
imageContainer2.addEventListener('click', clickPic2);
imageContainer3.addEventListener('click', clickPic3);

function getRandomIndex () {
  return (Math.floor(Math.random() * Pic.allPics.length));
}

function getUniqueRandomIndex(){
  var randomPick = 99;
  for (var lp = 0; lp < 20; lp++){
    randomPick = (Math.floor(Math.random() * Pic.allPics.length));
    if (randomPick !== currentlyDisplayed1 && randomPick !== currentlyDisplayed2 && randomPick !== currentlyDisplayed3){
      return randomPick;
      break;
    }
  }
}

