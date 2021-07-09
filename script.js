window.onload = function() {
  const myBoard = document.querySelector('#pixel-board');
  const palette = document.querySelector('#color-palette');
  const btnVQV = document.querySelector('#generate-board');
  
  initialColor();
  generateColor();
  
}

function initialColor() {
  let firstColor = document.querySelector(".color");
  if (firstColor.style.backgroundColor !== 'black') {
    firstColor.style.backgroundColor = 'black';
  }
  
  for (let i = 1; i < myBoard.length; i += 1) {
    let element = myBoard[index];
    element.style.backgroundColor = generateColor();
  }

}

function generateBoard() {
  let childPixelmyBoard = myBoard.children;
  

}

// função vista - tem explicação de como funciona - aqui, https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript. Cores hexadecimais vão de 0 a 0xFFFFFF. Usa-se a high level function Math.random, que gera valores de 0 a 'quase' 1 dentro de uma função parseInt, que 'força' o número a ser um inteiro. Após isso, ele chama o método toString, que retorna uma string representando um objeto - no nosso caso, gerado pelo resultado da função parseInt. Também passa um método padStart, que preenche a string com um determinado número de caracteres e sinaliza qual caractere deve ser usado (o zero, no nosso caso).

function generateColor() {
  return `#${parseInt((Math.random() * 0xFFF))
    .toString(16)
    .padStart(3, '0')}`;
}

function clickPaintColor(event) {
  let actualColor = document.querySelector(".selected");
  actualColor.classList.remove('selected');
  event.target.classList.add('selected');
}