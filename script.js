const palette = document.querySelectorAll('.color');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const teal = document.querySelector('.teal');
const mosaic = document.querySelector('#pixel-board');

let selected = document.querySelector('.selected');


function takeColor(event){
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected'); 
}

black.addEventListener('click', takeColor);
red.addEventListener('click', takeColor);
orange.addEventListener('click', takeColor);
teal.addEventListener('click', takeColor);

function paintBox (event) {
    event.target.style.backgroundColor = document.querySelector('.selected').id;
}

mosaic.addEventListener('click', paintBox);
