window.onload = function () {
  const blackPixel = document.getElementById('black');
  blackPixel.classList.add('selected');
};

const pixelBoard = document.getElementById('pixel-board');
const input = document.querySelector('input');
const generateBoard = document.getElementById('generate-board');

let n = 5;
for (let i = 1; i <= n; i += 1) {
  const div = document.createElement('div');
  pixelBoard.appendChild(div);
  div.className = 'pixel-line';
}
const pixelLine = document.querySelectorAll('.pixel-line');
for (let i = 0; i < pixelLine.length; i += 1) {
  for (let i2 = 0; i2 < pixelLine.length; i2 += 1) {
    const pixel = document.createElement('span');
    pixelLine[i].appendChild(pixel);
    pixel.className = 'pixel';
  }
}
generateBoard.addEventListener('click', createLine);

function createLine() {
  let n = input.value;
  document.querySelector('#pixel-board').innerHTML = '';
  if (n > 0 && n < 11)  {
    document.body.appendChild(pixelBoard);
    for (let i = 1; i <= n; i += 1) {
      const div = document.createElement('div');
      pixelBoard.appendChild(div);
      div.className = 'pixel-line';
    }
    const pixelLine = document.querySelectorAll('.pixel-line');
    for (let i = 0; i < pixelLine.length; i += 1) {
      for (let i2 = 0; i2 < pixelLine.length; i2 += 1) {
        const pixel = document.createElement('span');
        pixelLine[i].appendChild(pixel);
        pixel.className = 'pixel';
      }
    }
  } else {
    alert('Board inválido!');
  }
}
const blackPalete = document.querySelector('#black');
const redPalete = document.querySelector('#red');
const bluePalete = document.querySelector('#blue');
const yellowPalete = document.querySelector('#yellow');

redPalete.addEventListener('click', changeSelectRed);

function changeSelectRed() {
  blackPalete.classList.remove('selected');
  bluePalete.classList.remove('selected');
  yellowPalete.classList.remove('selected');
  redPalete.classList.add('selected');
}

blackPalete.addEventListener('click', changeSelectBlack);
function changeSelectBlack() {
  redPalete.classList.remove('selected');
  bluePalete.classList.remove('selected');
  yellowPalete.classList.remove('selected');
  blackPalete.classList.add('selected');
}

bluePalete.addEventListener('click', changeSelectBlue);
function changeSelectBlue() {
  redPalete.classList.remove('selected');
  blackPalete.classList.remove('selected');
  yellowPalete.classList.remove('selected');
  bluePalete.classList.add('selected');
}

yellowPalete.addEventListener('click', changeSelectYellow);
function changeSelectYellow() {
  redPalete.classList.remove('selected');
  blackPalete.classList.remove('selected');
  bluePalete.classList.remove('selected');
  yellowPalete.classList.add('selected');
}
let pixel = document.querySelector('#pixel-board');
pixel.addEventListener('click', colorPixel);
function colorPixel(event) {
  const paleteColor = document.querySelector('.selected').id;
  event.target.style.backgroundColor = paleteColor;
}

let clearButton = document.getElementById('clear-board');
let whitePixels = document.querySelectorAll('.pixel');
clearButton.addEventListener('click', clearPixels);
function clearPixels() {
  for (let i = 0; i < whitePixels.length; i += 1) {
    whitePixels[i].style.backgroundColor = 'white';
  }
}
