const allColors = document.querySelectorAll('.color');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');
const color4 = document.querySelector('.color-4');
const pixels = document.querySelectorAll('.pixel');

function RemoveSelectedElement() {
  for (let index = 0; index < allColors.length; index += 1) {
    let currentBoxColor = allColors[index];
    // Removo a classe selected
    currentBoxColor.classList.remove('selected');
  }
}

function clickColor() {
  RemoveSelectedElement();
  // Adiciono a classe selected ao elemento que chamou a função
  // O event.target referencia o o próprio elemento que realizou o evento
  event.target.classList.add('selected');
}

function changeColorToPixel() {
  // Pegar a cor da paleta seleciona
  // Adicionar a cor ao pixel clicado
}

color1.addEventListener('click', clickColor);
color2.addEventListener('click', clickColor);
color3.addEventListener('click', clickColor);
color4.addEventListener('click', clickColor);
