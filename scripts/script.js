// [Requisito 1]
// Adiciona à página o título 'Paleta de Cores'
const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Paleta de Cores';
document.querySelector('body').appendChild(title);

// [Requisito 2]
// Adiciona à página uma paleta de quatro cores distintas
// Cria paleta de cores
const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
document.querySelector('body').appendChild(colorPalette);

// Cria cores
for (let index = 0; index < 4; index += 1) {
  const color = document.createElement('div');
  color.classList.add('color');
  colorPalette.appendChild(color);
}

// Adiciona estilo de backgroundColor para as cores
const colors = document.querySelectorAll('.color');
const black = colors[0];
const cyan = colors[1];
const magenta = colors[2];
const yellow = colors[3];
black.style.backgroundColor = 'black';
cyan.style.backgroundColor = 'cyan';
magenta.style.backgroundColor = 'magenta';
yellow.style.backgroundColor = 'yellow';
