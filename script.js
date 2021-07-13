/* var test = document.getElementsByClassName('color')[0];
test.classList.add('selected'); */

const colorDivs = document.getElementsByClassName('color');
colorDivs[0].classList.add('selected');

// Atribuindo cores às divs #1~#4
const targetColors = ['black', '#315F1C', '#298E46', '#90DFA7'];
for (let index = 0; index < colorDivs.length; index += 1) {
  colorDivs[index].style.backgroundColor = targetColors[index];
}

// nomeando uma variável pra cada div-cor:
const setBlack = document.getElementsByClassName('color')[0];
const setColor1 = document.getElementsByClassName('color')[1];
const setColor2 = document.getElementsByClassName('color')[2];
const setColor3 = document.getElementsByClassName('color')[3];

// Eventos click
setBlack.addEventListener('click', selectColor);
setColor1.addEventListener('click', selectColor);
setColor2.addEventListener('click', selectColor);
setColor3.addEventListener('click', selectColor);

// Req 7: Reseleciona classe 'selected':
function selectColor(evento) {
  let test = document.getElementsByClassName('color');
  for (let index = 0; index < test.length; index += 1) {
    test[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

// Req 8 - Pintando os pixels
let pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paint);
}

function paint(evento) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  evento.target.style.backgroundColor = selectedColor;
}

// Req 9 - Apagando os pixels
// Corrigir botão de Limpar quando board for maior que 5
const resetButton = document.querySelector('#clear-board');
resetButton.addEventListener('click', clearBoard);

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

// Req 10
const boardSize = document.querySelector('#board-size'); // elemento input
const boardGenerator = document.querySelector('#generate-board'); // button VQV

boardGenerator.addEventListener('click', verifySize);

function verifySize () {
  boardSize.value
  if (boardSize.value === '') {
    alert('Board inválido!');
  } if (boardSize.value < 5) {
    boardSize.value = 5;
  } if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  createBoard();
}

function createBoard () {
  let board = document.querySelector('#pixel-board')// elemento table
  board.innerHTML = '';
  for (let index = 0; index < boardSize.value; index += 1) {
    let newTr = document.createElement('tr');
    newTr.classList.add('tr');
    board.appendChild(newTr);
    let tableLine = document.getElementsByClassName('tr')[index]; 
    for (let index2 = 0; index2 < boardSize.value; index2 += 1) {
      let newPixel = document.createElement('td');
      newPixel.classList.add('pixel');
      tableLine.appendChild(newPixel);
    }
  }
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paint);
  }
}
