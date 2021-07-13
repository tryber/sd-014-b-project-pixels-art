let myBoard = document.getElementById('pixel-board');
const palette = document.getElementById('color-palette');
const btnVQV = document.getElementById('generate-board');
const btnClean = document.getElementById('clear-board');
const inputBoard = document.querySelector('#board-size');

// função vista - tem explicação de como funciona - aqui, https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript. Cores hexadecimais vão de 0 a 0xFFFFFF. Usa-se a high level function Math.random, que gera valores de 0 a 'quase' 1 dentro de uma função parseInt, que 'força' o número a ser um inteiro. Após isso, ele chama o método toString, que retorna uma string representando um objeto - no nosso caso, gerado pelo resultado da função parseInt. Também passa um método padStart, que preenche a string com um determinado número de caracteres e sinaliza qual caractere deve ser usado (o zero, no nosso caso).

function generateColor() {
  for (let i = 1; i < palette.children.length; i += 1) {
    const x = Math.round(Math.random() * (255 - 1));
    const y = Math.round(Math.random() * (255 - 1));
    const z = Math.round(Math.random() * (255 - 1));
    if (x === 255 && y === 255 && z === 255) {
      x -= 1;
      y -= 1;
      z -= 1;
    } else if (x === 0 && y === 0 && z === 0) {
      x += 1;
      y += 1;
      z += 1;
    }
    palette.children[i].style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }
}

function initialColors() {
  const firstColor = palette.firstElementChild;
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
  generateColor();
}

function generateBoard() {
  for (let i = 0; i < inputBoard.value; i += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel-line');
    myBoard.appendChild(div);
    for (let i2 = 0; i2 < inputBoard.value; i += 1) {
      let divPixel = document.createElement('div');
      divPixel.classList.add('pixel');
      div.appendChild(divPixel);
    }
  }
}

myBoard.addEventListener('click', clickSelectColor);

palette.addEventListener('click', clickPaintColor);

btnVQV.addEventListener('click', generateBoard);

function clickSelectColor(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  if (event.target === myBoard) {
    event.target.style.backgroundColor = myBoard.style.backgroundColor = 'initial';
  }
}

function clickPaintColor(event) {
  const actualColor = document.querySelector('.selected');
  actualColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// função que limpa toda a tabela, baseado no exercício da pirâmide
function erasePixelTable() {
  for (let i = 0; i < myBoard.children.length; i += 1) {
    myBoard.children[i].style.backgroundColor = 'white';
  }
}

window.onload = function () {
  initialColors();
  // generateBoard();
  btnClean.addEventListener('click', erasePixelTable);
  //
};
