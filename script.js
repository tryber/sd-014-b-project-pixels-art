window.onload = function(){
  btnBoardSize.addEventListener('click', setBoardSize);
  btnClearPixels.addEventListener('click', clearGrade);
for (let color of colors) {
  color.addEventListener('click', selectColor);
}
updatePixels()
setBoardSize(5);
}
function updatePixels(){
  pixels = document.querySelectorAll('.pixel'); //atualizando os pixels porque a grade foi alterada
  for (let pixel of pixels) {
    pixel.addEventListener('click', paintPixel);
  }
}
let colors = document.getElementsByClassName('color');
let pixels = document.querySelectorAll('.pixel');
let btnClearPixels = document.getElementById('clear-board');
let inputBoardSize = document.getElementById('board-size');
let btnBoardSize = document.getElementById('generate-board');
let pixelBoardElement = document.querySelector('#pixel-board');


function setBoardSize(number) {
  number === 5
    ? (pixelBoardSize = number)
    : (pixelBoardSize = inputBoardSize.value);
    while (pixelBoardElement.firstChild) { // referencia https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
      pixelBoardElement.removeChild(pixelBoardElement.lastChild); //remove os filhos da table, ou seja, reinicializa a grade
    }
    if (pixelBoardSize >= 5 && pixelBoardSize <= 50) {
      for (let i = 0; i < pixelBoardSize; i++) {
        let trElement = document.createElement('tr');
        for (let j = 0; j < pixelBoardSize; j++) {
          let tdElement = document.createElement('td');
          tdElement.className = 'pixel';
          trElement.appendChild(tdElement);
        }
        pixelBoardElement.appendChild(trElement);
      }
      clearGrade()
      updatePixels() //atualizando os pixels porque a grade foi alterada
    } else {
      alert('Board inválido!');
    }
    if(pixelBoardSize === ''){
      alert('Board inválido!');
    }
}

function selectColor(selectedColor) {
  for (let color of colors) {
    if (color.className.includes('selected')) {
      color.className = color.className.replace(' selected', '');
    }
  }
  selectedColor.target.className += ' selected';
}

function paintPixel(pixel) {
  let selectedColor = document.querySelector('.selected');
  style = window.getComputedStyle(selectedColor); // referencia: https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript/25238247
  // a linha acima basicamente atribui a variavel style todo o css referente ao elemento passado como parametro, no caso selectedColor
  pixel.target.style.backgroundColor = style.backgroundColor; // atribuindo a cor selecionada à cor de fundo do pixel clicado
}


function clearGrade() {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

