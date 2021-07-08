function createPixel(value) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < value; i += 1) {
    const boardItem = document.createElement('div');
    boardItem.className = 'pixel';
    pixelBoard.appendChild(boardItem);
  }
}
createPixel(5 ** 2);

const selectBlack = document.querySelector('.black');
selectBlack.classList.add('selected');

function setPixelColor(color) {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = color;
    }
  }, false);
}
setPixelColor('yellow');

function clearColors() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    pixels.forEach((pixel) => {
      pixel.style.backgroundColor = 'white';
    });
  });
}
clearColors();
