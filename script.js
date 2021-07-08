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
