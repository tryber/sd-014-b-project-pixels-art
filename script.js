// 2 - Adiciona à página uma paleta de quatro cores distintas.
// 3 - Adiciona a cor preta como a primeira cor da paleta de cores.
// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
const colorsPalette = ['black', 'blue', 'green', 'red'];
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

// 4 - Adicione à página um quadro de pixels, com 25 pixels.
const pixelBoard = document.querySelector('#pixel-board');

function createLis() {
  const liPixel = document.createElement('li');
  liPixel.classList.add('pixel');
  pixelBoard.appendChild(liPixel);
}

function createBoardColors() {
  const line = 5;
  for (let index = 1; index <= line; index += 1) {
    for (let colum = 1; colum <= line; colum += 1) {
      createLis();
    }
    const lineNext = document.createElement('br');
    pixelBoard.appendChild(lineNext);
  }
}
createBoardColors();

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
// O método 'window.getComputedStyle(element), permite pegar do element (elemento o qual será obtido o estilo, no caso os botões coloridos da paleta de cores) por meio do evento click todas suas propiedades CSS e com a função colors aplicar a com a tela de pixels.

const pixelScreeam = document.querySelectorAll('.pixel');

// function colorDefine(event) {
//   const classSelected = document.querySelector('.selected');
//   const colorSelected = window.getComputedStyle(classSelected).backgroundColor;
//   event.target.style.backgroundColor = colorSelected;
// }

// function setColor() {
//   for (let i = 0; i < pixelScreeam.length; i += 1) {
//     pixelScreeam[i].addEventListener('click', colorDefine);
//   }
// }
// setColor();

function setColor() {
  for (let i = 0; i < pixelScreeam.length; i += 1) {
    pixelScreeam[i].addEventListener('click', (event) => {
      const classSelected = document.querySelector('.selected');
      const colorSelected = window.getComputedStyle(classSelected).backgroundColor;
      event.target.style.backgroundColor = colorSelected;
    });
  }
}
setColor();

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

function whiteColor() {
  for (let i = 0; i < pixelScreeam.length; i += 1) {
    if (pixelScreeam[i] !== 'white') {
      pixelScreeam[i].style.backgroundColor = 'white';
    }
  }
}
clearBoard.addEventListener('click', whiteColor);

// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
