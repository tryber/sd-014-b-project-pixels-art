const colorBlack = document.querySelector('#black');
const colorOrange = document.querySelector('#orange');
const colorRed = document.querySelector('#red');
const colorBlue = document.querySelector('#blue');
const quadroPixels = document.querySelector('#pixel-board');

// Requisitos 7 - 8

function clickPixel(event) {
  const classSelect = document.querySelector('.selected');
  classSelect.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', clickPixel);
colorOrange.addEventListener('click', clickPixel);
colorRed.addEventListener('click', clickPixel);
colorBlue.addEventListener('click', clickPixel);

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.id;
}

quadroPixels.addEventListener('click', paintPixel);

// Requisito 9
const clearButton = document.querySelector('#clear-board');
function clearPixels() {
  const whhite = document.querySelectorAll('.pixel');
  whhite.style.backgroundColor = 'white';
}