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

function createPixels() {
  for (let index = 1; index <= 5; index += 1) {
    const createTr = document.createElement('tr');
    getTable.appendChild(createTr);
    for (let secondIndex = 1; secondIndex <= 5; secondIndex += 1) {
      const createTd = document.createElement('td');
      createTd.addEventListener('click', getColor);
      createTr.appendChild(createTd);
      createTd.className = 'pixel';
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

// function setColor() {
//   const getPixels = document.querySelectorAll('.pixel');
//   getPixels.forEach((pixel) => pixel.addEventListener('click', getColor));
// }

function empityPixels() {
  while (getTable.firstChild) {
    getTable.removeChild(getTable.firstChild);
  }
}

function verifyInput() {
  if (getInput.value < 5 && getInput.value !== '') getInput.value = 5;
  if (getInput.value > 50 && getInput.value !== '') getInput.value = 50;
}

function valueBoard() {
  getButtonVqv.addEventListener('click', () => {
    if (getInput.value === '') {
      alert('Board inválido!');
    } else {
      verifyInput();
    }
  });
}
valueBoard();
// eslint-disable-next-line max-lines-per-function
function newTable() {
  const getButtonVqv = document.querySelector('#generate-board');
  const getInput = document.querySelector('#board-size');
  const getTablePixels = document.getElementById('pixel-board');
  getButtonVqv.addEventListener('click', () => {
    if (getInput.value !== '') {
      empityPixels();
      for (let index = 1; index <= getInput.value; index += 1) {
        const createTr = document.createElement('tr');
        getTablePixels.appendChild(createTr);
        for (let secondIndex = 1; secondIndex <= getInput.value; secondIndex += 1) {
          const createTd = document.createElement('td');
          createTd.className = 'pixel';
          createTd.style.backgroundColor = 'rgb(255, 255, 255)';
          createTd.addEventListener('click', getColor);
          createTr.appendChild(createTd);
          clearPixels();
        }
      }
    }
  });
}
newTable();

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
  createPixels();
  addClickColors();
  // setColor();
  clearPixels();
  const getPixelBlack = document.querySelectorAll('.color')[0];
  getPixelBlack.classList.add('selected');
  const setPixelsWhite = document.querySelectorAll('.pixel');
  for (let index = 0; index < setPixelsWhite.length; index += 1) {
    setPixelsWhite[index].style.backgroundColor = 'white';
  }
};
