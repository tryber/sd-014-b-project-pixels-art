function createColorPalette() {
  const paletteColor = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.addEventListener('click', colorSelector)

    switch (index) {
      case 0:
        color.style.backgroundColor = 'black';
        color.classList.add('selected');
        break;

      case 1:
        color.style.backgroundColor = 'red';
        break;

      case 2: 
        color.style.backgroundColor = 'green';
        break;

      case 3:
        color.style.backgroundColor = 'blue';
        break;
      
      default:
        break;
    }

    paletteColor.appendChild(color);
  }
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let subIndex = 0; subIndex < 5; subIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paint)
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

function colorSelector(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function paint(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}

createColorPalette();
createPixelBoard();
