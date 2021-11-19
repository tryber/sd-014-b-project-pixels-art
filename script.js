// 7.
const blackColor = document.querySelector('.black');
const secondColor = document.querySelector('.second');
const thirdColor = document.querySelector('.third');
const fourthColor = document.querySelector('.fourth');
const main = document.querySelector('main');
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const getClearButton = document.querySelector('#clear-board');

const color = () => Math.floor(Math.random() * 255);
secondColor.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
thirdColor.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
fourthColor.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;

function createPixelBoard(pixel) {
  main.appendChild(pixelBoard);
  for (let index = 1; index <= pixel; index += 1) {
    const div = document.createElement('div');
    pixelBoard.appendChild(div);
    div.className = 'pixel-line';
  }
}

function createPixels() {
  const pixelLine = document.querySelectorAll('.pixel-line');
  pixelLine.forEach((lines) => pixelLine.forEach(() => {
    const pixel = document.createElement('span');
    lines.appendChild(pixel);
    pixel.className = 'pixel';
  }));
}

function handleChangeColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener('click', handleChangeColor);
secondColor.addEventListener('click', handleChangeColor);
thirdColor.addEventListener('click', handleChangeColor);
fourthColor.addEventListener('click', handleChangeColor);

// 8.

function setPixelColor(event) {
  const selection = document.querySelector('.selected');
  const selectionColor = window.getComputedStyle(selection).getPropertyValue('background-color');
  const element = event;
  element.target.style.backgroundColor = selectionColor;
}
document.querySelector('#pixel-board').addEventListener('click', setPixelColor);

// 9.

function clearPixel() {
  const getAllPixels = document.querySelectorAll('.pixel');
  const setNewColor = 'white';
  for (let index = 0; index < getAllPixels.length; index += 1) {
    getAllPixels[index].style.backgroundColor = setNewColor;
  }
}

getClearButton.addEventListener('click', clearPixel);

function changeSizePixelBoard() {
  let getValue = boardSize.value;
  console.log(getValue);
  pixelBoard.innerText = '';
  if (getValue.length > 0) {
    if (getValue > 50) {
      getValue = 50;
    } else if (getValue < 5) {
      getValue = 5;
    }
    createPixelBoard(getValue);
    createPixels();
  } else {
    alert('Board inválido!');
  }
}

generateBoard.addEventListener('click', changeSizePixelBoard);

window.onload = () => {
  createPixelBoard(5);
  createPixels();
};
