const colorPalette = document.querySelector('#color-palette');
// Section que contém a paleta de quatro cores do requisito 2
const pixelBoard = document.querySelector('#pixel-board');
// Section que contém o quadro de pixels que é gerado dinâmicamente
const clearButton = document.querySelector('#clear-board');

const generateBoardButton = document.querySelector('#generate-board');

function createColor(rgbString) {
  const createElement = document.createElement('div');
  const color = colorPalette.appendChild(createElement);
  color.style.backgroundColor = rgbString;
  color.style.border = '1px solid black';
  color.setAttribute('class', 'color');
}

createColor('rgb(0, 0, 0)');

// Chama a função que cria cores criando a cor preta como a primeira cor

// Ajuda do Luiz Gustavo para utilizar o Math.floor e Math.random gerando um numero aleatorio e arredondando ele.

createColor(`#${Math.floor(Math.random() * 999999)}`);

createColor(`#${Math.floor(Math.random() * 999999)}`);

createColor(`#${Math.floor(Math.random() * 999999)}`);

// Dica do Luiz Gustavo 

function createNewPixelBoard(value) {
  for (let i = 0; i < value; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('pixel-line');
    pixelBoard.appendChild(createPixel);
  }
  const line = document.querySelectorAll('.pixel-line');
  for (let i2 = 0; i2 < line.length; i2 += 1) {
    for (let i3 = 0; i3 < value; i3 += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      line[i3].appendChild(createPixel);
    }
  }
}

createNewPixelBoard(5);

function deleteBoard() {
  pixelBoard.innerHTML = '';
}

generateBoardButton.addEventListener('click', () => {
  const sizeInput = document.querySelector('#board-size').value;
  let a = parseInt(sizeInput, 10);
  if (a > 50) {
    a = 50;
  } if (a < 5) {
    a = 5;
  } if (a >= 5) {
    deleteBoard();
    createNewPixelBoard(a);
  } else {
    alert('Board inválido!');
  }
});

function defaultColor() {
  const colors = document.querySelectorAll('.color');
  colors[0].classList.add('selected');
}

defaultColor();

function selectColor(event) {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

colorPalette.addEventListener('click', selectColor);

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const evento = event;
  evento.target.style.backgroundColor = selectedColor;
  if (pixelBoard.style.backgroundColor !== 'white') {
    pixelBoard.style.backgroundColor = 'white';
  }
}

pixelBoard.addEventListener('click', paintPixel);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
