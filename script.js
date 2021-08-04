const setColorDiv = document.getElementsByClassName('color');
setColorDiv[0].classList.add('selected');
let targetColors = ['black', 'yellow', 'brown', 'blue']; // seta as cores iniciais
let pixels = document.querySelectorAll('.pixel');



// Referencia do colega Thales Lima da mesma turma
function coloringPalette() {
  for (let index = 0; index < setColorDiv.length; index += 1) {
    setColorDiv[index].style.backgroundColor = targetColors[index];
  }
}

function selectColor(event) {
  for (let index = 0; index < setColorDiv.length; index += 1) {
    setColorDiv[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function colorPaintPixel(pixel) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = selectedColor;
}

// função que recebe o valor de clear-board para aplicar white quando invocada!
function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

// ajuda do matheus kaffka com a criação
// função que cria elementos tr, e, dentro deeles os elementos td, tendo como referencia o tamanho da board de pixel
function createBoard() {
  const createBoard = document.querySelector('#pixel-board');
  createBoard.innerHTML = '';
  for (let index = 0; index < boardSize.value; index += 1) {
    const createTr = document.createElement('tr');
    createTr.classList.add('tr');
    createBoard.appendChild(createTr);
    const tableLine = document.getElementsByClassName('tr')[index];
    for (let index2 = 0; index2 < boardSize.value; index2 += 1) {
      const createPixel = document.createElement('td');
      createPixel.classList.add('pixel');
      tableLine.appendChild(createPixel);
    }
  }
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].addEventListener('click', colorPaintPixel);
  }
}

// função que verifica se, o valor recebido é inválido, menor que 5 ou maior que 50
function verifySize() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } if (boardSize.value < 5) {
    boardSize.value = 5;
  } if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  createBoard();
}

for (let index = 0; index < setColorDiv.length; index += 1) {
    setColorDiv[index].addEventListener('click', selectColor);
}

for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorPaintPixel);
}

const resetButton = document.querySelector('#clear-board');
resetButton.addEventListener('click', clearBoard);

const boardSize = document.querySelector('#board-size');
const boardGenerator = document.querySelector('#generate-board');



boardGenerator.addEventListener('click', verifySize);

window.onload = coloringPalette();


//  OBS: DIRIGIR APLAUSOS PARA AMBOS OS COLEGAS DEPOIS!