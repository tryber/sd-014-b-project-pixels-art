// eslint-disable-next-line func-names
window.onload = function () {
  resetColorPixel();
};
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

// Cria a tabela de divs.

function tablePixel(row, cell) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 1; index <= cell; index += 1) {
    const createBoxCell = document.createElement('div');
    createBoxCell.classList.add('pixel-tr');
    pixelBoard.appendChild(createBoxCell);
  }
  const pixelCell = document.getElementsByClassName('pixel-tr');
  for (let index = 0; index < pixelCell.length; index += 1) {
    const pixelIndex = pixelCell[index];
    for (let sIndex = 1; sIndex <= row; sIndex += 1) {
      const createBoxRow = document.createElement('div');
      createBoxRow.classList.add('pixel');
      pixelIndex.appendChild(createBoxRow);
    }
  }
}

tablePixel(5, 5);

function resetColorPixel() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
