let colorSelected = 'black';

window.onload = function() {
  setColors();
  eventAdd();
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
}

function eventAdd() {
  let botoesCores = document.querySelectorAll('.color');
  let pixels = document.querySelectorAll('.pixel');
  let botaoReset = document.getElementById('clear-board');
  for (let i = 0; i < botoesCores.length; i += 1) {
    botoesCores[i].addEventListener('click', selectColor);
  }
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', colorPixel);
  }
  botaoReset.addEventListener('click', resetPalette);
}

function setColors() {
  let botoesCores = document.querySelectorAll('.color');
  botoesCores[0].style.backgroundColor = 'black';
  botoesCores[1].style.backgroundColor = 'blue';
  botoesCores[2].style.backgroundColor = 'red';
  botoesCores[3].style.backgroundColor = 'yellow';
}

function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  colorSelected = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
}

function colorPixel(event) {
  event.target.style.backgroundColor = colorSelected;
}

function resetPalette() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
