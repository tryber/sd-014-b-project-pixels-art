let colorSelected = 'black';

function setColors() {
  const botoesCores = document.querySelectorAll('.color');

  for (let i = 1; i <= 3; i += 1) {
    const r = parseInt(Math.random() * 255, 10);
    const g = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 10);

    botoesCores[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function selectColor(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
  colorSelected = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
}

function colorPixel(event) {
  const pixelClicado = event.target;
  pixelClicado.style.backgroundColor = colorSelected;
}

function resetPalette() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function eventPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', colorPixel);
  }
}

function defineSizeBoard(valueInput) {
  const paitingArea = document.getElementById('painting-area');
  const tableElement = document.createElement('table');
  tableElement.id = 'pixel-board';
  paitingArea.innerHTML = '';
  for (let i = 1; i <= valueInput; i += 1) {
    const linhaPixels = document.createElement('tr');
    for (let k = 1; k <= valueInput; k += 1) {
      const pixelElement = document.createElement('td');
      pixelElement.classList.add('pixel');
      linhaPixels.appendChild(pixelElement);
    }
    tableElement.appendChild(linhaPixels);
    paitingArea.appendChild(tableElement);
  }
  eventPixels();
}

function boardCheck() {
  const valueInput = document.getElementById('board-size').value;
  if (valueInput >= 5 && valueInput <= 50) {
    defineSizeBoard(valueInput);
  } else if (valueInput > 50) {
    defineSizeBoard(50);
  } else {
    alert('Board inválido!');
  }
}

function removeBorders() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.border = 'none';
  }
}

function addBorders() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.border = '1px solid black';
  }
}

function eraserTool() {
  document.querySelector('.selected').classList.remove('selected');
  colorSelected = 'white';
}

function eventAdd() {
  const botoesCores = document.querySelectorAll('.color');
  const botaoReset = document.getElementById('clear-board');
  const botaoResize = document.getElementById('generate-board');
  const botaoBorder = document.getElementById('border');
  const botaoRemoveBorder = document.getElementById('noBorder');
  const botaoEraser = document.getElementById('eraser');
  for (let i = 0; i < botoesCores.length; i += 1) {
    botoesCores[i].addEventListener('click', selectColor);
  }
  botaoReset.addEventListener('click', resetPalette);
  botaoResize.addEventListener('click', boardCheck);
  botaoBorder.addEventListener('click', addBorders);
  botaoRemoveBorder.addEventListener('click', removeBorders);
  botaoEraser.addEventListener('click', eraserTool);
}

window.onload = () => {
  setColors();
  eventAdd();
  defineSizeBoard(5);
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
};
