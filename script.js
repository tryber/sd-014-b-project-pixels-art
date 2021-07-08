// Requisito #4 - Função para criar o pixel-board
const pixelBoard = document.querySelector('#pixel-board');

function pixelBoardCreat(lines, columns) {
  for (let column = 1; column <= columns; column += 1) {
    const pixelColumns = document.createElement('div');
    pixelColumns.classList.add('pixel');
    pixelBoard.appendChild(pixelColumns);
  }
}

function pixelLinesCreat(lines) {
  for (let line = 1; line <= lines; line += 1) {
    const pixelLine = document.createElement('div');
    pixelBoard.appendChild(pixelLine);
    pixelBoardCreat(pixelLine, lines);
  }
}
pixelLinesCreat(5);

// Requisito #6
const blackColor = document.querySelector('#first-color');
blackColor.classList.add('selected');

// Requisito #7
const paletaDeCores = document.querySelectorAll('.color');

function colorSelector(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

for (let color of paletaDeCores) {
  color.addEventListener('click', colorSelector);
}
