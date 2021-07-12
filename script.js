window.onload = document.querySelector('.black').classList.add('selected');

const colorPalette = document.querySelectorAll('.color');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const pixels = document.querySelectorAll('.pixel');
const palette = document.querySelector('#color-palette');

function colorSelected(event) {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

black.addEventListener('click', colorSelected);
red.addEventListener('click', colorSelected);
yellow.addEventListener('click', colorSelected);
blue.addEventListener('click', colorSelected);

function selectedColor(event) {
  const color = event.target;
  for (let i = 0; i < palette.children.length; i += 1) {
    palette.children[i].classList.remove('selected');
  }
  color.classList.add('selected');
}

palette.addEventListener('click', selectedColor);

const table = document.querySelector('#pixel-board');

function paint(event) {
  for (let i = 0; i < palette.children.length; i += 1) {
    if (palette.children[i].classList.contains('selected')) {
      const color = window.getComputedStyle(palette.children[i], null).getPropertyValue('background-color');
      const block = event.target;
      block.style.backgroundColor = color;
    }
  }
}

table.addEventListener('click', paint);

function clean() {
  for (let i2 = 0; i2 < pixels.length; i2 += 1) {
    pixels[i2].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clean);
