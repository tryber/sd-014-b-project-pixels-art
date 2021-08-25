const pixelBoard = document.getElementById('pixel-board');
const input = document.querySelector('input');
const generateBoard = document.getElementById('generate-board');
const blackPalete = document.querySelector('#black');
const palete2 = document.querySelector('#palete2');
const palete3 = document.querySelector('#palete3');
const palete4 = document.querySelector('#palete4');
const clearButton = document.getElementById('clear-board');

const color = () => Math.floor(Math.random() * 255);
blackPalete.style.backgroundColor = 'black';
palete2.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
palete3.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
palete4.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;

function createPixelBoard(n) {
  document.body.appendChild(pixelBoard);
  for (let i = 1; i <= n; i += 1) {
    const div = document.createElement('div');
    pixelBoard.appendChild(div);
    div.className = 'pixel-line';
  }
}

function createPixels() {
  const pixelLine = document.querySelectorAll('.pixel-line');
  pixelLine.forEach((lines) => pixelLine.forEach(() => {
    const pixel = document.createElement('span');
    lines.appendChild(pixel);
    pixel.className = 'pixel';
  }));
}

function createLine() {
  let n = input.value;
  document.querySelector('#pixel-board').innerHTML = '';
  if (n.length > 0) {
    if (n < 5) {
      n = 5;
    } else if (n > 50) {
      n = 50;
    }
    createPixelBoard(n);
    createPixels();
  } else {
    alert('Board inválido!');
  }
}
generateBoard.addEventListener('click', createLine);

function changeSelectRed() {
  blackPalete.classList.remove('selected');
  palete3.classList.remove('selected');
  palete4.classList.remove('selected');
  palete2.classList.add('selected');
}
palete2.addEventListener('click', changeSelectRed);

function changeSelectBlack() {
  palete2.classList.remove('selected');
  palete3.classList.remove('selected');
  palete4.classList.remove('selected');
  blackPalete.classList.add('selected');
}
blackPalete.addEventListener('click', changeSelectBlack);

function changeSelectBlue() {
  palete2.classList.remove('selected');
  blackPalete.classList.remove('selected');
  palete4.classList.remove('selected');
  palete3.classList.add('selected');
}
palete3.addEventListener('click', changeSelectBlue);

function changeSelectYellow() {
  palete2.classList.remove('selected');
  blackPalete.classList.remove('selected');
  palete3.classList.remove('selected');
  palete4.classList.add('selected');
}
palete4.addEventListener('click', changeSelectYellow);

function colorPixel(event) {
  const paleteColor = document.querySelector('.selected').style.backgroundColor;
  const pixel = event.target;
  if (pixel.className === 'pixel') {
    pixel.style.backgroundColor = paleteColor;
  }
}
pixelBoard.addEventListener('click', colorPixel);

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    const p = pixel;
    p.style.backgroundColor = 'white';
  });
}
clearButton.addEventListener('click', clearPixels);

window.onload = () => {
  blackPalete.classList.add('selected');
  createPixelBoard(5);
  createPixels();
};
