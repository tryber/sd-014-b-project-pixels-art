// Função para criar o pixel-board
let pixelBoard = document.querySelector('#pixel-board');

function pixelBoardCreat(lines, columns) {
  for (let column = 1; column <= columns; column += 1) {
    let pixelColumns = document.createElement('div');
    pixelColumns.classList.add('pixel');
    pixelBoard.appendChild(pixelColumns);
  }
}

function pixelLinesCreat(lines) {
  for (let line = 1; line <= lines; line += 1) {
    let pixelLine = document.createElement('div');
    pixelBoard.appendChild(pixelLine);
    pixelBoardCreat(pixelLine, lines);
  }
}
pixelLinesCreat(5);
