function createColor(rgbString) {
  const createElement = document.createElement('div');
  const colorPalette = document.querySelector('#color-palette');
  const color = colorPalette.appendChild(createElement);
  color.style.backgroundColor = rgbString;
  color.style.border = '1px solid black';
  color.setAttribute('class', 'color');
}

createColor('rgb(0, 0, 0)');

createColor('rgb(250, 0, 0)');

createColor('rgb(10, 50, 149)');

createColor('rgb(0, 250, 075)');

function createPixelBoard() {
  const setBoardWidth = 5;
  const setBoardHeight = 5;
  for (let i = 0; i < setBoardHeight; i += 1) {
    for (let i2 = 0; i2 < setBoardWidth; i2 += 1) {
      const createPixel = document.createElement('div');
      const getBoard = document.querySelector('#pixel-board');
      const pixel = getBoard.appendChild(createPixel);
      pixel.style.backgroundColor = 'white';
      pixel.style.border = '1px solid black';
      pixel.setAttribute('class', 'pixel');
    }
  }
}

createPixelBoard();
