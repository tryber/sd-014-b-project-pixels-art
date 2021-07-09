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

function Main() {
  CreatePixelBoard(25);
  const paletas = document.querySelectorAll('.color');
  for (let i = 0; i < paletas.length; i += 1) {
    paletas[i].addEventListener('click', selectColor);
  }
}

Main();
