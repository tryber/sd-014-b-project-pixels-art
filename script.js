const containerPalhetas = document.querySelector('#color-palette');
const boxColor = ['black', 'blue', 'green', 'red'];
let corSelecionada = '';
let whiteBox = document.querySelector('#pixel-board');
let btnLimparQuadro = document.querySelector('#clear-board');
let inputBoardSize = document.querySelector('#board-size');
let btnGenerate = document.querySelector('#generate-board');
let n = 5;
inputBoardSize.value = n;

for (let i = 0; i < 4; i += 1) {
  const boxPalheta = document.createElement('div');
  if (i === 0) {
    boxPalheta.className = 'color selected';
    corSelecionada = boxColor[i];
  } else {
    boxPalheta.className = 'color';
  }
  boxPalheta.style.backgroundColor = boxColor[i];
  containerPalhetas.appendChild(boxPalheta);
}

// Quadro branco
function gerarQuadroBranco() {
  const containerWhiteBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < n; i += 1) {
    const lineBox = document.createElement('div');
    containerWhiteBoard.appendChild(lineBox);
    for (let ii = 0; ii < n; ii += 1) {
      const lineBox2 = document.createElement('div');
      lineBox2.className = 'pixel';
      lineBox2.style.color = 'white';
      containerWhiteBoard.appendChild(lineBox2);
      console.log(n);
    }
  }
}

function selectColor(event) {
  const colorSelected = document.querySelectorAll('.color');
  let verificador = 0;
  for (let index = 0; index < colorSelected.length; index += 1) {
    colorSelected[index].addEventListener('click', function (event) {
      for (let index = 0; index < colorSelected.length; index += 1) {
        const valorClasse = colorSelected[index].className;
        if (valorClasse === 'color selected') {
          verificador = index;
        }
      }
      corSelecionada = event.target.style.backgroundColor;
      colorSelected[verificador].classList.remove('selected');
      colorSelected[index].classList.add('selected');
    });
  }
}
selectColor();

function paintWhiteBox(event) {
  if (event.target.id !== 'pixel-board') {
    event.target.style.backgroundColor = corSelecionada;
  }
}
whiteBox.addEventListener('click', paintWhiteBox);

function cleanWhiteBoxes() {
  let whiteBox = document.querySelectorAll('.pixel');
  for (let i = 0; i < whiteBox.length; i += 1) {
    whiteBox[i].style.backgroundColor = 'white';
  }
}
btnLimparQuadro.addEventListener('click', cleanWhiteBoxes);

function generateNewBoardSize() {
  if (n === '' || n < 0) {
    alert('Board inválido!');
  } else if (n < 5) {
    n = 5;
    inputBoardSize.value = n;
  } else if (n > 50) {
    n = 50;
    inputBoardSize.value = n;
  } else {
    n = inputBoardSize.value;
  }
  //removerQuadroAnterior();
  gerarQuadroBranco();
}
btnGenerate.addEventListener('click', generateNewBoardSize);

window.onload = function() {
  inputBoardSize.value = 5;
  generateNewBoardSize();
};
