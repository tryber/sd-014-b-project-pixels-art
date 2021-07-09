// eslint-disable-next-line func-names

// Criar div com as paletas de cores.

function createDivColors(quantidadeColors) {
  const divPalette = document.getElementById('color-palette');
  const classDiv = 'color';
  for (let index = 1; index <= quantidadeColors; index += 1) {
    const createBox = document.createElement('div');
    createBox.className = classDiv;
    divPalette.appendChild(createBox);
  }
}
createDivColors(4);

// Preencher cores na paleta de cores.

function addColor(colors) {
  const divColor = document.getElementsByClassName('color');
  for (let index = 0; index < divColor.length; index += 1) {
    const divIndex = divColor[index];
    for (let sIndex = 0; sIndex < colors.length; sIndex += 1) {
      const colorIndex = colors[index];
      divIndex.style.backgroundColor = colorIndex;
      divIndex.classList.add(`color-${colorIndex}`);
    }
  }
}

addColor(['black', 'red', 'blue', 'green']);

// Cria a tabela de divs, usando o display table.

function tablePixel(pixel) {
  const pixelBoard = document.getElementById('pixel-board');
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

function resetColorPixel() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

// Definir cor inicial selecionada, a funcao colorSelectedInitial, e chamada no window.onload - LINHA 74, com a cor que deseja-se ser a inicial.

function colorSeletectedInitial(color) {
  const colors = document.querySelectorAll('.color');
  const setColorInitial = color;
  for (let index = 0; index < colors.length; index += 1) {
    const bgColor = colors[index].style.backgroundColor;
    if (bgColor === setColorInitial) colors[index].classList.add('selected');
  }
}

window.onload = function onload() {
  resetColorPixel();
  colorSeletectedInitial('black');
};

// Difinir class selected
function handleChangeTech(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}
const divsColors = document.querySelectorAll('.color');
for (let index = 0; index < divsColors.length; index += 1) {
  const divsIndex = divsColors[index];
  divsIndex.addEventListener('click', handleChangeTech);
}

// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

const boxPixel = document.querySelectorAll('.pixel');
for (let index = 0; index < boxPixel.length; index += 1) {
  const pixelIndex = boxPixel[index];
  pixelIndex.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    const colorSelected = selected.style.backgroundColor;
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = colorSelected;
  });
}

// Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', () => {
  resetColorPixel();
});

// Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

