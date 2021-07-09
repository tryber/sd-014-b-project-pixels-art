const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');

function createColor(rgbString) {
  const createElement = document.createElement('div');
  const color = colorPalette.appendChild(createElement);
  color.style.backgroundColor = rgbString;
  color.style.border = '1px solid black';
  color.setAttribute('class', 'color');
}

createColor('rgb(0, 0, 0)');

createColor('rgb(250, 0, 0)');

createColor('rgb(10, 50, 149)');

createColor('rgb(0, 250, 075)');

function createPixelBoard() {
  const setBoardWidth = 5;
  const setBoardHeight = 5;
  for (let i = 0; i < setBoardHeight; i += 1) {
    for (let i2 = 0; i2 < setBoardWidth; i2 += 1) {
      const createPixel = document.createElement('div');
      const pixel = pixelBoard.appendChild(createPixel);
      pixel.style.backgroundColor = 'white';
      pixel.style.border = '1px solid black';
      pixel.setAttribute('class', 'pixel');
    }
  }
}

createPixelBoard();

function defaultColor() {
  const colors = document.querySelectorAll('.color');
  colors[0].classList.add('black', 'selected');
}

defaultColor();

function selectColor(event) {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

colorPalette.addEventListener('click', selectColor);

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}

pixelBoard.addEventListener('click', paintPixel);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
