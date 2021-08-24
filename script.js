// Adiciona as cores da paleta de cores;
const colors = ['background: rgb(0, 0, 0)'];

const generationsNumber = () => {
  const number = Math.floor(Math.random() * 256);
  return number;
};

for (let index = 0; index < 3; index += 1) {
  colors.push(`background: rgb(
    ${generationsNumber()},
    ${generationsNumber()},
    ${generationsNumber()})`);
}

// Criação da tabela #pixel-board dinâmicamente;
function createTable(size) {
  const tableSelect = document.querySelector('#pixel-board');
  for (let index = 0; index < size; index += 1) {
    const trCreate = document.createElement('tr');
    tableSelect.appendChild(trCreate);
    const contadorLine = index;
    for (let count = 0; count < size; count += 1) {
      const trSelect = document.querySelectorAll('#pixel-board tr');
      const tdCreate = document.createElement('td');
      tdCreate.setAttribute('class', 'pixel');
      trSelect[contadorLine].appendChild(tdCreate);
    }
  }
}
createTable(5);

// Remove Pixel borad
function removeBoardPixel() {
  const boardSelect = document.querySelectorAll('#pixel-board tr');
  for (let index = 0; index < boardSelect.length; index += 1) {
    boardSelect[index].parentNode.removeChild(boardSelect[index]);
  }
}

const trChindren = document.querySelector('tr').children;

for (let index = 0; index < trChindren.length; index += 1) {
  trChindren[index].setAttribute('style', colors[index]);
}

const color = document.querySelector('.color');
color.classList.add('selected');

function pintaPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const colorSelect = document.querySelector('.selected').style.background;
      event.target.setAttribute('style', `background: ${colorSelect}`);
    });
  }
}
pintaPixel();

function selectedChange(event) {
  const colorsSelected = document.querySelector('.selected');
  colorsSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const divColors = document.querySelectorAll('.color');

for (let index = 0; index < divColors.length; index += 1) {
  const div = divColors[index];
  div.addEventListener('click', selectedChange);
}

const button = document.createElement('button');
const img = document.createElement('img');
img.setAttribute('class', 'button-clear');
img.src = '/img/clear-icon.png';
button.innerText = 'LIMPAR';
button.appendChild(img);
button.setAttribute('id', 'clear-board');
const selectDiv = document.querySelector('#button');
selectDiv.appendChild(button);

function pixelClear() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.removeAttribute('style');
  }
}

const selectButton = document.querySelector('#clear-board');
selectButton.addEventListener('click', pixelClear);

// Cria input;
const inputCreate = document.createElement('input');
inputCreate.setAttribute('type', 'number');
inputCreate.setAttribute('max', '50');
inputCreate.setAttribute('min', '1');

// inputCreate.setAttribute('value', 'min');
inputCreate.setAttribute('id', 'board-size');
const selectDivInput = document.querySelector('#input');
selectDivInput.appendChild(inputCreate);

// Função retorna valor do input válido;
function changeSizeBoardPixel() {
  const inputSelect = document.querySelector('#board-size');
  let valueInput = inputSelect.value;
  if (inputSelect.value.length === 0) alert('Board inválido!');
  if (inputSelect.value < 5) valueInput = 5;
  if (inputSelect.value > 22) valueInput = 22;
  return valueInput;
}

// Cria butão do input;
const createButton = document.createElement('button');
createButton.setAttribute('id', 'generate-board');
createButton.innerText = 'VQV';
selectDivInput.appendChild(createButton);

function generetaionBorad() {
  const sizeBoard = changeSizeBoardPixel();
  if (sizeBoard !== undefined) {
    removeBoardPixel();
    createTable(sizeBoard);
  }
  pintaPixel();
  selectButton.addEventListener('click', pixelClear);
}

const buttonPixel = document.querySelector('#generate-board');
buttonPixel.addEventListener('click', generetaionBorad);
