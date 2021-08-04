// const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
//const firstColor = document.querySelector('.first-color');
//const secondColor = document.querySelector('.second-color');
//const thirdColor = document.querySelector('.third-color');
//const fourColor = document.querySelector('.four-color');
const colorPaletteAll = document.querySelectorAll('.color');
let pixelsSelected = document.querySelectorAll('.pixel');

let boardSize = 5;

function addSelectedClass(colorSelected) {
    const lastColorSelected = document.querySelector('.selected');
    lastColorSelected.classList.remove('selected');

    colorSelected.target.classList.add('selected');

    getSelectColor();
}

function addColorOnPixel(applyColor) {
    applyColor.target.style.backgroundcolor = 'getSelectColor';
}


function getSelectColor() {
    const colorPaletteCurrent = document.querySelector('.selected');
    // lógica para o uso vi nesse site: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    // método: getComputedStyle() retorna um objeto com os valores de propriedade css de um dado elemento
    // método: getPropertyValue() fax uso da propriedade escolhida
    const lastColor = window.getComputedStyle(colorPaletteCurrent).getPropertyValue('background-color');

    return lastColor;
}

function eventCurrentpixel() {
    boardSize = document.querySelector('#board-size').value;
    pixelsSelected.forEach((valuePixel) => {
        valuePixel.addEventListener('click', (eventTarget) => {
            eventTarget.target.style.backgroundColor = getSelectColor()
        });
    });
}

function clearBoard() {
    for (let index = 0; index < pixelsSelected.length; index += 1) {
        pixelsSelected[index].style.backgroundColor = 'white';
    }
}


function createOnBoard(valueInput) {
    for (let increment = 0; increment < valueInput; increment += 1) {
        let createLine = document.createElement('div');
        createLine.classList.add('line');
        pixelBoard.appendChild(createLine);

        for(let increment2 = 0; increment2 < valueInput; increment2 += 1) {
            let createPixel = document.createElement('div');
            createPixel.classList.add('pixel');
            pixelBoard.appendChild(createPixel);
        }
    }

    pixelsSelected = document.querySelectorAll('.pixel');
    eventCurrentpixel();
}

function verifierValueInputSize() {
    pixelsSelected = document.querySelectorAll('.pixel');
    boardSize = document.querySelector('#board-size').value;
    if(boardSize >= 5 && boardSize <= 50) {
        pixelsSelected.forEach((valueItem) => {
            valueItem.remove();
        });
        createOnBoard(boardSize);
    } else {
        alert('Board inválido!');
    }
}

document.querySelector('#generate-board').addEventListener('click', verifierValueInputSize);

document.querySelectorAll('.pixel').forEach((value) => {
    value.addEventListener('click', (eventClicked) => {
        eventClicked.target.style.backgroundColor = getSelectColor();
    });
});



for (let index = 0; index < colorPaletteAll.length; index += 1) {
    colorPaletteAll[index].addEventListener('click', addSelectedClass);
}

window.onload = function createBoarMin() {
    createOnBoard(5)
}

document.querySelector('#clear-board').addEventListener('click', clearBoard);