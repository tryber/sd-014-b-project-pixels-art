const palette = document.querySelectorAll('.color');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const teal = document.querySelector('.teal');


function takeColor(event){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected'); 
}

black.addEventListener('click', takeColor);
red.addEventListener('click', takeColor);
orange.addEventListener('click', takeColor);
teal.addEventListener('click', takeColor);
