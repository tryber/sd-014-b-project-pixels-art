// const colorPalette = document.getElementById('color-palette');
// const pixelBoard = document.getElementById('pixel-board');
// document.onload = function addSelectedBox1() {
//   const box1 = document.getElementById('box1');
//   box1.classList.add = 'selected';
// };

const paletteColors = document.querySelectorAll('.color');
console.log(paletteColors.length);

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
  console.log(event);
  getColor();
}

for (let i = 0; i < paletteColors.length; i += 1) {
  paletteColors[i].addEventListener('click', addClassSelected);
}

function applyColor(event) {
  event.target.style.backgroundColor = 'getColor';
}

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.style.backgroundColor = getColor();
    console.log(event);
    console.log(getColor());
  });
});
