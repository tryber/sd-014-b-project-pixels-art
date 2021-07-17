// Black as default selected color
const colorDivs = document.getElementsByClassName('color');
colorDivs[0].classList.add('selected');

// Coloring <divs> #1~#4
let targetColors = ['black', '#315F1C', '#298E46', '#90DFA7'];

function coloringPalette() {
  for (let index = 0; index < colorDivs.length; index += 1) {
    colorDivs[index].style.backgroundColor = targetColors[index];
  }
}

window.onload = coloringPalette();

// naming each color-div:
const setBlack = document.getElementsByClassName('color')[0];
const setColor1 = document.getElementsByClassName('color')[1];
const setColor2 = document.getElementsByClassName('color')[2];
const setColor3 = document.getElementsByClassName('color')[3];

// Select your color:
function selectColor(evento) {
  const colorPalette = document.getElementsByClassName('color'); // <divs> com cores
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

setBlack.addEventListener('click', selectColor);
setColor1.addEventListener('click', selectColor);
setColor2.addEventListener('click', selectColor);
setColor3.addEventListener('click', selectColor);

// Feature: painting pixels
let pixels = document.querySelectorAll('.pixel');

function paint(pixel) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = selectedColor;
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paint);
}

// Feature: Reset button
function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

const resetButton = document.querySelector('#clear-board');
resetButton.addEventListener('click', clearBoard);

// Feature: user able to set board-size
const boardSize = document.querySelector('#board-size'); // <input>
const boardGenerator = document.querySelector('#generate-board'); // <button> 'VQV'

function createBoard() {
  const board = document.querySelector('#pixel-board'); // <table>
  board.innerHTML = '';
  for (let index = 0; index < boardSize.value; index += 1) {
    const newTr = document.createElement('tr');
    newTr.classList.add('tr');
    board.appendChild(newTr);
    const tableLine = document.getElementsByClassName('tr')[index];
    for (let index2 = 0; index2 < boardSize.value; index2 += 1) {
      const newPixel = document.createElement('td');
      newPixel.classList.add('pixel');
      tableLine.appendChild(newPixel);
    }
  }
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].addEventListener('click', paint);
  }
}

function verifySize() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } if (boardSize.value < 5) {
    boardSize.value = 5;
  } if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  createBoard();
}

boardGenerator.addEventListener('click', verifySize);

// Random color at each load:
function randomPrimaryColor() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  const red = randomPrimaryColor();
  const green = randomPrimaryColor();
  const blue = randomPrimaryColor();
  return 'rgb('+ red + ', ' + green + ', ' + blue + ')';
}

function randomPalette() {
  for (let index = 1; index < colorDivs.length; index += 1) {
    colorDivs[index].style.backgroundColor = randomColor();
  }
}

window.onload = randomPalette();

let randomizeColors = document.querySelector('#randomize-palette'); // <button> 'random colors'
randomizeColors.addEventListener('click', randomPalette);
