document.addEventListener('DOMContentLoaded', function(){

//1 menu rozwijane
var menuItem = document.querySelector('#miniMenu_hover');
var miniMenu = document.querySelector(".miniMenuDiv");

miniMenu.classList.add("hidden");

menuItem.addEventListener("mouseover", function(){
   miniMenu.classList.remove("hidden");
});

menuItem.addEventListener("mouseout", function(){
   miniMenu.classList.add("hidden");
});


// 2 znikajace bloki
var transparency = Array.from(document.querySelectorAll('.transparency'));
var picture1 = document.querySelector('.box1');
var picture2 = document.querySelector('.box2');

picture1.addEventListener('mouseover', function(){
  transparency[0].classList.add("hidden");
});

picture1.addEventListener('mouseout', function(){
  transparency[0].classList.remove("hidden");
});


picture2.addEventListener('mouseover', function(){
  transparency[1].classList.toggle("hidden");
});

picture2.addEventListener('mouseout', function(){
  transparency[1].classList.remove("hidden");
});


// 3 slider
var nextArrow = document.querySelector('.left1');
var prevArrow = document.querySelector('.right');
var chair1 = document.querySelector('.chair');
var chair2 = document.querySelector('.chair2');
var chair3 = document.querySelector('.chair3');

var chairArray = [chair1, chair2, chair3];

chair2.classList.add('nodisplay');
chair3.classList.add('nodisplay');

counter = 0;

var pictureVisalbe = chairArray[counter];
pictureVisalbe.classList.add('visible');


nextArrow.addEventListener('click', function(){
console.log('Next Arrow click!')

chairArray[counter].classList.add("nodisplay");
  counter++;

  if(counter>=3){
      counter = 0;
    }

  chairArray[counter].classList.remove('nodisplay');

});

prevArrow.addEventListener('click', function(){
console.log('Prev Arrow click!')

chairArray[counter].classList.add("nodisplay");
  counter--;

  if(counter<0){
      counter = 2;
    }

  chairArray[counter].classList.remove('nodisplay');

});

}); // dom
