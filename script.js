window.onload = function getBlackColor() {
  const getBlack = document.querySelector('#black');
  getBlack.classList.add('selected');
};

function createClearButton() {
  const buttonSection = document.createElement('section');
  document.querySelector('body').appendChild(buttonSection);
  const button = document.createElement('button');
  button.type = "button";
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  buttonSection.appendChild(button);
  button.addEventListener('click', clearPixelTable);
}

createClearButton();

const pixelTableSize = 5;

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
  let selectedColor = getColor[index].addEventListener('click', selectColor);
}

function selectColor(color) {
  color.target.classList.add('selected');
  for (let index = 0; index <= getColor.length - 1; index += 1) {
    let otherColor = getColor[index];
    if (otherColor !== color.target) {
      otherColor.classList.remove('selected');
    }
  }
}

const getPixel = document.querySelectorAll('.pixel');

for (let index = 0; index <= getPixel.length - 1; index += 1) {
  let selected = getPixel[index].addEventListener('click', changeColor);
}

function changeColor(pixel) {
  const currentSelectedColor = document.querySelector('.selected');
  pixel.target.style.backgroundColor = currentSelectedColor.id;
}

function clearPixelTable(){
  for (let index = 0; index <= getPixel.length-1;  )
}