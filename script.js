// Selecting each color palette.
function createLine(number) {
  for (let col = 1; col <= number; col += 1) {
    const divLine = document.createElement('div');
    divLine.setAttribute('class', 'tr');
    document.querySelector('#table').appendChild(divLine);
  }
}

// Preenchendo as colunas do pixel-board.
function fillCells(cells, paramLines) {
  for (let line = 0; line < paramLines.length; line += 1) {
    for (let col = 1; col <= cells; col += 1) {
      const div = document.createElement('div');
      div.setAttribute('class', 'pixel td');
      paramLines[line].appendChild(div);
    }
  }
}

window.onload = function load() {
  const colors = document.querySelectorAll('.color');

  colors[0].setAttribute('style', 'background-color: black');
  colors[1].setAttribute('style', 'background-color: green');
  colors[2].setAttribute('style', 'background-color: yellow');
  colors[3].setAttribute('style', 'background-color: pink');
  colors[0].setAttribute('class', 'selected');

  const lineUser = 5;
  const columnUser = 5;

  createLine(lineUser);
  const lines = document.querySelectorAll('.tr');
  fillCells(columnUser, lines);
};
