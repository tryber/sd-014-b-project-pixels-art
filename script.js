// me perdoem os nomes de algumas const mas só assim pra me achar na lógica (por enquanto)
const rainbow = document.getElementById('color-palette');
const judasPriest = document.getElementById('pixel-board');
const metallica = document.getElementById('clear-board');
const kingDiamond = document.querySelectorAll('.pixel');
const boardSize = document.getElementById('board-size');
const gerarButton = document.getElementById('generate-board');

// requisitos 7 e 8
function colorPixel(event) {
  const pixColor = document.getElementById('color-palette').childNodes;
  for (let index = 1; index < pixColor.length; index++) {
    pixColor[index].className = 'color';
  }
  event.target.className = 'color selected';
}
rainbow.addEventListener('click', colorPixel);

function rainbowBoard(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const selectedColor = window.getComputedStyle(colorSelected).backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}
judasPriest.addEventListener('click', rainbowBoard);


// requisito 9
function backgroundWhite() {
  for (let index = 0; index < kingDiamond.length; index++ ) {
    kingDiamond[index].style.backgroundColor = 'white';
  }
}
metallica.addEventListener('click', backgroundWhite);

// requisitos 10 e 11
function createBoard(a) {
  for (let i = 0; i < a; i += 1) {
    const celineDion = document.createElement('div');
    judasPriest.appendChild(celineDion);
    celineDion.classList.add('coluna');

    for (let b = 0; b < a; b += 1) {
    const shaniaTwain = document.createElement('div');
      shaniaTwain.classList.add('pixel');
    celineDion.appendChild(shaniaTwain);
    }
  }
}
createBoard();

function buttonNumberInput() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  }
  if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  if (boardSize.value >= 50) {
    boardSize.value = 50;
  }
  document.getElementById('pixel-board').innerHTML = '';
  createBoard(boardSize.value);
}
gerarButton.addEventListener('click', buttonNumberInput);


// requisito 12//
function generatorColor() {
  const newColor = document.getElementsByClassName('color');
  for (let index = 1; index < newColor.length; index += 1) {
    const index1 = Math.floor(Math.random() * (255));
    const index2 = Math.floor(Math.random() * (255));
    const index3 = Math.floor(Math.random() * (255));
    newColor[index].style.backgroundColor = `rgb(${index1}, ${index2},${index3})`; 
  }
}

generatorColor();

// referências:
// https://github.com/susanschen/Pixel-Art-Maker.git
// https://www.youtube.com/watch?v=mys7LGIlEf8&ab_channel=TECHNOLOGYFAQ para o generatorColor
// https://codeguppy.com/site/tutorials/color-blocky.html
// https://github.com/tryber/sd-07-block5-project-pixels-art/pull/137 me baseei para o button clear 
