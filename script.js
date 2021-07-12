function createTable() {
  const pixelTable = document.getElementById('pixel-board'); //elemento pai
  const table = document.createElement('table'); //criando a tabela
  table.className = 'table';

  for (let index = 0; index < 5; index += 1) {
    //cada interação aumenta uma linha
    const tr = document.createElement('tr');
    tr.className = 'tr';
    for (let index2 = 0; index2 < 5; index2 += 1) {
      //alinha as colunas lado a lado formando uma linha ao final
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  pixelTable.appendChild(table);
}
createTable();

//deleta e seleciona
function deletColor(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectedColor() {
  const colorDelet = document.querySelectorAll('.color');
  for (let index = 0; index < colorDelet.length; index += 1) {
    colorDelet[index].addEventListener('click', deletColor);
  }
}

selectedColor();

function colorPixel(event) {
  const selected = document.querySelector('.selected');
  const newBackground = window
    .getComputedStyle(selected)
    .getPropertyValue('background-color');
  event.target.style.backgroundColor = newBackground;
  console.log(newBackground);
}
document.querySelector('#pixel-board').addEventListener('click', colorPixel);

function resetButton() {
  const buttonReset = document.getElementById('button-reset');
  const button = document.createElement('button');
  buttonReset.appendChild(button);
  button.id = 'clear-board';
  button.innerText = 'Reset button';
}
resetButton();

function whiteBoard() {
  const pixel = document.querySelectorAll('.pixel');
  console.log(pixel)
  for (index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', whiteBoard);