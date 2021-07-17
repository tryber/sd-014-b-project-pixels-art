// 1 - Adicione à página o título "Paleta de Cores". OK
// 2 - Adicione à página uma paleta de quatro cores distintas. - OK
// 3 - Adicione a cor preta como a primeira cor da paleta de cores
// 4 - Adicione à página um quadro de pixels, com 25 pixels.
// 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel. --> CSS

// 6 - Defina a cor preta como cor inicial. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels
function setBlackColorZero() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementById('black').classList.add('selected'); // Referência: https://www.w3schools.com/howto/howto_js_add_class.asp
// const colorZero = 'black';
}

// 7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
const color = document.getElementsByClassName('color');
function selectColor(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected'); // Remover classe 'selected'
  }
  event.target.classList.add('selected'); // Adicionar classe 'selected' no element clicado -> pickColor()
  console.log(document.getElementsByClassName('selected')[0].style.backgroundColor);
}

function pickColor() {
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', selectColor);
  }
}
pickColor();

// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta,
// faz com que o pixel seja preenchido com a cor selecionada.

function paint() {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  this.style.backgroundColor = colorSelected;
  console.log(this);
  console.log(colorSelected);
}

function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paint);
  }
}
paintPixel();

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const clearButton = document.getElementById('clear-board'); // Atribuir elemento do botão clear-board à constante clearButton
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const index = document.getElementsByClassName('pixel').length;
  for (let i = 0; i < index; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

// const colorPainter = document.querySelector('.selected').style.backgroundColor;
// document.getElementsByClassName('pixel')[i].style.backgroundColor = colorPainter;

/*
function createPixelBoard() {
    let size = document.getElementById('size-board');
    if (size.value = '') {
        alert('Board inválido!');
    }
    if (size < 5) { size = 5;};
    if (size > 50) { size = 50;};
    // const size = document.getElementById('board-size'); // Atribuir valor do input 'board-size' à constante 'size'
    // Abaixo: duplo loop para percorrer colunas (2o loop) em cada linha da tabela (1o loop)
    for (let i = 0; i < size; i += 1) { // Loop de rows, linhas, da tabela
          const pixelRow = document.createElement('tr'); // Criar e atribuir elemento 'table row' à constante pixelRow
          document.getElementById('pixel-board').appendChild(pixelRow); // Append do 'table-row' ao pixel-board
          for (let j = 0; j < size; j += 1) { //  Loop de colunas da tabela
            const pixel = document.createElement('td'); // Criar e atribuir elemento 'td'(table cell) à constante pixel
            document.querySelector('tr')[i].appendChild(pixel); // Append do pixel à 'table row' de índice 'i'
  }
}
} */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function generatePixelBoard() {
  const boardSize = document.getElementById('board-size').value; // Atribuir à constante o elemento input com id 'board-size'
  // const size = boardSize.value;
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = ''; // 'Zerar' elemento do board antes de popular com os pixels
  let aux = boardSize;
  if (aux < 5) { aux = 5; } // Requisito 11 - Valor menor que 5, considerar 5 como padrão
  if (aux > 50) { aux = 50; } // Requisito 11 - Valor maior que 50, considerar 50 como padrão
  for (let i = 0; i < aux; i += 1) { // Loop de rows, linhas, da tabela
    const pixelRow = document.createElement('tr'); // Criar e atribuir elemento 'table row' à constante pixelRow
    pixelRow.className = 'pixel-rows';
    document.getElementById('pixel-board').appendChild(pixelRow); // Append do 'table-row' ao pixel-board
    for (let j = 0; j < aux; j += 1) { //  Loop de colunas da tabela
      const pixel = document.createElement('td'); // Criar e atribuir elemento 'td'(table cell) à constante pixel
      pixel.className = 'pixel';
      document.querySelectorAll('.pixel-rows')[i].appendChild(pixel); // Append do pixel à 'table row' de índice 'i'
    }
  }
}

function createPixelBoard() {
  if (document.getElementById('board-size').value === '') { // Input vazio
    alert('Board inválido!');
  }
  generatePixelBoard();
}

const generateBoard = document.getElementById('generate-board'); // Atribuir à constante o botão com id 'generate-board'
generateBoard.addEventListener('click', createPixelBoard);

// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// Função abaixo baseada em: https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values

function numRandom() {
  const num = Math.floor(Math.random() * 16777215);
  return (num === 0 || num === 16777215) ? numRandom() : num; // 0 -> preto; 16777215-> branco
}

function setRandomColors() {
  const firstColor = `#${numRandom().toString(16)}`; // Sugestão ESLint: prefer-template
  const secondColor = `#${numRandom().toString(16)}`;
  const thirdColor = `#${numRandom().toString(16)}`;
  // const thirdColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; -> Sem considerar exceções de preto e branco
  // 16777215 <--> FFFFFF ; decimal <--> hexadecimal
  // https://www.w3schools.com/jsref/jsref_tostring_number.asp
  // https://www.rapidtables.com/convert/number/decimal-to-hex.html
  document.getElementById('color1').style.backgroundColor = firstColor;
  document.getElementById('color2').style.backgroundColor = secondColor;
  document.getElementById('color3').style.backgroundColor = thirdColor;
}

window.onload = function start() {
  setBlackColorZero(); // 6 - Defina a cor preta como cor inicial.
  setRandomColors(); // 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
  // createPixelBoard();
};
