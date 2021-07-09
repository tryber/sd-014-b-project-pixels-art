function CreatePixelBoard(value) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < value; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

CreatePixelBoard(25);
