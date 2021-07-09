window.onload = function () {
  const blackPixel = document.getElementById('black');
  blackPixel.classList.add('selected');
  let colorsPalete2 = ['yellow', 'blue', 'brown', 'green'];
  let colorsPalte3 = ['orange', 'red', 'gray', 'pink'];
  let colorsPalete4 = ['chartreuse', 'purple', 'crimson', 'cyan'];
  blackPalete.style.backgroundColor = 'black';
  palete2.style.backgroundColor = colorsPalete2[Math.floor(Math.random() * 3)];
  palete3.style.backgroundColor = colorsPalte3[Math.floor(Math.random() * 3)];
  palete4.style.backgroundColor = colorsPalete4[Math.floor(Math.random() * 3)];
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
  if (n.length > 0)  {
    if (n < 5) {
      n = 5;
    } else if (n > 50) {
      n = 50;
    } else {
      n = n;
    }
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
const palete2 = document.querySelector('#palete2');
const palete3 = document.querySelector('#palete3');
const palete4 = document.querySelector('#palete4');

palete2.addEventListener('click', changeSelectRed);

function changeSelectRed() {
  blackPalete.classList.remove('selected');
  palete3.classList.remove('selected');
  palete4.classList.remove('selected');
  palete2.classList.add('selected');
}

blackPalete.addEventListener('click', changeSelectBlack);
function changeSelectBlack() {
  palete2.classList.remove('selected');
  palete3.classList.remove('selected');
  palete4.classList.remove('selected');
  blackPalete.classList.add('selected');
}

palete3.addEventListener('click', changeSelectBlue);
function changeSelectBlue() {
  palete2.classList.remove('selected');
  blackPalete.classList.remove('selected');
  palete4.classList.remove('selected');
  palete3.classList.add('selected');
}

palete4.addEventListener('click', changeSelectYellow);
function changeSelectYellow() {
  palete2.classList.remove('selected');
  blackPalete.classList.remove('selected');
  palete3.classList.remove('selected');
  palete4.classList.add('selected');
}
let pixel = document.querySelector('#pixel-board');
pixel.addEventListener('click', colorPixel);
function colorPixel(event) {
  const paleteColor = document.querySelector('.selected').style.backgroundColor;
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
