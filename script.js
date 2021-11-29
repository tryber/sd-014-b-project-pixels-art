/* Global */
const linePalette = document.querySelector('#color-palette'); /* div da paleta de cores */
const arrayOfColors = ['black', 'red', 'orange', 'green']; /* array de cores */
const getColor = document.getElementsByClassName('color');
const pixelSquare = '#pixel-board';

/* Requisito 2 - Cria paleta de quatro cores distintas */
/* Requisito 3 - Adiciona a cor preta como a primeira cor da paleta através da ordem do arrayOfColors */
/* Requisito 12 - Paleta de cores gera cores aleatórias */
function generateRandomColor() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  return `rgb(${red}, ${green}, ${blue})`;
}
generateRandomColor();

function createColorPalette() {
  const [black] = arrayOfColors;
  for (let index = 0; index < arrayOfColors.length; index += 1) {
    const line = document.createElement('div');
    line.classList.add('color');
    linePalette.appendChild(line);
    if (index === 0) {
      line.style.backgroundColor = black;
    } else {
      line.style.backgroundColor = generateRandomColor();
    }
  }
}
createColorPalette();

function createPixelBoardElement() {
  const boardContainer = document.querySelector('#board-container');
  const pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  boardContainer.appendChild(pixelBoard);
}

createPixelBoardElement();

/* Requisito 4 - Cria quadro de pixels com 25 pixels */
/* Requisito 5 - Estilo dos quadros pixel */
/* Tamanho inicial do board */

function createPixelBoard(value) {
  for (let indexRow = 0; indexRow < value; indexRow += 1) {
    const pixelBoardArea = document.querySelector(pixelSquare);
    const row = document.createElement('div');
    row.className = 'row';
    row.style.backgroundColor = 'white';
    pixelBoardArea.appendChild(row);
    for (let indexcolumns = 0; indexcolumns < value; indexcolumns += 1) {
      const newPixels = document.createElement('div');
      newPixels.className = 'pixel';
      newPixels.style.backgroundColor = 'white';
      row.appendChild(newPixels);
    }
  }
}
createPixelBoard(5);

/* Requisito 6 - Adiciona a classe selected a cor preta - O getElementsByClassName (linha 5) trás os elementos com a classe .color. A partir dele adiciono a classe .selected na posição 0. */

function setFirstColorBlack() {
  getColor[0].classList.add('selected');
}
setFirstColorBlack();

/* Requisito 7 - Usei o exercício de fixação do 5.3 como referência. */

function changeSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
const divona = document.querySelector('#color-palette');
divona.addEventListener('click', changeSelected);

/* Requisito 8 */

function paintPixelBoard(event) {
  const corSelecionada = document.querySelector('.selected');
  const evento = event.target;
  evento.style.backgroundColor = corSelecionada.style.backgroundColor;
}
const paiDosQuadradaum = document.querySelector(pixelSquare);
paiDosQuadradaum.addEventListener('click', paintPixelBoard);

/* Requisito 9 */
const button = document.querySelector('#clear-board');

function clearBoardColors() {
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearBoardColors);

/* Requisito 10 */
const vqvButton = document.querySelector('#generate-board');

/* Remove quadrado existente */
function resetBoard() {
  const defaultPixelBoard = document.querySelector(pixelSquare);
  defaultPixelBoard.innerHTML = '';
}

/* Cria um novo quadro a partir do input */

function createUserBoard() {
  resetBoard();
  const inputValue = document.querySelector('#board-size').value;
  const inputNumber = parseInt(inputValue, 10);
  if (inputValue === '') {
    alert('Board inválido!');
  } else if (inputNumber < 5) {
    createPixelBoard(5);
  } else if (inputNumber > 50) {
    createPixelBoard(50);
  } else {
    resetBoard();
    createPixelBoardElement();
    createPixelBoard(inputValue);
    inputValue.value = '';
  }
}
vqvButton.addEventListener('click', createUserBoard);
