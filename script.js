// Função que gera uma cor aleatória
function generateRandomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

// Função que seleciona uma das cores da paleta
function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// Função que cria a paleta de cores
function createPalette() {
  const numberOfColors = 4;
  const colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < numberOfColors; index += 1) {
    const newColor = document.createElement('li');
    newColor.className = 'color';
    colorPalette.appendChild(newColor);
    if (index === 0) {
      newColor.style.backgroundColor = 'black';
      newColor.classList.add('selected');
    } else {
      newColor.style.backgroundColor = generateRandomColor();
    }
    newColor.addEventListener('click', selectColor);
  }
}

createPalette();

let pixelBoard;

// Função que cria o elemento quadro de pixels
function createPixelBoardElement() {
  const boardContainer = document.querySelector('#board-container');
  pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  boardContainer.appendChild(pixelBoard);
}

createPixelBoardElement();

// Função que pinta o pixel com a cor selecionada
function changePixelColor() {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  this.style.backgroundColor = selectedColor;
}

// Tamanho do quadro inicial
let numberOfRows = 5;
let numberOfColumns = 5;

// Função que cria e adiciona os pixels ao quadro
function createPixelBoard() {
  for (let rows = 0; rows < numberOfRows; rows += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'tr';
    pixelBoard.appendChild(newRow);
    for (let columns = 0; columns < numberOfColumns; columns += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel td';
      newPixel.style.backgroundColor = 'white';
      newRow.appendChild(newPixel);
      newPixel.addEventListener('click', changePixelColor);
    }
  }
}

createPixelBoard();

// Cria o botão que limpa o quadro
const paletteContainer = document.querySelector('#palette-container');
const btnClear = document.createElement('button');
btnClear.innerText = 'Limpar';
btnClear.id = 'clear-board';
paletteContainer.appendChild(btnClear);

// Adiciona evento de clique ao botão de Limpar o quadro com a função que pinta todos os pixels da cor branca
btnClear.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Cria o input que recebe o tamanho do board
const inputBoardSize = document.createElement('input');
inputBoardSize.type = 'number';
inputBoardSize.id = 'board-size';
inputBoardSize.min = '1';
inputBoardSize.placeholder = 'Insira um número de 5 a 50';
paletteContainer.appendChild(inputBoardSize);

// Cria o botão que cria o board
const btnGenerateBoard = document.createElement('button');
btnGenerateBoard.id = 'generate-board';
btnGenerateBoard.innerText = 'VQV';
paletteContainer.appendChild(btnGenerateBoard);

// Função que remove o quadro
function removeBoard() {
  const getBoard = document.querySelector('#pixel-board');
  getBoard.remove();
}

// Cria um novo quadro a partir do input do usuário
btnGenerateBoard.addEventListener('click', () => {
  const inputValue = inputBoardSize.value;
  let inputNumber = parseInt(inputValue, 10);
  if (inputValue === '') {
    window.alert('Board inválido!');
  } else if (inputNumber < 5) {
    inputNumber = 5;
  } else if (inputNumber > 50) {
    inputNumber = 50;
  }
  removeBoard();
  createPixelBoardElement();
  numberOfRows = inputNumber;
  numberOfColumns = inputNumber;
  createPixelBoard();
  inputBoardSize.value = '';
});

/*
Referências Consultadas:
Gerar cor aleatória: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
this = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
*/
