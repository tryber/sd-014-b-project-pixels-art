let selected;
const colorPallete = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const inputBoard = document.querySelector('#board-size');
const boardButton = document.querySelector('#generate-board');

const selectcolorPallete = (event) => {
  selected.classList.remove('selected');
  selected = event.target;
  selected.classList.add('selected');
};

const rand = () => Math.floor(Math.random() * 255);

const createColor = () => {
  for (let index = 1; index <= 4; index += 1) {
    const elem = document.createElement('div');
    colorPallete.appendChild(elem);
    elem.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
    elem.style.margin = ' 0 10px';
    elem.style.width = '100px';
    elem.style.height = '100px';
    elem.classList.add('color');
    elem.addEventListener('click', selectcolorPallete);
  }
};

const paint = (event) => {
  const elem = event.target;
  elem.style.backgroundColor = selected.style.backgroundColor;
};

const createPixel = (number) => {
  for (let index = 1; index <= number; index += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    for (let index2 = 1; index2 <= number; index2 += 1) {
      const pixel = document.createElement('td');
      row.appendChild(pixel);
      pixel.classList.add('pixel');
      pixel.addEventListener('click', paint);
    }
  }
};

const clearColor = () => {
  const pixels = document.querySelectorAll('.pixel');
  const elem = Object.keys(pixels);
  elem.forEach((key) => {
    pixels[key].style.backgroundColor = 'white';
  });
};

const clear = () => {
  clearButton.addEventListener('click', clearColor);
};

const check = (value) => {
  let number;
  if (value >= 5 && value <= 50) number = value;
  if (value < 5) number = 5;
  if (value > 50) number = 50;
  pixelBoard.innerHTML = '';
  return createPixel(number);
};

const generate = () => {
  if (!inputBoard.value.trim()) alert('Board inválido!');
  check(inputBoard.value);
};

const generateButton = () => {
  boardButton.addEventListener('click', generate);
};

createColor();
createPixel(5);
clear();
generateButton();

window.onload = () => {
  const blackInit = document.querySelector('#color-palette div:nth-child(1)');
  selected = blackInit;
  selected.classList.add('selected');
  selected.style.backgroundColor = 'black';
};
