window.onload = function () {
  btnBoardSize.addEventListener('click', setBoardSize);
  btnClearPixels.addEventListener('click', clearGrade);
  let firstColor = document.querySelector('.color')
  firstColor.classList.add('selected') // requisito 7
  for (let color of colors) {
    color.addEventListener('click', selectColor);
  }
  
  generateColorPallete()
  firstColor.style.backgroundColor = 'black' // requisito 12
  updatePixels();
  setBoardSize(5);
};

function updatePixels() {
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
  if(inputBoardSize.value < 5 && pixelBoardSize !== ""){
    inputBoardSize.value = 5;
  } else if(inputBoardSize.value > 50){
    inputBoardSize.value = 50;
  }

  number === 5 
    ? (pixelBoardSize = number)
    : (pixelBoardSize = inputBoardSize.value);

    
    if (pixelBoardSize !== "") {
      while (pixelBoardElement.firstChild) {
        // referencia https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
        pixelBoardElement.removeChild(pixelBoardElement.lastChild); //remove os filhos da table, ou seja, reinicializa a grade, deixando-a vazia
      }
      for (let i = 0; i < pixelBoardSize; i++) {
        let trElement = document.createElement('tr');
        for (let j = 0; j < pixelBoardSize; j++) {
          let tdElement = document.createElement('td');
          tdElement.className = 'pixel';
          trElement.appendChild(tdElement);
        }
      pixelBoardElement.appendChild(trElement);
    }
    clearGrade();
    updatePixels(); //atualizando os pixels porque a grade foi alterada
  } else {
    alert('Board inválido!');
  }
}

function selectColor(selectedColor) {
  for (let color of colors) {
    if (color.className.includes('selected')) {
      color.classList.remove('selected');
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

function generateColorPallete(){
  for (color of colors){
    color.style.backgroundColor = getRandomColor()
  }
}

function getRandomColor() { // Source: https://stackoverflow.com/questions/1484506/random-color-generator
  let letters = '0123456789ABCDEF';
  let generatedColor = '#';
  for (var i = 0; i < 6; i++) {
    generatedColor += letters[Math.floor(Math.random() * 16)]; 
    // Math.random() * 16 gera um numero aleatorio de 1 a 16, mas não é um numero inteiro, 
    // Math.floor o transforma em numero inteiro, pegando somente o piso(floor) do numero
    // o numero gerado é passado como index da string letters que contem a base do sistema hexadecimal
  }
  return generatedColor;
}