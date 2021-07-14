const myBoard = document.getElementById('pixel-board');
const palette = document.getElementById('color-palette');
const btnVQV = document.getElementById('generate-board');
const btnClean = document.getElementById('clear-board');
const btnLucky = document.getElementById('random-color');
const inputBoard = document.querySelector('#board-size');

// função vista - tem explicação de como funciona - aqui, https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript. Cores hexadecimais vão de 0 a 0xFFFFFF. Usa-se a high level function Math.random, que gera valores de 0 a 'quase' 1 dentro de uma função parseInt, que 'força' o número a ser um inteiro. Após isso, ele chama o método toString, que retorna uma string representando um objeto - no nosso caso, gerado pelo resultado da função parseInt. Também passa um método padStart, que preenche a string com um determinado número de caracteres e sinaliza qual caractere deve ser usado (o zero, no nosso caso).

// transformado em função, após monitoria do Iago
function verifyBlack(x, y, z) {
  if (x === 255 && y === 255 && z === 255) {
    x -= 1;
    y -= 1;
    z -= 1;
  }
}

function verifyWhite(x, y, z) {
  if (x === 0 && y === 0 && z === 0) {
    x += 1;
    y += 1;
    z += 1;
  }
}

function generateRGB() {
  return Math.round(Math.random() * (255 - 1));
}

function generateColor() {
  for (let i = 1; i < palette.children.length; i += 1) {
    const x = generateRGB();
    const y = generateRGB();
    const z = generateRGB();
    verifyBlack(x, y, z);
    verifyWhite(x, y, z);
    palette.children[i].style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }
}

function initialColors() {
  const firstColor = palette.firstElementChild;
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
  generateColor();
}

function generateBoard(value) {
  myBoard.innerHTML = '';
  for (let line = 0; line < value; line += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel-line');
    myBoard.appendChild(div);
    for (let element = 0; element < value; element += 1) {
      let divPixel = document.createElement('div');
      divPixel.classList.add('pixel');
      div.appendChild(divPixel);
    }
  }
}

function verifyInput() {
  if (inputBoard.value.length === 0 || inputBoard.value.length === '') {
    alert('Board inválido!');
  }
  if (inputBoard.value > 50) {
    alert('Board inválido!'); // retirar
    generateBoard(50);
  } 
  if (inputBoard.value < 5) {
    alert('Board inválido!');
    generateBoard(5);
  } else {
    generateBoard(inputBoard.value);
  }
  
}

myBoard.addEventListener('click', clickSelectColor);

palette.addEventListener('click', clickPaintColor);

btnVQV.addEventListener('click', verifyInput);

btnLucky.addEventListener('click', generateColor);

btnClean.addEventListener('click', erasePixelTable);

function clickSelectColor(event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}

function clickPaintColor(event) {
  const actualColor = document.querySelector('.selected');
  actualColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// função que limpa toda a tabela, baseado no exercício da pirâmide
function erasePixelTable() {
  const lineDefault = document.querySelectorAll('.pixel');
  for (let i = 0; i < lineDefault.length; i += 1) {
    lineDefault[i].style.backgroundColor = 'white';
  }
}

inputBoard.addEventListener('keyup', (enter) => {
  const key = enter.wich || enter.key;
  if (key === 'Enter' || key === 3 || key === 13) {
    generateBoard(inputBoard.value);
    inputBoard.value = '';
  }
});

window.onload = function () {
  initialColors();
  generateBoard(5);
};