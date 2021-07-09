/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line func-names
window.onload = function () {
  const getPixelBlack = document.querySelectorAll('.color')[0];
  getPixelBlack.classList.add('selected');
  const setPixelsWhite = document.querySelectorAll('.pixel');
  for (let index = 0; index < setPixelsWhite.length; index += 1) {
    setPixelsWhite[index].style.backgroundColor = 'white';
  }
};

function createPixels() {
  const getTable = document.querySelector('#pixel-board');
  for (let index = 1; index <= 5; index += 1) {
    const createTr = document.createElement('tr');
    getTable.appendChild(createTr);
    for (let secondIndex = 1; secondIndex <= 5; secondIndex += 1) {
      const createTd = document.createElement('td');
      createTr.appendChild(createTd);
      createTd.className = 'pixel';
    }
  }
}
createPixels();

// eslint-disable-next-line sonarjs/cognitive-complexity
function addClickColors() {
  const getTableColors = document.querySelectorAll('.color');
  for (let index = 0; index < getTableColors.length; index += 1) {
    getTableColors[index].addEventListener('click', (event) => {
      event.target.classList.add('selected');
      const itemSelected = getTableColors[index];
      for (let secondIndex = 0; secondIndex < getTableColors.length; secondIndex += 1) {
        if (getTableColors[secondIndex] !== itemSelected) {
          getTableColors[secondIndex].classList.remove('selected');
        }
      }
    });
  }
}

addClickColors();

function getColor(event) {
  const getSelected = document.querySelector('.selected');
  const color = window.getComputedStyle(getSelected, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = color;
}

function setColor() {
  const getPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixels.length; index += 1) {
    getPixels[index].addEventListener('click', getColor);
  }
}
setColor();

function clearPixels() {
  const buttonClear = document.querySelector('#clear-board');
  const getPixels = document.querySelectorAll('.pixel');
  buttonClear.addEventListener('click', function () {
    for (let index = 0; index < getPixels.length; index += 1) {
      getPixels[index].style.backgroundColor = 'white';
    }
  });
}
clearPixels();

function newTable() {
  const getPixels = document.querySelectorAll('.pixel');
  const getButtonVqv = document.querySelector('#generate-board');
  const getAlterSquare = document.querySelector('#board-size');
  getButtonVqv.addEventListener('click', function () {
    if (getAlterSquare.value !== '' && getAlterSquare.value < 5) {
      getAlterSquare.value = 5;
    }
    for (let index = 0; index < getPixels.length; index += 1) {
      if (getAlterSquare.value !== '') {
        getPixels[index].style.width = `${getAlterSquare.value * getAlterSquare.value}px`;
        getPixels[index].style.height = `${getAlterSquare.value * getAlterSquare.value}px`;
        getPixels[index].style.backgroundColor = 'white';
      } else {
        alert('Board inválido!');
        break;
      }
    }
  });
}
newTable();
