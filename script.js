const black = document.querySelector('#black');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const orange = document.querySelector('#orange');

// selecionando as cores
function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
orange.addEventListener('click', selectColor);

// 8. aplicando as cores no pixel selecionado
/* Unless you have directly defined the backgroundColor on the element itself
   you have to use getComputedStyle() "stackoverflow"
   https://stackoverflow.com/questions/10556185/style-backgroundcolor-is-an-empty-string-in-javascript */
function selectPixel(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = getComputedStyle(selected).backgroundColor;
}

document.querySelector('#pixel-board').addEventListener('click', selectPixel);

// 9. botão clear
function clear() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', clear);

// 10. quadro definido pelo tamanho usuario
function makeBoard() {
  let allPixelLine = document.querySelectorAll('.pixelLine');
  let size = document.querySelector('#board-size').value;

  if (size <= 0) {
    alert('Board inválido!');
  } else {
    // 11. nunca menor que 5 ou maior que 50
    if (size < 5) { size = 5; }
    if (size > 50) { size = 50; }
    
    // removendo pixels anteriores
    allPixelLine = document.querySelectorAll('.pixelLine');
    for (let index = 0; index < allPixelLine.length; index += 1) {
      allPixelLine[index].remove('div');
    }
  }

  // recriando pixels (qtd = size)
  for (let x = 0; x < size; x += 1) {
    const div = document.createElement('div');
    div.className = 'pixelLine';
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(div);
  }

  allPixelLine = document.querySelectorAll('.pixelLine');
  for (let index = 0; index < allPixelLine.length; index += 1) {
    for (let i = 0; i < size; i += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      allPixelLine[index].appendChild(div);
    }
  }
}

const btnPixelBoard = document.querySelector('#generate-board');
btnPixelBoard.addEventListener('click', makeBoard);

// 12. cores aleátorias
function randomColors() {
  const colors = document.querySelectorAll('.color');

  // google: MDN Math random
  function getRandomInt(max) {
    // Math.random() de 0 à 0.9999999999999999
    // Math.floor() return the largest integer (0 à 9)
    return Math.floor(Math.random() * max);
  }

  for (let index = 0; index < colors.length; index += 1) {
    const R = getRandomInt(256); // RGB 0 à 255
    const G = getRandomInt(256); // RGB 0 à 255
    const B = getRandomInt(256); // RGB 0 à 255
    colors[index].style.backgroundColor = `rgb(${R},${G},${B})`;
  }
  colors[0].style.backgroundColor = 'black';
}

randomColors();
