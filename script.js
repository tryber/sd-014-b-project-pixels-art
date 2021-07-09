const myBoard = document.getElementById('#pixel-board');
const palette = document.getElementById('#color-palette');
const btnVQV = document.getElementById('generate-board');
const inputBoard = document.getElementById('board-size');

// função vista - tem explicação de como funciona - aqui, https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript. Cores hexadecimais vão de 0 a 0xFFFFFF. Usa-se a high level function Math.random, que gera valores de 0 a 'quase' 1 dentro de uma função parseInt, que 'força' o número a ser um inteiro. Após isso, ele chama o método toString, que retorna uma string representando um objeto - no nosso caso, gerado pelo resultado da função parseInt. Também passa um método padStart, que preenche a string com um determinado número de caracteres e sinaliza qual caractere deve ser usado (o zero, no nosso caso).

function generateColor() {
  return `#${parseInt((Math.random() * 0xFFF))
    .toString(16)
    .padStart(6, '0')}`;
}

function initialColor() {
  const firstColor = document.querySelector('.color');
  if (firstColor.style.backgroundColor !== 'black') {
    firstColor.style.backgroundColor = 'black';
  }
  for (let i = 1; i < palette.length; i += 1) {
    const element = palette.childNodes[i];
      element.style.backgroundColor = generateColor();
    
  }
  
}

window.onload = function() {
  initialColor();
  generateBoard();
  btnVQV.addEventListener('click', erasePixelTable);
};

function generateBoard(numero) {

}

function generateBoardLine() {
  const newPixel = document.createElement('div');
  newPixel.classList.add('.pixel');
  myBoard.appendChild(newPixel);

}



function clickPaintColor(event) {
  let actualColor = document.querySelector(".selected");
  actualColor.classList.remove('selected');
  event.target.classList.add('selected');
}

//função que limpa toda a tabela, baseado no exercício da pirâmide
function erasePixelTable() {
  

}