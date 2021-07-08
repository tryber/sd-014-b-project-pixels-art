function createPalette() {
  let numberOfColors = 4;
  let colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < numberOfColors; index += 1) {
    let newColor = document.createElement('li');
    newColor.className = 'color';
    colorPalette.appendChild(newColor);
    if (index === 0) {
      newColor.style.backgroundColor = 'black';
    } else {
      newColor.style.backgroundColor = generateRandomColor();
    }
  }
}

createPalette();

function generateRandomColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function createPixelBoard() {
  let pixelBoard = document.querySelector('#pixel-board');
  let numberOfRows = 5;
  let numberOfColumns = 5;

  for (let rows = 0; rows < numberOfRows; rows += 1) {
    let newRow = document.createElement('div');
    newRow.className = 'tr';
    pixelBoard.appendChild(newRow);
    for (let columns = 0; columns < numberOfColumns; columns += 1) {
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel td';
      newPixel.style.backgroundColor = 'white';
      newRow.appendChild(newPixel);
    }
  }
}

createPixelBoard();
