const paletteContainer = document.querySelector('#palette-container');

function generateRandomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function createPalette() {
  let numberOfColors = 4;
  let colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < numberOfColors; index += 1) {
    let newColor = document.createElement('li');
    newColor.className = 'color';
    colorPalette.appendChild(newColor);
    if (index === 0) {
      newColor.style.backgroundColor = 'black';
      newColor.classList.add('selected');
    } else {
      newColor.style.backgroundColor = generateRandomColor();
    }
  }
}

createPalette();

function createPixelBoardElement() {
  let boardContainer = document.querySelector('#board-container');
  pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  boardContainer.appendChild(pixelBoard);
}

createPixelBoardElement();

let numberOfRows = 5;
let numberOfColumns = 5;

function createPixelBoard() {
  for (let rows = 0; rows < numberOfRows; rows += 1) {
    let newRow = document.createElement('div');
    newRow.className = 'tr';
    pixelBoard.appendChild(newRow);
    for (let columns = 0; columns < numberOfColumns; columns += 1) {
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel td';
      newPixel.style.backgroundColor = 'white';
      newRow.appendChild(newPixel);
    }
  }
}

createPixelBoard();

let btnClear = document.createElement('button');
btnClear.innerText = 'Limpar';
btnClear.id = 'clear-board';
paletteContainer.appendChild(btnClear);

// Cria o input que recebe o tamanho do board
const inputBoardSize = document.createElement('input');
inputBoardSize.type = 'number';
inputBoardSize.id = 'board-size';
inputBoardSize.min = '1';
inputBoardSize.placeholder = 'Insira um número de 5 a 50';
paletteContainer.appendChild(inputBoardSize);

// Cria o botão que cria o board
const btnGenerateBoard = document.createElement('button');
btnGenerateBoard.id = 'generate-board';
btnGenerateBoard.innerText = 'VQV';
paletteContainer.appendChild(btnGenerateBoard);

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

let colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

function changePixelColor(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}

let pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {4
  pixels[index].addEventListener('click', changePixelColor);
}
btnClear.addEventListener('click', function () {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

function removeBoard() {
  let getBoard = document.querySelector('#pixel-board');
  getBoard.remove();
}

btnGenerateBoard.addEventListener('click', function() {
  let inputValue = inputBoardSize.value;
  let inputNumber = parseInt(inputValue);
  if (inputValue === '') {
    window.alert('Board inválido!');
  } else if (inputNumber < 5) {
    inputNumber = 5;
  } else if (inputNumber > 50) {
    inputNumber = 50;
  }
  removeBoard();
  createPixelBoardElement();
  numberOfRows = inputNumber;
  numberOfColumns = inputNumber;
  createPixelBoard();
  inputBoardSize.value = '';

  function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }

  let colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', selectColor);
  }

  function changePixelColor(event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  }

  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changePixelColor);
  }
  btnClear.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
});
