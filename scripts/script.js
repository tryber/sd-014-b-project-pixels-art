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
colorBackground.style.backgroundColor = '#282a36';
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
  color.style.border = 'black solid 1px';
  color.style.borderRadius = '50%';
}
