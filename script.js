const containerPalhetas = document.querySelector('#color-palette');
const boxColor = ['black', 'blue', 'green', 'red'];
let corSelecionada = '';
let whiteBox = document.querySelector('#pixel-board');
let btnLimparQuadro = document.querySelector('#clear-board');

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
const containerWhiteBoard = document.querySelector('#pixel-board');
for (let i = 0; i < 5; i += 1) {
  const lineBox = document.createElement('div');
  /*   lineBox.className = 'pixel';
  lineBox.innerText = i + 1; */
  containerWhiteBoard.appendChild(lineBox);
  for (let ii = 0; ii < 5; ii += 1) {
    const lineBox2 = document.createElement('div');
    lineBox2.className = 'pixel';
    // lineBox2.innerText = ii + 1;
    lineBox2.style.color = 'white';
    containerWhiteBoard.appendChild(lineBox2);
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
