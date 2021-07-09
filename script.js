const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
// const sizeInput = document.querySelector('#board-size');
// const generateBoardButton = document.querySelector('#generate-board');

function createColor(rgbString) {
  const createElement = document.createElement('div');
  const color = colorPalette.appendChild(createElement);
  color.style.backgroundColor = rgbString;
  color.style.border = '1px solid black';
  color.setAttribute('class', 'color');
}

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

function defaultColor() {
  const colors = document.querySelectorAll('.color');
  colors[0].classList.add('black', 'selected');
}

function selectColor(event) {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  //  eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = selectedColor;
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

createColor('rgb(0, 0, 0)');

createColor('rgb(250, 0, 0)');

createColor('rgb(10, 50, 149)');

createColor('rgb(0, 250, 075)');

createPixelBoard();

defaultColor();

colorPalette.addEventListener('click', selectColor);

pixelBoard.addEventListener('click', paintPixel);

clearButton.addEventListener('click', clearBoard);
