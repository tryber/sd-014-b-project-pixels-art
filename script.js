window.onload = function () {

const black = document.getElementById('black');
const green = document.getElementById('green');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

function clickColor(event) {
    const previousColor = document.querySelector('.selected');
    previousColor.classList.remove('selected');
    event.target.classList.add('selected');        
} 

black.addEventListener('click', clickColor);
green.addEventListener('click', clickColor);
red.addEventListener('click', clickColor);
blue.addEventListener('click', clickColor);   

}