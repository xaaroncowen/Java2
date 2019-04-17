'use strict';

//  need an array ti hold all Pic images from image dir (img)

Pic.allPics = [];
Pic.shownPics = [];
var maxPicId = 19;
var PicId = 0;
var currentlyDisplayed1 = 99;
var currentlyDisplayed2 = 99;
var currentlyDisplayed3 = 99;

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

//function randomPicNew() {
//var randomIndex = Math.floor(Math.random() * Pic.allPics.length);
//Pic.usedPics = randomIndex;
//console.log(Pic.usedPics);
//}
console.log('BEFORE randomPic() function declaration');
function randomPic() {
  var randomIndex = getRandomIndex ();
  for (var lp = 0; lp < 20; lp++){
    if (currentlyDisplayed1 !== randomIndex && currentlyDisplayed2 !== randomIndex && currentlyDisplayed3 !== randomIndex  )  {
      imageContainer.src = Pic.allPics[randomIndex].filepath;
      currentlyDisplayed1 = randomIndex;
      Pic.allPics[randomIndex].totalclicks++;
      break;
    } else{
      randomIndex = getRandomIndex ();
    }
  }
}
function randomPic2() {
  var randomIndex = getRandomIndex ();
  for (var lp = 0; lp < 20; lp++){
    if (currentlyDisplayed1 !== randomIndex && currentlyDisplayed2 !== randomIndex && currentlyDisplayed3 !== randomIndex  ) {
      imageContainer2.src = Pic.allPics[randomIndex].filepath;
      currentlyDisplayed2 = randomIndex;
      Pic.allPics[randomIndex].totalclicks++;
      break;
    } else{
      randomIndex = getRandomIndex ();
    }
  }
}

function randomPic3() {
  var randomIndex = getRandomIndex ();
  for (var lp = 0; lp < 20; lp++){
    if (currentlyDisplayed1 !== randomIndex && currentlyDisplayed2 !== randomIndex && currentlyDisplayed3 !== randomIndex  ) {
      imageContainer3.src = Pic.allPics[randomIndex].filepath;
      currentlyDisplayed3 = randomIndex;
      Pic.allPics[randomIndex].totalclicks++;
      break;
    } else{
      randomIndex = getRandomIndex ();
    }
  }
}


imageContainer.addEventListener('click', randomPic);
imageContainer2.addEventListener('click', randomPic2);
imageContainer3.addEventListener('click', randomPic3);


//imageContainer.addEventListener('click', randomPicNew);

randomPic();
randomPic2();
randomPic3();





function getRandomIndex () {
  return (Math.floor(Math.random() * Pic.allPics.length));
}
//console.log('randNum ' + randNum);

//andomPicNew();


