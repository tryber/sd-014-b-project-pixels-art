// Selecting each color palette.
function createLine(number) {
  for (let col = 1; col <= number; col += 1) {
    const divLine = document.createElement('div');
    divLine.setAttribute('class', 'tr');
    document.querySelector('#table').appendChild(divLine);
  }
}

// Preenchendo as colunas do pixel-board.
function fillCells(cells, paramLines) {
  for (let line = 0; line < paramLines.length; line += 1) {
    for (let col = 1; col <= cells; col += 1) {
      const div = document.createElement('div');
      div.setAttribute('class', 'pixel td');
      paramLines[line].appendChild(div);
    }
  }
}

function select(colors) {
  const color = colors;
  const oldSelected = document.querySelector('.selected');
  oldSelected.className = 'color';
  color.className = 'selected color';
}

function paintPixel(pixel) {
  const selectColor = document.querySelector('.selected').getAttribute('style');
  pixel.setAttribute('style', selectColor);
}

function loadPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => { paintPixel(pixels[index]); });
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.setAttribute('style', 'background-color: white;');
  });
}

function checkNumberPixel(number) {
  const numberInt = number;
  if (numberInt < 5) {
    return 5;
  }
  if (numberInt > 50) {
    return 50;
  }

  return number;
}

function generateBoard() {
  const numberPixel = checkNumberPixel(document.querySelector('#board-size').value);
  const clearTable = document.querySelector('#table').children;
  /**
   * Source: https://stackoverflow.com/questions/35969974/foreach-is-not-a-function-error-with-javascript-array
   * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   * clearTable não é um array e sim um HTMLCollection e não possui o método forEach, então usei o Array.from para converter em uma array.
   */
  Array.from(clearTable).forEach((pixel) => {
    pixel.parentElement.removeChild(pixel);
  });
  const inputValue = document.querySelector('#board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
  }
  createLine(numberPixel);
  const lines = document.querySelectorAll('.tr');
  fillCells(numberPixel, lines);
  loadPixels();
}

function randomColor() {
  const numberOne = Math.floor(Math.random() * (255 - 0) + 0);
  const numberTwo = Math.floor(Math.random() * (255 - 0) + 0);
  const numberTrhee = Math.floor(Math.random() * (255 - 0) + 0);
  return `background-color: rgb(${numberOne}, ${numberTwo}, ${numberTrhee});`;
}

window.onload = function load() {
  const colors = document.querySelectorAll('.color');
  colors[0].setAttribute('style', 'background-color: black');
  colors[1].setAttribute('style', randomColor());
  colors[2].setAttribute('style', randomColor());
  colors[3].setAttribute('style', randomColor());
  colors[0].className = 'selected color';
};

const colors = document.querySelectorAll('.color');
const lineUser = 5;
const columnUser = 5;

createLine(lineUser);
const lines = document.querySelectorAll('.tr');
fillCells(columnUser, lines);
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', () => { select(colors[index]); });
}

loadPixels();

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoard);

const buttonGenerateBoard = document.querySelector('#generate-board');
buttonGenerateBoard.addEventListener('click', generateBoard);
