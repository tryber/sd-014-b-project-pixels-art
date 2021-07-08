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

// Colocar color na paletas de cores.

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
