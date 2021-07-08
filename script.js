window.onload = function () {
  const blackPixel = document.getElementById('black');
  blackPixel.classList.add('selected');
};

const pixelLine = document.querySelectorAll('.pixel-line');

for (let i = 0; i < pixelLine.length; i += 1) {
  for (let i2 = 0; i2 < pixelLine.length; i2 += 1) {
    const pixel = document.createElement('span');
    pixelLine[i].appendChild(pixel);
    pixel.className = 'pixel';
  }
}


let blackPalete = document.querySelector('#black');
let redPalete = document.querySelector('#red');
let bluePalete = document.querySelector('#blue');
let yellowPalete = document.querySelector('#yellow');

redPalete.addEventListener('click', changeSelectRed);

function changeSelectRed() {
  if (redPalete.classList.value === ('color selected')) {
    redPalete.classList.remove('selected');
  } else {
    blackPalete.classList.remove('selected');
    bluePalete.classList.remove('selected');
    yellowPalete.classList.remove('selected');
    redPalete.classList.add('selected');
  }
}

blackPalete.addEventListener('click', changeSelectBlack);
function changeSelectBlack() {
  if (blackPalete.classList.value === ('color selected')) {
    blackPalete.classList.remove('selected');
  } else {
    redPalete.classList.remove('selected');
    bluePalete.classList.remove('selected');
    yellowPalete.classList.remove('selected');
    blackPalete.classList.add('selected');
  }
}

bluePalete.addEventListener('click', changeSelectBlue);
function changeSelectBlue() {
  if (bluePalete.classList.value === ('color selected')) {
    bluePalete.classList.remove('selected');
  } else {
    redPalete.classList.remove('selected');
    blackPalete.classList.remove('selected');
    yellowPalete.classList.remove('selected');
    bluePalete.classList.add('selected');
  }
}

yellowPalete.addEventListener('click', changeSelectYellow);
function changeSelectYellow() {
  if (yellowPalete.classList.value === ('color selected')) {
    yellowPalete.classList.remove('selected');
  } else {
    redPalete.classList.remove('selected');
    blackPalete.classList.remove('selected');
    bluePalete.classList.remove('selected');
    yellowPalete.classList.add('selected');
  }
}

