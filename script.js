const pixelBoard = document.getElementById('pixel-board');

function fillPixelBoard(num) {
  for (let i = 0; i < num; i += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'pixel-board-row';
    for (let index = 0; index < num; index += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newRow.appendChild(newPixel);
    }
    pixelBoard.appendChild(newRow);
  }
}
fillPixelBoard(5);

function removeBoard() {
  pixelBoard.innerHTML = '';
}

function createBoardPixels() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', () => {
    let number = document.getElementById('board-size').value;
    document.getElementById('board-size').value = '';
    removeBoard();
    if (number < 5) number = 5;
    if (number > 50) number = 50;
    fillPixelBoard(number);
  });
}

createBoardPixels();

function removeSelectedColor() {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('.eraser').classList.remove('selected');
}

function getCurrentColor() {
  const currentColor = document.querySelector('.selected');
  const style = window.getComputedStyle(currentColor);
  const color = style.getPropertyValue('background-color');
  document.querySelector('.selected-color').style.backgroundColor = color;
  return color;
}

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    removeSelectedColor();
    event.target.classList.add('selected');
    getCurrentColor();
  });
}
selectColor();

function eraser() {
  const eraserButton = document.getElementById('eraser');
  eraserButton.addEventListener('click', () => {
    const eraserClass = document.querySelector('.eraser');
    removeSelectedColor();
    eraserClass.classList.add('selected');
    getCurrentColor();
  });
}
eraser();

function fillColor() {
  pixelBoard.addEventListener('click', (event) => {
    const element = event.target;
    if (element.className !== 'pixel') return;
    const color = getCurrentColor();
    element.style.backgroundColor = color;
  });
}
fillColor();

function resetColors() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
resetColors();

function generateRandomColor() {
  const colorNum = [];
  for (let i = 0; i < 3; i += 1) {
    colorNum.push(Math.round(Math.random() * 255));
  }
  return colorNum;
}

function setRamdomColor() {
  const randomColorsPallet = document.getElementsByClassName('random-color');
  for (let i = 0; i < randomColorsPallet.length; i += 1) {
    const colorNumbers = generateRandomColor();
    const color = `rgb(${colorNumbers[0]}, ${colorNumbers[1]}, ${colorNumbers[2]})`;
    randomColorsPallet[i].style.backgroundColor = color;
  }
}
setRamdomColor();

const btnClear = document.querySelector('#clear-board');
const btnFill = document.querySelector('#generate-board');
const px = 'px';
btnClear.addEventListener('mousemove', (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  btnClear.style.setProperty('--x', x + px);
  btnClear.style.setProperty('--y', y + px);
});
btnFill.addEventListener('mousemove', (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  btnFill.style.setProperty('--x', x + px);
  btnFill.style.setProperty('--y', y + px);
});
