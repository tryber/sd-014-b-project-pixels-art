const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('.pixel-board');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');
const thirdColor = document.querySelector('.third-color');
const fourColor = document.querySelector('.four-color');
const colorPaletteAll = document.querySelectorAll('.color');


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

document.querySelectorAll('.pixel').forEach((value) => {
    value.addEventListener('click', (eventClicked) => {
        eventClicked.target.style.backgroundColor = getSelectColor();
    });
});


for (let index = 0; index < colorPaletteAll.length; index += 1) {
    colorPaletteAll[index].addEventListener('click', addSelectedClass);
}