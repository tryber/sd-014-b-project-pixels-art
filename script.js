// const colorPalette = document.getElementById('color-palette');
// const pixelBoard = document.getElementById('pixel-board');
// document.onload = function addSelectedBox1() {
//   const box1 = document.getElementById('box1');
//   box1.classList.add = 'selected';
// };
const pixels = document.querySelectorAll('.pixel');

const paletteColors = document.querySelectorAll('.color');

function getColor() {
  const currentPalette = document.querySelector('.selected');
  const currentColor = window
    .getComputedStyle(currentPalette)
    .getPropertyValue('background-color');
  return currentColor;
}

function addClassSelected(event) {
  const lastColor = document.querySelector('.selected');
  lastColor.classList.remove('selected');
  event.target.classList.add('selected');
  getColor();
}

for (let i = 0; i < paletteColors.length; i += 1) {
  paletteColors[i].addEventListener('click', addClassSelected);
}

// function applyColor(event) {
//   event.target.style.backgroundColor = 'getColor';
// }

pixels.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.style.backgroundColor = getColor();
  });
});

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// document.querySelectorAll('.pixel').forEach((item) => {
//   item.style.backgroundColor = 'rgb (0, 0, 0)';
//   console.log(item);
// });

document.getElementById('clear-board').addEventListener('click', clearBoard);
