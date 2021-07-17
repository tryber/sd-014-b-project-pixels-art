const palette = document.querySelectorAll('.color');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const teal = document.querySelector('.teal');
const mosaic = document.querySelector('#pixel-board');
const btnContainer = document.querySelector('#button-container');
let selected = document.querySelector('.selected');
let pixels = document.querySelectorAll('.pixel');
console.log(pixels);

function takeColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}


black.addEventListener('click', takeColor);
red.addEventListener('click', takeColor);
orange.addEventListener('click', takeColor);
teal.addEventListener('click', takeColor);


function paintBox(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').id;
}

mosaic.addEventListener('click', paintBox);

function clearBoard (){
    for (let pixel of pixels){
        pixel.style.backgroundColor = 'white';
    }
}

function generateClearBoardButton() {
    let clearBoardButton = document.createElement('button');
    clearBoardButton.id = 'clear-board';
    clearBoardButton.innerText = 'Limpar';
    btnContainer.appendChild(clearBoardButton);
    clearBoardButton.addEventListener('click', clearBoard);
}
generateClearBoardButton();

