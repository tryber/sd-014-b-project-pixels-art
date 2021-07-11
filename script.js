// 1 - Adicione à página o título "Paleta de Cores". OK

// Função abaixo baseada em: https://stackoverflow.com/questions/27406377/javascript-generate-random-number-except-some-values
function numRandom() {
  const num = Math.floor(Math.random() * 16777215);
  return (num === 0 || num === 16777215) ? numRandom() : num; // 0 -> preto; 16777215-> branco
}

window.onload = function start() {
  // let colorZero = 'black';
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

// 6 - Defina a cor preta como cor inicial.

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[0].className = 'selected';

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const clearButton = document.getElementById('clear-board'); // Atribuir elemento do botão clear-board à variável clearButton

function clearBoard() { // Adicionar evento 'click' para botão acionar função anônima
  document.querySelectorAll('.pixel').forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white'; // Setar backgroundcolor em branco para cada pixel
  });
}

clearButton.addEventListener('click', clearBoard);
