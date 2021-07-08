// Requisito #6
const blackColor = document.querySelector('#first-color');
blackColor.classList.add('selected');

// Requisito #7
const paletaDeCores = document.querySelectorAll('.color');

function colorSelector(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
for (const color of paletaDeCores) {
  color.addEventListener('click', colorSelector);
}

// Requisito #8
const pixelBoard = document.querySelector('#pixel-board');

function fillPixel(event) {
  const paint = document.querySelector('.color.selected');
  const color = paint.getAttribute('id');
  event.target.setAttribute('id', color);
} 
pixelBoard.addEventListener('click', fillPixel);
