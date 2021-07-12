// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// Referência: https://github.com/tryber/sd-013-a-project-pixels-art/blob/luizaantiques-project-pixels-art/script.js

function colorsRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}
// 2 - Adiciona à página uma paleta de quatro cores distintas.
// 3 - Adiciona a cor preta como a primeira cor da paleta de cores.
// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
// const colorsPalette = ['black', 'blue', 'green', 'red'];
const colorsPalette = ['black', colorsRandom(), colorsRandom(), colorsRandom()];

const containerColors = document.querySelector('#color-palette');

function createPaletteColors() {
  for (let color = 0; color < colorsPalette.length; color += 1) {
    const newColor = document.createElement('button');
    newColor.classList.add('color');
    newColor.style.backgroundColor = colorsPalette[color];
    if (newColor.style.backgroundColor === 'black') {
      newColor.classList.add('selected');
    }
    containerColors.appendChild(newColor);
  }
}
createPaletteColors();

// // 4 - Adicione à página um quadro de pixels, com 25 pixels.
const pixelBoard = document.querySelector('#pixel-board');

function createLis() {
  const liPixel = document.createElement('li');
  liPixel.classList.add('pixel');
  liPixel.style.backgroundColor = 'white';
  pixelBoard.appendChild(liPixel);
}

function createBoardColors(inputValue) {
  for (let line = 1; line <= inputValue; line += 1) {
    for (let colum = 1; colum <= inputValue; colum += 1) {
      createLis();
    }
    const lineNext = document.createElement('br');
    pixelBoard.appendChild(lineNext);
  }
}
createBoardColors(5);

// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
// Adiciona a classe selected no elemento clicado e retira do anterior que a possuia
const color = document.querySelectorAll('.color');

function addClass(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addClassSelected() {
  for (let j = 0; j < color.length; j += 1) {
    color[j].addEventListener('click', addClass);
  }
}
addClassSelected();

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// O método 'window.getComputedStyle(element), permite pegar do element (elemento o qual será obtido o estilo, no caso os botões coloridos da paleta de cores) por meio do evento click da funcão addClassSelected, é aplicado a classe selected a um dos botões coloridos, e com a função setColor se pode pegar as a cor do botão que está com a classe selected e ao clicar nos pixels aplicar a eles a mesma cor.

const pixelScreeam = document.querySelectorAll('.pixel');

function colorPalette() {
  for (let i = 0; color.length; i += 1) {
    if (color[i].classList.contains('selected')) {
      return color[i].style.backgroundColor;
    }
  }
}

function setColor() {
  for (let i = 0; i < pixelScreeam.length; i += 1) {
    pixelScreeam[i].addEventListener('click', () => {
      const setColorBoard = colorPalette();
      pixelScreeam[i].style.backgroundColor = setColorBoard;
    });
  }
}
setColor();

// function setColor() {
//   for (let i = 0; i < pixelScreeam.length; i += 1) {
//     pixelScreeam[i].addEventListener('click', (event) => {
//       const classSelected = document.querySelector('.selected');
//       const colorSelected = window.getComputedStyle(classSelected).backgroundColor;
//       const clickedPixel = event.target;
//       clickedPixel.style.backgroundColor = colorSelected;
//     });
//   }
// }
// setColor();

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// Função que cria o botão de limpar cores.
const buttonConteiner = document.querySelector('#button-conteiner');
function createClearButton(buttonName) {
  const newbutton = document.createElement('button');

  newbutton.innerHTML = buttonName;
  newbutton.id = 'clear-board';
  buttonConteiner.appendChild(newbutton);
}
createClearButton('Limpar');

// Adiciona um evento ao botão, deixando os pixels brancos, limpa a tela de colorir.
const clearBoard = document.querySelector('#clear-board');

clearBoard.addEventListener('click', () => {
  for (let i = 0; i < pixelScreeam.length; i += 1) {
    pixelScreeam[i].style.backgroundColor = 'white';
  }
});

// // 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

function createValueImput(buttonName) {
  const newInput = document.createElement('input');

  newInput.placeholder = buttonName;
  newInput.id = 'board-size';
  newInput.type = 'number';
  buttonConteiner.appendChild(newInput);
}
createValueImput('5');

const boardSize = document.querySelector('#board-size');

function createValueButton(buttonName) {
  const newbutton = document.createElement('button');

  newbutton.innerHTML = buttonName;
  newbutton.id = 'generate-board';
  buttonConteiner.appendChild(newbutton);
}
createValueButton('VQV');

const generateBoard = document.querySelector('#generate-board');

// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// Referência: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
// 11 - Limite o tamanho mínimo em 5 e máximo em 50 do board
// pixelBoard.inerHTML = ''; => faz com que a cada interação o quadro de pixel anteriormente formado seja apagado e o novo seja posto em seu lugar.
generateBoard.addEventListener('click', () => {
  const number = boardSize.value;
  if (number === '') {
    alert('Board inválido!');
  } else if (number < 5) {
    pixelBoard.innerHTML = '';
    createBoardColors(5);
    alert('5 é o mínimo');
    boardSize.value = '';
  } else if (number > 50) {
    pixelBoard.innerHTML = '';
    createBoardColors(50);
    alert('50 é o limite');
    boardSize.value = '';
  } else {
    pixelBoard.innerHTML = '';
    createBoardColors(number);
    boardSize.value = '';
  }
});
