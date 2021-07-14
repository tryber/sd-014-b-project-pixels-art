document.getElementById('black').classList.add('selected');
const palletColors = document.querySelectorAll('.color');
const table = document.querySelector('table');
const input = document.getElementById('board-size');

function createTable(n) {
  const number = n;
  for (let index = 0; index < number; index += 1) {
    const trElement = document.createElement('tr');
    for (let index2 = 0; index2 < number; index2 += 1) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      table.appendChild(trElement);
      trElement.appendChild(td);
    }
  }
}

createTable(5);

function randomColor() {
  let color = '';
  while (color.length < 6) {
    color += (Math.random()).toString(16).substr(-6).substr(-1);
  }
  return `#${color}`;
}

function checkPallet(array) {
  const colorArray = array;
  colorArray[0].style.backgroundColor = 'black';
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] === palletColors[index]) {
      colorArray[index].style.backgroundColor = randomColor();
    }
  }
}
checkPallet(palletColors);

function selectColor(event) {
  for (let index = 0; index < palletColors.length; index += 1) {
    palletColors[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

for (let index = 0; index < palletColors.length; index += 1) {
  palletColors[index].addEventListener('click', selectColor);
}

const pixels = document.querySelectorAll('.pixel');
function paintPixel(event) {
  const evento = event;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  evento.target.style.backgroundColor = selectedColor;
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

function removeTable() {
  const oldTr = document.querySelectorAll('tr');
  const length = oldTr.length - 1;
  for (let i = length; i >= 0; i -= 1) {
    oldTr[i].remove();
  }
}

let formatedInput;

function formatInput() {
  if (+input.value < 5) {
    formatedInput = 5;
  } else if (+input.value > 50) {
    formatedInput = 50;
  }
}

function newTable() {
  if (input.value === '') {
    alert('Board inválido!');
  } else if (+input.value >= 5 && +input.value <= 50) {
    removeTable();
    createTable(+input.value);
  } else {
    removeTable();
    formatInput();
    createTable(formatedInput);
  }
}

const generateButton = document.getElementById('generate-board');
generateButton.addEventListener('click', newTable);
