// const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
// document.onload = function addSelectedBox1() {
//   const box1 = document.getElementById('box1');
//   box1.classList.add = 'selected';
// };
let pixels = document.querySelectorAll('.pixel');
const paletteColors = document.querySelectorAll('.color');
let boardSize = 5;

function getColor() {
  const currentPalette = document.querySelector('.selected');
  const currentColor = window
    .getComputedStyle(currentPalette)
    .getPropertyValue('background-color');
  return currentColor;
}

function eventPixel() {
  boardSize = document.getElementById('board-size').value;
  pixels.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.target.style.backgroundColor = getColor();
    });
  });
}

function createBoard(input) {
  // boardSize = document.getElementById('board-size').value;
  for (let i = 0; i < input; i += 1) {
    const createRow = document.createElement('div');
    createRow.classList.add('row');
    pixelBoard.appendChild(createRow);
    for (let i2 = 0; i2 < input; i2 += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      pixelBoard.appendChild(createPixel);
    }
  }
  pixels = document.querySelectorAll('.pixel');
  eventPixel();
}

function checkInputSize() {
  boardSize = document.getElementById('board-size').value;
  pixels = document.querySelectorAll('.pixel');
  if (boardSize <= 50 && boardSize >= 5) {
    pixels.forEach((item) => {
      item.remove();
    });
    createBoard(boardSize);
  } else {
    alert('Board inválido!');
  }
}

document
  .getElementById('generate-board')
  .addEventListener('click', checkInputSize);

function addClassSelected(event) {
  const lastColor = document.querySelector('.selected');
  lastColor.classList.remove('selected');
  event.target.classList.add('selected');
  getColor();
}

for (let i = 0; i < paletteColors.length; i += 1) {
  paletteColors[i].addEventListener('click', addClassSelected);
}

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

window.onload = function create5Board() {
  createBoard(5);
};

document.getElementById('clear-board').addEventListener('click', clearBoard);
