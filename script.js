const black = document.getElementById('black');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
let defaultColor = document.querySelector('.selected');
const pixelBoard = document.querySelector('#pixel-board');
const button = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

/* -----Requisito 7----- */

function changeColorSelected(event) {
  const selectedColor = event.target;
  if (selectedColor !== defaultColor) {
    defaultColor.classList.remove('selected');
    selectedColor.classList.add('selected');
  }
  defaultColor = selectedColor;
}

black.addEventListener('click', changeColorSelected);
orange.addEventListener('click', changeColorSelected);
yellow.addEventListener('click', changeColorSelected);
red.addEventListener('click', changeColorSelected);

/* -----Requisito 8----- */

function paintPixels(event) {
  const click = event.target;
  click.style.backgroundColor = defaultColor.id;
}
pixelBoard.addEventListener('click', paintPixels);

/* -----Requisito 9----- */
function clearPixels() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].removeAttribute('style');
  }
}
button.addEventListener('click', clearPixels);
