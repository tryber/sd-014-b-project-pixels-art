window.onload = function teste() {
  const select = document.getElementById('black');
  select.classList.add('selected');
}

function clickRed() {
  document.querySelector('#black').classList.remove('selected');
  document.querySelector('#blue').classList.remove('selected');
  document.querySelector('#green').classList.remove('selected');
  document.querySelector('#red').classList.add('selected');
  alert('vermelho');
}

function clickBlack() {
  document.querySelector('#red').classList.remove('selected');
  document.querySelector('#blue').classList.remove('selected');
  document.querySelector('#green').classList.remove('selected');
  document.querySelector('#black').classList.add('selected');
  alert('preto');
}

function clickBlue() {
  document.querySelector('#black').classList.remove('selected');
  document.querySelector('#red').classList.remove('selected');
  document.querySelector('#green').classList.remove('selected');
  document.querySelector('#blue').classList.add('selected');
  alert('azul');
}

function clickGreen() {
  document.querySelector('#black').classList.remove('selected');
  document.querySelector('#blue').classList.remove('selected');
  document.querySelector('#red').classList.remove('selected');
  document.querySelector('#green').classList.add('selected');
  alert('verde');
}

const pixels = document.querySelectorAll('.pixel');

function painting() {
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function cleaning() {
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.backgroundColor = 'white';
  }
}


const clickB = document.getElementById('black');
clickB.addEventListener('click', clickBlack);

const clickR = document.getElementById('red');
clickR.addEventListener('click', clickRed);

const clickBlu = document.getElementById('blue');
clickBlu.addEventListener('click', clickBlue);

const clickG = document.getElementById('green');
clickG.addEventListener('click', clickGreen);

const clean = document.getElementById('clear-board');
clean.addEventListener('click', cleaning);
