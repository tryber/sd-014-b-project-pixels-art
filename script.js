const colorBlack = document.querySelector('#black');
const colorYellow = document.querySelector('#yellow');
const colorMagenta = document.querySelector('#magenta');
const colorCyan = document.querySelector('#cyan');
const matrizPixels = document.querySelector('#pixel-board');

// Seleciona cor na paleta de cores:

function oneClick(event) {
  const selectedClass = document.querySelector('.selected');
  selectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', oneClick);
colorYellow.addEventListener('click', oneClick);
colorMagenta.addEventListener('click', oneClick);
colorCyan.addEventListener('click', oneClick);

// Pintando Matriz:

function pixelPainting(event) {
  const colorSelected = document.querySelector('.selected');
  event.target.style.backgroundColor = colorSelected.id;
}

matrizPixels.addEventListener('click', pixelPainting);

// Limpando Matriz:
const clearButton = document.querySelector('#clear-board');
function clearMatriz() {
  const colorWhite = document.querySelectorAll('.pixel');
  colorWhite.style.backgroundColor = 'white';
}

clearButton.addEventListener('click', clearMatriz);
