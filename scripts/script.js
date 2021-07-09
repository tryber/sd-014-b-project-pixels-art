// Cria e adiciona título no html
const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Paleta de Cores';
document.querySelector('body').appendChild(title);

// Cria elementos da paleta de cores
const colorPalette = document.createElement('div');
const colorBackground = document.createElement('div');
const colorCyan = document.createElement('div');
const colorOrange = document.createElement('div');
const colorPink = document.createElement('div');

// Insere cores nos elementos da paleta
colorBackground.style.backgroundColor = '#000000';
colorCyan.style.backgroundColor = '#8be9fd';
colorOrange.style.backgroundColor = '#ffb86c';
colorPink.style.backgroundColor = '#ff79c6';

// Insere classe aos elementos da paleta
colorPalette.id = 'color-palette';
colorBackground.className = 'color';
colorCyan.className = 'color';
colorOrange.className = 'color';
colorPink.className = 'color';

// Insere elementos da paleta no html
document.querySelector('body').appendChild(colorPalette);
colorPalette.appendChild(colorBackground);
colorPalette.appendChild(colorCyan);
colorPalette.appendChild(colorOrange);
colorPalette.appendChild(colorPink);

// Insere estilo para os elementos com a clsse 'color'
const colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
  const color = colors[index];
  color.style.display = 'table-cell';
  color.style.padding = '1.5em';
  // slint-disable-next-line sonarjs/no-duplicate-stringe
  color.style.border = 'black solid 1px';
  color.style.borderRadius = '50%';
}

// Cria um quadro de píxel 5x5 de elementos
const canvas = document.createElement('div');
canvas.className = 'canvas';
canvas.id = 'pixel-board';
document.querySelector('body').appendChild(canvas);
canvas.style.width = '210px';
canvas.style.height = '210px';
canvas.style.border = 'black solid 1px';
canvas.style.margin = '1.5em';
canvas.style.marginLeft = '0';
canvas.style.gridTemplateColumns = 'auto auto auto auto auto';
canvas.style.display = 'grid';
for (let index = 0; index < 25; index += 1) {
  const div = document.createElement('div');
  div.className = 'pixel';
  div.innerHTML = index;
  div.style.border = 'black solid 1px';
  div.style.display = 'table-cell';
  div.style.width = '40px';
  div.style.height = '40px';
  div.style.backgroundColor = '#ffffff';
  canvas.appendChild(div);
}
