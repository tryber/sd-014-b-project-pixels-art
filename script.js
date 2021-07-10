// gerador de uma cor aleatória
function corAleatoria() {
  let valorR = Math.random() * (255 - 1) + 1;
  valorR = Math.round(valorR);
  let valorG = Math.random() * (255 - 1) + 1;
  valorG = Math.round(valorG);
  let valorB = Math.random() * (255 - 1) + 1;
  valorB = Math.round(valorB);

  const valorRGB = `rgb(${valorR}, ${valorG}, ${valorB})`;
  return valorRGB;
}

// gerar e atribuir cores três cores aleatórias para os três pixels
function colorPaletteGenerator() {
  const corUm = document.querySelector('#cor2');
  corUm.style.backgroundColor = corAleatoria();
  const corDois = document.querySelector('#cor3');
  corDois.style.backgroundColor = corAleatoria();
  const cortres = document.querySelector('#cor4');
  cortres.style.backgroundColor = corAleatoria();
}

// gerador da tabela de pixels
const num = 5;
const tabela = document.querySelector('table');

// gerador de tabela
function tableGenerator() {
  for (let index = 0; index < num; index += 1) {
    const line = document.createElement('tr');
    tabela.appendChild(line);
    for (let aux = 0; aux < num; aux += 1) {
      const column = document.createElement('td');
      column.innerText = '';
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
}

// função que seta preto como cor inicial selecionada
function blackSelected() {
  document.querySelector('#cor1').classList.add('selected');
  document.querySelector('#cor2').classList.remove('selected');
  document.querySelector('#cor3').classList.remove('selected');
  document.querySelector('#cor4').classList.remove('selected');
}

// função de carregamento de página
function loadingFunction() {
  colorPaletteGenerator();
  tableGenerator();
  blackSelected();
}

// ativador da função de carregamento de página
window.onload = loadingFunction;

// inicio do selecionador de cores
const selectionColor1 = document.getElementsByClassName('color')[0];
const selectionColor2 = document.getElementsByClassName('color')[1];
const selectionColor3 = document.getElementsByClassName('color')[2];
const selectionColor4 = document.getElementsByClassName('color')[3];

function changeSelectedColor(event) {
  for (let index = 0; index < 4; index += 1) {
    document.getElementsByClassName('color')[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

selectionColor1.addEventListener('click', changeSelectedColor);
selectionColor2.addEventListener('click', changeSelectedColor);
selectionColor3.addEventListener('click', changeSelectedColor);
selectionColor4.addEventListener('click', changeSelectedColor);

// final do selecionador de cores;

// função do botão limpar
const cleaner = document.querySelector('#clear-board');
const quadrado = num * num;
function clearBoard() {
  for (let key = 0; key < quadrado; key += 1) {
    document.getElementsByTagName('td')[key].style.backgroundColor = 'white';
  }
}

cleaner.addEventListener('click', clearBoard);

// transferindo a cor para o pixel

const tablePixel = document.getElementById('pixel-board');

function placeColor(event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}

tablePixel.addEventListener('click', placeColor);
