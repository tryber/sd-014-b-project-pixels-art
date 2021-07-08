window.onload = () => {
  const selectBlack = document.querySelector('.black');
  selectBlack.classList.add('selected');
};

function createPixel(value) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < value; i += 1) {
    const boardItem = document.createElement('div');
    boardItem.className = 'pixel';
    pixelBoard.appendChild(boardItem);
  }
}
createPixel(5 ** 2);

function setPixelColor(color) {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = `${color}`;
    }
  }, false);
}

function getPalleteColor() {
  const pallete = document.querySelector('#color-palette');
  const colors = document.querySelectorAll('.color');
  pallete.addEventListener('click', (event) => {
    colors.forEach((color) => {
      color.classList.remove('selected');
    });
    if (event.target.classList.contains('color')) {
      event.target.classList.add('selected');
      setPixelColor(event.target.classList[1]);
    } else {
      colors[0].classList.add('selected');
      setPixelColor('black');
    }
  });
}
getPalleteColor();

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
