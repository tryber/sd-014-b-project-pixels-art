let boardSizeLoaded = 5;

function removeBoard() {
  const pixelBoard = document.getElementsByClassName('pixel-board')[0];
  pixelBoard.innerHTML = '';
  
}

// add width and height in pixelboard
function addPropertyInPixelBoard(size) {
  const pixelBoard = document.getElementsByClassName('pixel-board')[0];

  pixelBoard.style.width = `${40 * size}px`;
  pixelBoard.style.height = `${40 * size}px`;
}

// add property in div
function addProperty(div) {
  div.id = 'pixel';
  div.className = 'pixel';
  div.style.backgroundColor = 'white';
  div.addEventListener('click', function (event) {
    event.target.style.backgroundColor = colorCurrent;
  });
}

// generate board
function generateBoard() {
  let boardSize = boardSizeLoaded * boardSizeLoaded;

  const pixelBoard = document.getElementsByClassName('pixel-board')[0];

  // add width and height in pixelboard
  addPropertyInPixelBoard(boardSizeLoaded);

  for (let index = 1; index <= boardSize; index += 1) {
    let div =document.createElement('div');
    addProperty(div);
    pixelBoard.appendChild(div);
  }
}
generateBoard();

const inputBoard = document.getElementById('board-size');
const btn = document.getElementById('generate-board');
btn.addEventListener('click', function () {
  if (inputBoard.value == '') {
    alert('Board inválido!');
  } else {
    boardSizeLoaded = inputBoard.value;
    if (inputBoard.value > 50) boardSizeLoaded = 50;
    if (inputBoard.value < 5) boardSizeLoaded = 5;
    removeBoard();
    generateBoard();
  }
});

const colorsPallet = {
 
  color1: '#000000', //Preto
  color2: '#F11D00', //Vermelho
  color3: '#2FC18C', //Verde
  color4: '#54BCEA', //Azul
  color5: '#F27924', //Laranja
  color6: '#F3E26F', //Amarelo
  color7: '#A52AEA', //Roxo
  color8: '#F398B1' //Rosa
}

let colorCurrent = colorsPallet.color1;

const colors = document.getElementsByClassName('color');

let selectedCurrent = document.getElementsByClassName('selected')[0];

function removeClassSelected() {
  let classes = selectedCurrent.className.split(' ');
  selectedCurrent.className = `${classes[0]} ${classes[1]}`;
}

function addClassSelected(colorButton) {
  colorButton.className += ' selected';
  colorCurrent = colorsPallet[`${colorButton.id}`];
  selectedCurrent = colorButton;
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    if (selectedCurrent) removeClassSelected();
    addClassSelected(event.target);
  });
}

const pixels = document.getElementsByClassName('pixel');

// limpar board
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', function () {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
    
  }

});

let input = document.getElementById("board-size");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("generate-board").click();
  }
});

function generateColor() { // Inspirado em código achado no seguint url (https://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/1152508)
  const primeiro = Math.floor(Math.random() * 256);
  const segundo = Math.floor(Math.random() * 256);
  const terceiro = Math.floor(Math.random() * 256);
  
  return `rgb(${primeiro}, ${segundo}, ${terceiro})`;
}