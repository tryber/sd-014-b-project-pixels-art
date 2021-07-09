function CreatePixelBoard(value) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < value; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

function selectColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function fillPixel(event) {
  const currentPalet = document.getElementsByClassName('selected');
  const color = window.getComputedStyle(currentPalet.item(0)).backgroundColor;
  event.target.style.backgroundColor = color;
}

function Main() {
  CreatePixelBoard(25);
  const palets = document.querySelectorAll('.color');
  for (let i = 0; i < palets.length; i += 1) {
    palets[i].addEventListener('click', selectColor);
  }
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', fillPixel);
  }
}

window.onload = Main;
