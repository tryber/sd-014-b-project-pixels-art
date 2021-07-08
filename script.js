const colorsPalette = document.getElementsByClassName('color');
const pixelBoard = document.querySelector('#pixel-board')
const clearButton = document.querySelector('#clear-board');
const createCanvasButton = document.querySelector('#generate-board');
const colors = ['black', 'red', 'green', 'blue'];
const minPixelBoard = 5;
const maxPixelBoard = 50;

setColorsInPalette();

let selectedColor = document.querySelector('.selected');
let boardValue = 0;

createInitialPixelBoard();

function setColorsInPalette() {
    for (let i = 0; i < colorsPalette.length; i += 1){
        let color = colorsPalette[i];
        color.style.backgroundColor = colors[i];
        color.addEventListener('click', setSelectedColor);
    }
    colorsPalette[0].classList.add('selected');
}

function createInitialPixelBoard() {
    boardValue = document.querySelector('#board-size').value;
    let value = 5;
    for (let i = 0; i < value; i += 1) {
        let line = document.createElement('tr');
        pixelBoard.appendChild(line);
        for (let j = 0; j < value; j += 1) {
            let colum = document.createElement('td');
            setPixelBoardValues(colum);
            line.appendChild(colum);
        }
    }

    addEventListenerToPixel();
}

function generatePixelBoard(){
    boardValue = document.querySelector('#board-size').value;
    
    if (boardValue === ""){
        window.alert('Board inválido!');
    } else if (boardValue < 5) {
        boardValue = 5;
    } else if (boardValue > 50) {
        boardValue = 50;
    }

    clearPixelBoard();

    for (let i = 0; i < boardValue; i += 1) {
        let line = document.createElement('tr');
        pixelBoard.appendChild(line);
        for (let j = 0; j < boardValue; j += 1) {
            let colum = document.createElement('td');
            setPixelBoardValues(colum);
            line.appendChild(colum);
        }
    }

    addEventListenerToPixel();
}

function clearPixelBoard(){
    let size = pixelBoard.children.length

    for (let i = size -1 ; i >= 0; i -= 1) {
        let child = pixelBoard.children[i];
        pixelBoard.removeChild(child);
    }
}

function setPixelBoardValues(element){
    element.style.width = '41px';
    element.style.height = '41px';
    element.style.backgroundColor = 'white';
    element.style.padding = '0px';
    element.style.border = 'solid black 1px';
    element.classList.add('pixel');
}

function setSelectedColor(event) {
    selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    let newSelectedColor = event.target;
    newSelectedColor.classList.add('selected');
    selectedColor = document.querySelector('.selected');
}

function addEventListenerToPixel() {
    let pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i += 1){
        let pixel = pixels[i];
        pixel.addEventListener('click', fillColorInPixel);
    }
}

function fillColorInPixel(event){
    let color = selectedColor.style.backgroundColor;
    let pixel = event.target;
    pixel.style.backgroundColor = color;

}

function clearBoard(){
    let pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i += 1){
        let pixel = pixels[i];
        pixel.style.backgroundColor = 'white';
    }
}

//Buttons
clearButton.addEventListener('click', clearBoard);
createCanvasButton.addEventListener('click', generatePixelBoard);
