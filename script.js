let pixel = document.querySelectorAll('.pixel');
let selected = document.querySelector('.selected');

let black = document.querySelector('#black');
let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let orange = document.querySelector('#orange');


function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
orange.addEventListener('click', selectColor);

/*
document.addEventListener('click', function() {
  console.log(pixel);
  
  
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'black';
  }

});*/

