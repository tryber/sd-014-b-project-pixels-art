function criaPixel(quant) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < quant; i++) {
    const pixel = document.createElement('div');

    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
criaPixel(25);

function firstBlack() {
  let color1 = document.querySelector('#cor1');
  color1.classList.add('selected');
}
firstBlack();
