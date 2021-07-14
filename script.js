/* eslint-disable no-undef */
const initialColor = document.querySelector('#black');
initialColor.classList.add('selected');

const colorPalette = document.querySelectorAll('.color');

function setClass(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', setClass);
}

const pixels = document.querySelectorAll('.pixel');
const selected = document.getElementsByClassName('selected');

function toColor(event) {
  event.target.style.backgroundColor = selected[0].id;
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', toColor);
}

const button = document.getElementById('clear-board');

function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (const key of pixelBoard) {
    key.style.backgroundColor = 'white';
  };
}

button.addEventListener('click', clearBoard);
