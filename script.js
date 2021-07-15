
function paletteColor() {
  const getPalette = document.getElementsByClassName('color');
  
  for (let index of getPalette) {
    if (index === getPalette[0]) {
      index.style.background = 'black';
    } else if (index === getPalette[1]) {
      index.style.background = 'green';
    } else if (index === getPalette[2]) {
      index.style.background = 'blue';
    } else if (index === getPalette[3]) {
      index.style.background = 'yellow';
    }
  }
}

paletteColor();


function creatPixilsBoard() {
  const pixelsBoard = document.querySelector('#pixel-board');
  for (let index = 0; index <= 25; index += 1) {
    const creatPixel = document.createElement('div');
    creatPixel.classList.add('pixel');
    pixelsBoard.appendChild(creatPixel);
  }
}

creatPixilsBoard();