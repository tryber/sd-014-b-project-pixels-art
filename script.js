function createPixelBoard() {
  let pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index++) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let index = 0; index < 5; index++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

createPixelBoard();