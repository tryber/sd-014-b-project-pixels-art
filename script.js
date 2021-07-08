function colorSelector(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function paint(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const element = event.target;
  element.style.backgroundColor = selectedColor;
}

function randomHexColorGenerator() {
  const hexCharacters = 'abcdef1234567890'
  let hexColorCode = '#';
  for (let index = 0; index < 6; index++) {
    hexColorCode += hexCharacters.charAt(Math.floor(Math.random() * 16));
  }
  return hexColorCode;
};

function createColorPalette() {
  const paletteColor = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.addEventListener('click', colorSelector);

    if (index === 0) {
      color.style.backgroundColor = 'black';
      color.classList.add('selected');
    } else {
      color.style.backgroundColor = randomHexColorGenerator();
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
      pixel.addEventListener('click', paint);
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

function newBoard() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const element = pixels[index];
    element.style.backgroundColor = 'white';
  }
}

createColorPalette();
createPixelBoard();
