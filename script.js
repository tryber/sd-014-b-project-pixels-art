const pixelBoard = document.getElementById('pixel-board');
const input = document.querySelector('input');
const generateBoard = document.getElementById('generate-board');
const colorsPalete2 = ['yellow', 'blue', 'brown', 'green'];
const colorsPalte3 = ['orange', 'red', 'gray', 'pink'];
const colorsPalete4 = ['chartreuse', 'purple', 'crimson', 'cyan'];
const blackPalete = document.querySelector('#black');
const palete2 = document.querySelector('#palete2');
const palete3 = document.querySelector('#palete3');
const palete4 = document.querySelector('#palete4');
const clearButton = document.getElementById('clear-board');

blackPalete.style.backgroundColor = 'black';
palete2.style.backgroundColor = colorsPalete2[Math.floor(Math.random() * 3)];
palete3.style.backgroundColor = colorsPalte3[Math.floor(Math.random() * 3)];
palete4.style.backgroundColor = colorsPalete4[Math.floor(Math.random() * 3)];

for (let i = 1; i <= 5; i += 1) {
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

function createPixelBoard(n1) {
  document.body.appendChild(pixelBoard);
  for (let i = 1; i <= n1; i += 1) {
    const div = document.createElement('div');
    pixelBoard.appendChild(div);
    div.className = 'pixel-line';
  }
}

function createPixels() {
  const pixelLine1 = document.querySelectorAll('.pixel-line');
  for (let i = 0; i < pixelLine1.length; i += 1) {
    for (let i2 = 0; i2 < pixelLine1.length; i2 += 1) {
      const pixel = document.createElement('span');
      pixelLine1[i].appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
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
  if (event.target.className === 'pixel') {
    const p = event.target;
    p.style.backgroundColor = paleteColor;
  }
}
pixelBoard.addEventListener('click', colorPixel);

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearPixels);

window.onload = () => {
  const blackPixel = document.getElementById('black');
  blackPixel.classList.add('selected');
};
