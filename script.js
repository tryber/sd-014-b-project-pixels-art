window.onload = function getBlackColor() {
  const getBlack = document.querySelector('#black');
  getBlack.classList.add('selected');
};

let pixelTableSize = 5;

const buttonSection = document.createElement('section');
document.querySelector('body').appendChild(buttonSection);

function createClearButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  buttonSection.appendChild(button);
  button.addEventListener('click', clearPixelTable);
}

createClearButton();

function createInput() {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = 'board-size';
  input.min = 1;
  buttonSection.appendChild(input);
}

createInput();

function generateBoardButton() {
  const boardButton = document.createElement('button');
  boardButton.type = 'button';
  boardButton.id = 'generate-board';
  boardButton.innerText = 'VQV';
  buttonSection.appendChild(boardButton);
  boardButton.addEventListener('click', createPixelsAsk);
}

generateBoardButton();

function createPixelsAsk() {
  const inputValue = document.querySelector('input').value;
  console.log(inputValue);
  if (inputValue === '') {
    alert('Board Inválido!');
  } else {
    if (inputValue < 5) {
      pixelTableSize = 5;
    } else if (inputValue > 50) {
      pixelTableSize = 50;
    } else {
      pixelTableSize = inputValue;
    }
    const PixelBoardRemove = document.querySelector('#pixel-board');
    PixelBoardRemove.remove();
    createPixelBoard();
    createPixels();
    getPixel = document.querySelectorAll('.pixel');
    addEventListenerPixel();
  }
}

function createPixelBoard() {
  const getBody = document.querySelector('body');
  const pixelBoard = document.createElement('section');
  pixelBoard.id = 'pixel-board';
  getBody.appendChild(pixelBoard);
}

createPixelBoard();

// A ideia de usar criar uma linha para depois associar o conjunto de pixels, veio da resposta no https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css

function createPixels() {
  for (let index = 0; index < pixelTableSize; index += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'board-line';
    document.querySelector('#pixel-board').appendChild(boardLine);
    for (let secondIndex = 1; secondIndex <= pixelTableSize; secondIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      document.querySelectorAll('.board-line')[index].appendChild(pixel);
    }
  }
}

createPixels();

const getColor = document.querySelectorAll('.color');
for (let index = 0; index <= getColor.length - 1; index += 1) {
  const selectedColor = getColor[index].addEventListener('click', selectColor);
}

function selectColor(color) {
  color.target.classList.add('selected');
  for (let index = 0; index <= getColor.length - 1; index += 1) {
    const otherColor = getColor[index];
    if (otherColor !== color.target) {
      otherColor.classList.remove('selected');
    }
  }
}

let getPixel = document.querySelectorAll('.pixel');

function addEventListenerPixel() {
  for (let index = 0; index <= getPixel.length - 1; index += 1) {
    const selected = getPixel[index].addEventListener('click', changeColor);
  }
}

addEventListenerPixel();

function changeColor(pixel) {
  const currentSelectedColor = document.querySelector('.selected');
  pixel.target.style.backgroundColor = currentSelectedColor.id;
}

function clearPixelTable() {
  for (let index = 0; index <= getPixel.length - 1; index += 1) {
    getPixel[index].style.backgroundColor = '';
  }
}
