function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let subIndex = 0; subIndex < 5; subIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

function colorSelector(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function turnPaletteSelectable() {
  const colors = document.getElementsByClassName('color');
  for (const color of colors) {
    color.addEventListener('click', colorSelector);
  }
}

createPixelBoard();
turnPaletteSelectable();
