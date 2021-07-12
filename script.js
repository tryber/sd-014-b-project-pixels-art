// 1 - Adicione à página o título "Paleta de Cores". OK
// 2 - Adicione à página uma paleta de quatro cores distintas. - OK?

// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// Função abaixo baseada em: https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values
function numRandom() {
  const num = Math.floor(Math.random() * 16777215);
  return (num === 0 || num === 16777215) ? numRandom() : num; // 0 -> preto; 16777215-> branco
}

window.onload = function start() {
  // 6 - Defina a cor preta como cor inicial.
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementById('black').classList.add('selected'); // Referência: https://www.w3schools.com/howto/howto_js_add_class.asp
  // const colorZero = 'black';
  const firstColor = `#${numRandom().toString(16)}`; // Sugestão ESLint: prefer-template
  const secondColor = `#${numRandom().toString(16)}`;
  const thirdColor = `#${numRandom().toString(16)}`;
  // const thirdColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; --> Sem considerar exceções de preto e branco
  // 16777215 <--> FFFFFF ; decimal <--> hexadecimal
  // https://www.w3schools.com/jsref/jsref_tostring_number.asp
  // https://www.rapidtables.com/convert/number/decimal-to-hex.html

  document.getElementById('color1').style.backgroundColor = firstColor;
  document.getElementById('color2').style.backgroundColor = secondColor;
  document.getElementById('color3').style.backgroundColor = thirdColor;
};

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const clearButton = document.getElementById('clear-board'); // Atribuir elemento do botão clear-board à constante clearButton

function clearBoard() { // Adicionar evento 'click' para botão acionar função anônima
  document.querySelectorAll('.pixel').forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white'; // Setar backgroundcolor em branco para cada pixel
  });
}

clearButton.addEventListener('click', clearBoard);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/*
if (size.value = '') {
  alert('Board inválido!');
}
if (size < 5) { size = 5;};
if (size > 50) { size = 50;};
// const size = document.getElementById('board-size'); // Atribuir valor do input 'board-size' à constante 'size'
// Abaixo: duplo loop para percorrer colunas (2o loop) em cada linha da tabela (1o loop)
for (let i = 0; i < size; i += 1) { // Loop de rows, linhas, da tabela
  const pixelRow = document.createElement('tr'); // Criar e atribuir elemento 'table row' à constante pixelRow
  document.getElementById('pixel-board').appendChild(pixelRow); // Append do 'table-row' ao pixel-board
  for (let j = 0; j < size; j += 1) { //  Loop de colunas da tabela
    const pixel = document.createElement('td'); // Criar e atribuir elemento 'td'(table cell) à constante pixel
    document.querySelector('tr')[i].appendChild(pixel); // Append do pixel à 'table row' de índice 'i'
  }
} */
