const getTableColors = document.querySelectorAll('.color');
const getTable = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');
const getButtonVqv = document.querySelector('#generate-board');
const getInput = document.querySelector('#board-size');

function getColor(event) {
  const element = event;
  const getSelected = document.querySelector('.selected');
  const color = window.getComputedStyle(getSelected, null)
    .getPropertyValue('background-color');
  element.target.style.backgroundColor = color;
}

function createPixels(tr, td) {
  for (let index = 1; index <= tr; index += 1) {
    const createTr = document.createElement('tr');
    getTable.appendChild(createTr);
    for (let secondIndex = 1; secondIndex <= td; secondIndex += 1) {
      const createTd = document.createElement('td');
      createTd.style.backgroundColor = 'rgb(255, 255, 255)';
      createTd.addEventListener('click', getColor);
      createTd.className = 'pixel';
      createTr.appendChild(createTd);
    }
  }
}

function addClickColors() {
  getTableColors.forEach((element) => {
    element.addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  });
}

function clearPixels() {
  buttonClear.addEventListener('click', () => {
    const getPixels = document.querySelectorAll('.pixel');
    getPixels.forEach((pixel) => {
      const element = pixel;
      element.style.backgroundColor = 'white';
    });
  });
}

function empityPixels() {
  while (getTable.firstChild) {
    getTable.removeChild(getTable.firstChild);
  }
}

function verifyInput() {
  if (getInput.value < 5 && getInput.value !== '') getInput.value = 5;
  if (getInput.value > 50 && getInput.value !== '') getInput.value = 50;
}

function newTable() {
  if (getInput.value === '') {
    alert('Board inválido!');
  } else {
    verifyInput();
    empityPixels();
    createPixels(getInput.value, getInput.value);
  }
}

function valueBoard() {
  getButtonVqv.addEventListener('click', newTable);
}

function setColorPalet() {
  return Math.floor(Math.random() * 255);
}

function generateColors() {
  const getPaleteColors = document.querySelectorAll('.color');
  for (let index = 1; index < getPaleteColors.length; index += 1) {
    getPaleteColors[index]
      .style.backgroundColor = `rgb(${setColorPalet()},${setColorPalet()},${setColorPalet()})`;
  }
}
generateColors();

window.onload = () => {
  createPixels(5, 5);
  addClickColors();
  clearPixels();
  valueBoard();
  const getPixelBlack = document.querySelectorAll('.color')[0];
  getPixelBlack.classList.add('selected');
  const setPixelsWhite = document.querySelectorAll('.pixel');
  for (let index = 0; index < setPixelsWhite.length; index += 1) {
    setPixelsWhite[index].style.backgroundColor = 'white';
  }
};
