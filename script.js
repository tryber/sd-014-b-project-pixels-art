// const colorPalette = document.getElementById('color-palette');
// const pixelBoard = document.getElementById('pixel-board');
// document.onload = function addSelectedBox1() {
//   const box1 = document.getElementById('box1');
//   box1.classList.add = 'selected';
// };

const paletteColors = document.querySelectorAll('.color');
console.log(paletteColors.length);

function addClassSelected(event) {
  const lastColor = document.querySelector('.selected');
  lastColor.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(event);
}

for (let i = 0; i < paletteColors.length; i += 1) {
  paletteColors[i].addEventListener('click', addClassSelected);
}

function getColor () {
  let currentPalette = document.querySelector('.selected')
  let currentColor = window.getComputedStyle(currentPalette).getPropertyValue("background-color")
}