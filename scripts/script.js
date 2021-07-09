// [Requisito 1]
// Adiciona à página o título 'Paleta de Cores'
const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Paleta de Cores';
document.querySelector('body').appendChild(title);

// [Requisito 2 e 3]
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

// [Requisito 4]
// Adiciona à página um quadro de pixels, com 25 pixels.
// Cria quadro de pixel
const board = document.createElement('div');
board.id = 'pixel-board';
document.querySelector('body').appendChild(board);

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  // Cria uma linha
  const line = document.createElement('div');
  line.id = 'line';
  board.appendChild(line);
  // Cria pixel
  for (let index = 0; index < 5; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    line.appendChild(pixel);
  }
}

window.onload = function script() {
  // [Requisito 6]
  // Define a cor preta como cor inicial.
  black.classList.add('selected');
  let selectedColor = black;

  // [Requisito 7]
  // Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
  colors.forEach((color) => {
    color.addEventListener('click', (event) => {
      selectedColor.classList.remove('selected');
      event.target.classList.add('selected');
      selectedColor = event.target;
    });
  });
};
