function colorSelected(event) {

  const selectedActual = document.getElementsByClassName('selected')[0];
  selectedActual.classList.remove('selected');

  event.target.classList.add('selected');

}
document.getElementById('color-palette').addEventListener('click', colorSelected);

function printPixel(event) {
  const elementoSelecionado = document.querySelector('.selected');
  const corSelecionada = window.getComputedStyle(elementoSelecionado).backgroundColor
  event.target.style.backgroundColor = corSelecionada;
}

document.getElementById('pixel-board').addEventListener('click', printPixel);

function limpaPixel(pixel) {
  pixel.style.backgroundColor = 'white';
}

function limparBoard() {
  const pixelBoard = document.getElementsByClassName('pixel');
  [...pixelBoard].forEach(limpaPixel);
}
document.getElementById('clear-board').addEventListener('click', limparBoard)