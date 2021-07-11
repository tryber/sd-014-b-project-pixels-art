// eslint-disable-next-line func-names

// Criar div com as paletas de cores.
const divPalette = document.getElementById('color-palette');

function createDivColors(quantidadeColors) {
  const classDiv = 'color';
  for (let index = 1; index <= quantidadeColors; index += 1) {
    const createBox = document.createElement('div');
    createBox.className = classDiv;
    divPalette.appendChild(createBox);
  }
}
createDivColors(4);

// Preencher cores na paleta de cores.
const divColor = document.getElementsByClassName('color');

function addColor(colors) {
  for (let index = 0; index < divColor.length; index += 1) {
    const divIndex = divColor[index];
    for (let sIndex = 0; sIndex < colors.length; sIndex += 1) {
      const colorIndex = colors[index];
      divIndex.style.backgroundColor = colorIndex;
      divIndex.classList.add(colorIndex);
    }
  }
}
const color1 = `#${Math.floor(Math.random() * 777215)}`;
const color2 = `#${Math.floor(Math.random() * 777215)}`;
const color3 = `#${Math.floor(Math.random() * 777215)}`;

addColor(['black', color1, color2, color3]);

// Cria a tabela de divs, usando o display table.
const pixelBoard = document.getElementById('pixel-board');

function tablePixel(pixel) {
  for (let index = 1; index <= pixel; index += 1) {
    const createBoxCell = document.createElement('div');
    createBoxCell.classList.add('pixel-tr');
    pixelBoard.appendChild(createBoxCell);
  }
  const pixelCell = document.getElementsByClassName('pixel-tr');
  for (let index = 0; index < pixelCell.length; index += 1) {
    const pixelIndex = pixelCell[index];
    for (let sIndex = 1; sIndex <= pixel; sIndex += 1) {
      const createBoxRow = document.createElement('div');
      createBoxRow.classList.add('pixel');
      pixelIndex.appendChild(createBoxRow);
    }
  }
}
tablePixel(5);

// Define cor branco, assim que a pagina e carregada, no window.onload.
const pixel = document.getElementsByClassName('pixel');

function resetColorPixel() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

// Definir cor inicial selecionada, a funcao colorSelectedInitial, e chamada no window.onload - LINHA 74, com a cor que deseja-se ser a inicial.

function colorSeletectedInitial(color) {
  const setColorInitial = color;
  for (let index = 0; index < divColor.length; index += 1) {
    const bgColor = divColor[index].style.backgroundColor;
    if (bgColor === setColorInitial) divColor[index].classList.add('selected');
  }
}

window.onload = function onload() {
  resetColorPixel();
  colorSeletectedInitial('black');
};

// Difinir class selected

function handleChangeSelected(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}
const divsColors = document.querySelectorAll('.color');
for (let index = 0; index < divsColors.length; index += 1) {
  const divsIndex = divsColors[index];
  divsIndex.addEventListener('click', handleChangeSelected);
}

// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

// const selected = document.querySelector('.selected');
let boxPixel = document.querySelectorAll('.pixel');
function colorBox() {
  for (let index = 0; index < boxPixel.length; index += 1) {
    const pixelIndex = boxPixel[index];
    pixelIndex.addEventListener('click', (event) => {
      const evento = event;
      const selected = document.querySelector('.selected').style.backgroundColor;
      evento.target.style.backgroundColor = selected;
    });
  }
}
colorBox();

// Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', () => {
  resetColorPixel();
});

// Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

function clearBoard() {
  pixelBoard.innerHTML = '';
}

const buttonSizeBoard = document.getElementById('generate-board');

buttonSizeBoard.addEventListener('click', () => {
  const valueInput = document.getElementById('board-size').value;
  let inputNumber = parseInt(valueInput, 10);
  if (inputNumber > 50) inputNumber = 50;
  if (inputNumber < 5) inputNumber = 5;
  if (inputNumber > 0) {
    clearBoard();
    tablePixel(inputNumber);
    boxPixel = document.querySelectorAll('.pixel');
    resetColorPixel();
    colorBox();
  } else {
    alert('Board inválido!');
  }
});

