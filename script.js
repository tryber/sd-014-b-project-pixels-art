let colorSelected = 'rgb(0,0,0)';

window.onload = function () {
  let colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
  eventAdd();
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
