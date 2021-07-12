window.onload = function load () {
    const colors = document.querySelectorAll('.color');

colors[0].setAttribute('style', 'background-color: black');
colors[0].className = 'selected color';
colors[1].setAttribute('style', 'background-color: green');
colors[2].setAttribute('style', 'background-color: blue');
colors[3].setAttribute('style', 'background-color: pink');

const lineUser = 5;
const columnUser = 5;

createLine(lineUser);
const lines = document.querySelectorAll('.tr');
fillCells(columnUser, lines);

selectedColor(colors);
}


function createLine(number) {
  for (let col = 1; col <= number; col += 1) {
    const divLine = document.createElement('div');
    divLine.setAttribute('class', 'tr');
    document.querySelector('#table').appendChild(divLine);
  }
}

function fillCells(cells, paramLines) {
  for (let line = 0; line < paramLines.length; line += 1) {
    for (let col = 1; col <= cells; col += 1) {
      const div = document.createElement('div');
      div.setAttribute('class', 'pixel td');
      paramLines[line].appendChild(div);
    }
  }
}

function selectedColor(colors) {
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].addEventListener('click', function () {
        const oldSelected = document.querySelector('.selected');
        oldSelected.className = 'color';
        colors[index].className = 'selected color';
      });
    }
  }