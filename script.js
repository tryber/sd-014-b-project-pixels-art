const pixelColors = document.querySelector('#color-palette');
function changeColorSelected(event) {
  const colorClassSelected = document.querySelector('.selected');
  colorClassSelected.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(document.querySelector('.selected'));
}

pixelColors.addEventListener('click', changeColorSelected);

function changeTableColor(pixelTarget) {
  const colorClassSelected = document.querySelector('.selected');
  const color = getComputedStyle(colorClassSelected);
  pixelTarget.target.style.backgroundColor = color.backgroundColor;
  console.log(colorClassSelected.id);
}

const tablePixel = document.querySelector('#pixel-board');
tablePixel.addEventListener('click', changeTableColor);

const button = document.querySelector('#clear-board');
function clearBoard() {
  const pixelCells = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelCells.length; index += 1) {
    pixelCells[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearBoard);

const tableParent = document.getElementById('pixel-board');
console.log(tableParent);
function generatePixelCells(n) {
  // código da linha 4 a 7, visualizado e re-interpretado da url https://www.codegrepper.com/code-examples/javascript/how+to+remove+all+child+elements+of+div+in+javascript
  while (tableParent.firstChild) {
    tableParent.removeChild(tableParent.lastChild);
  }
  for (let index = 0; index < n; index += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'tr';
    tableParent.appendChild(newLine);
    for (let i = 0; i < n; i += 1) {
      const newCol = document.createElement('div');
      newCol.className = 'pixel';
      newLine.appendChild(newCol);
    }
  }
}

const generateCellsButton = document.querySelector('#generate-board');

function buttonEvent() {
  const inputValue = document.querySelector('#board-size').value;
  if (inputValue === '') {
    alert('Board Inválido!');
  } else if (inputValue > 5 && inputValue <= 50) {
    generatePixelCells(inputValue);
  } else if (inputValue <= 5) {
    generatePixelCells(5);
  } else if (inputValue >= 50) {
    generatePixelCells(50);
  }
}

generateCellsButton.addEventListener('click', buttonEvent);
function generateRandomColors() {
  const colorPaletteArray = document.getElementsByClassName('color');
  for (let index = 1; index < colorPaletteArray.length; index += 1) {
    const index1 = Math.trunc(Math.random() * (255));
    const index2 = Math.trunc(Math.random() * (255));
    const index3 = Math.trunc(Math.random() * (255));
    colorPaletteArray[index].style.backgroundColor = `rgb(${index1}, ${index2},${index3})`;
  }
}

generateRandomColors();
