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

//gerador da tabela de pixels
let num = 5;
const tabela = document.querySelector('table');

function tableGenerator() {
  for (let index = 0; index < num; index += 1) {
    let line = document.createElement('tr');
    tabela.appendChild(line);
    for (let aux = 0; aux < num; aux += 1) {
      let column = document.createElement('td');
      column.innerText = '';
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
}

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
