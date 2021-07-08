function divPalette() {
  const divCor = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';
    divCor.appendChild(palette);
  }
}

divPalette();

const colorBlack = document.querySelectorAll('.color')[0];
colorBlack.style.background = '#000';

const color1 = document.querySelectorAll('.color')[1];
color1.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const color2 = document.querySelectorAll('.color')[2];
color2.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const color3 = document.querySelectorAll('.color')[3];
color3.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const start = function () {
  window.onload = colorBlack.classList.add('selected');
  color1.classList.remove('selected');
  color2.classList.remove('selected');
  color3.classList.remove('selected');
};
start();

function changeColor() {
  const selector = document.querySelectorAll('#color-palette .color');
  for (let i = 0; i < selector.length; i += 1) {
    selector[i].addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

changeColor();

const paint = function (event) {
  const click = event;
  const selectColor = document.querySelector('.selected').style.backgroundColor;
  if (event.target.className === 'pixel') {
    click.target.style.backgroundColor = selectColor;
  }
};

document.querySelector('#pixel-board').addEventListener('click', paint);

const botaoLimpar = function () {
  const clean = document.getElementsByClassName('pixel');
  for (let i = 0; i < clean.length; i += 1) {
    if (clean[i] !== 'white') {
      clean[i].style.backgroundColor = 'white';
    }
  }
};

document.querySelector('#clear-board').addEventListener('click', botaoLimpar);
