const pixelBoard = document.getElementById('pixel-board');

function createPixelBoard(inputNumber) {
  for (let lines = 0; lines < inputNumber; lines += 1) {
    const newLine = document.createElement('div');
    for (let columns = 0; columns < inputNumber; columns += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newLine.appendChild(newPixel);
    }
    pixelBoard.appendChild(newLine);
  }
}
createPixelBoard(5);

document.querySelector('.color').classList.add('selected');

function selectColor() {
  const colorBox = document.getElementById('color-palette');
  const color = document.getElementsByClassName('color');
  function select(event) {
    for (let index = 0; index < color.length; index += 1) {
      if (color[index].classList.value.includes('selected')) {
        color[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }
  colorBox.addEventListener('click', select);
}
selectColor();

function copyColor() {
  function copySelectedColor(event) {
    const elm = event;
    if (event.target.classList.value.includes('pixel')) { 
      const colorMark = document.querySelector('.selected').style.backgroundColor;
      elm.target.style.backgroundColor = colorMark;
    }
  }
  pixelBoard.addEventListener('click', copySelectedColor);
}
copyColor();

function clear() {
  const cleaningButton = document.getElementById('clear-board');
  function resetBoard() {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  }
  cleaningButton.addEventListener('click', resetBoard);
}
clear();

function inputValue(gridSize) {
  if (gridSize < 5) {
    return 5;
  }
  if (gridSize > 50) {
    return 50;
  }
  return gridSize;
}

function definesBoardSize() {
  const button = document.getElementById('generate-board');
  function boardSize() {
    const gridSize = document.getElementById('board-size').value;
    if (!gridSize) {
      alert('Board inválido!');
    } else if (gridSize > 0) {
      pixelBoard.innerHTML = '';
      createPixelBoard(inputValue(gridSize));
    }
  }
  button.addEventListener('click', boardSize);
}
definesBoardSize();

function randomColor() {
  const random = [];
  for (let index = 0; index < 3; index += 1) { 
    random.push(Math.round(Math.random() * 255));
  }
  return `rgb(${random[0]}, ${random[1]}, ${random[2]})`;
}

function startColor() {
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'rgb(0, 0, 0)';
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = randomColor();
  }
}
startColor();