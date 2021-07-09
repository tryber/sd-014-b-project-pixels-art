const allColors = document.querySelectorAll('.color');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');
const color4 = document.querySelector('.color-4');
const pixels = document.querySelectorAll('.pixel');
const clearBoardButton = document.querySelector('#clear-board');
let selectedColor = '';

// Função que captura qual o elemento está com a classe selected e salva a classe da cor correspondente em uma variável
function captureSelected() {
  for (let index = 0; index < allColors.length; index += 1) {
    let currentBoxColor = allColors[index];
    if (currentBoxColor.classList.contains('selected')) {
      if (currentBoxColor === color1) {
        selectedColor = 'color-1';
      }
      else if (currentBoxColor === color2) {
        selectedColor = 'color-2';
      }
      else if (currentBoxColor === color3) {
        selectedColor = 'color-3';
      }
      else if (currentBoxColor === color4) {
        selectedColor = 'color-4';
      }
    }
  }
}

function removeSelectedElement() {
  for (let index = 0; index < allColors.length; index += 1) {
    let currentBoxColor = allColors[index];
    // Removo a classe selected
    currentBoxColor.classList.remove('selected');
  }
}

function clickColor() {
  removeSelectedElement();
  // Adiciono a classe selected ao elemento que chamou a função
  // O event.target referencia o o próprio elemento que realizou o evento
  event.target.classList.add('selected');
}

// Função altera a cor dos quadrados de pixels
function changeColorToPixel() {
  // Pegar a cor da paleta selecionada
  captureSelected();
  // Adicionar a cor ao pixel clicado
  event.target.classList.remove('color-white')
  event.target.classList.add(selectedColor);
}

//Função que captura o clique de um quadrado de pixel
function clickPixel() {
  // Capturar o index que foi clicado
  for (index = 0; index < pixels.length; index += 1) {
    let currentPixel = pixels[index];
    currentPixel.addEventListener('click',changeColorToPixel);
  }
}

//Define o background de pixels como branco
function clearBoard() {
  for (index = 0; index < pixels.length; index += 1) {
    let currentPixel = pixels[index];
    currentPixel.classList.remove(selectedColor);
    currentPixel.classList.add('color-white');
  } 
}

clickPixel();

color1.addEventListener('click', clickColor);
color2.addEventListener('click', clickColor);
color3.addEventListener('click', clickColor);
color4.addEventListener('click', clickColor);
clearBoardButton.addEventListener('click', clearBoard);
