let black = document.querySelector('.black');
let blue = document.querySelector('.blue');
let red = document.querySelector('.red');
let green = document.querySelector('.green');

black.addEventListener('click', blackSelected);
blue.addEventListener('click', blueSelected);
red.addEventListener('click', redSelected);
green.addEventListener('click', greenSelected);

function blackSelected() {
    black.classList.add('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected')
    green.classList.remove('selected')
}

function blueSelected() {
    black.classList.remove('selected');
    blue.classList.add('selected');
    red.classList.remove('selected')
    green.classList.remove('selected')
}

function redSelected() {
    black.classList.remove('selected');
    blue.classList.remove('selected');
    red.classList.add('selected')
    green.classList.remove('selected')
}

function greenSelected() {
    black.classList.remove('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected')
    green.classList.add('selected')
}