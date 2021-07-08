window.onload = function initialBlack() {
    const blackColor = document.querySelector('.black')
    blackColor.classList.add('selected')
}

const base = 5;
const pixBoard = document.getElementById('pixel-board');
const divsWithColor = document.querySelectorAll('.color');

function createPixBoard() {
    for (let index = 1; index <= base; index += 1) {
        const line = document.createElement('div');
        pixBoard.appendChild(line);
        for (let secondIndex = 0; secondIndex < base; secondIndex += 1) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}
createPixBoard();

function assignSelected(color) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    color.target.classList.add('selected');
}

function classSelected() {
    for (let index = 0; index < divsWithColor.length; index += 1) {
        divsWithColor[index].addEventListener('click', assignSelected);
    }
}
classSelected()

function changeColor(event) {
    let selected = document.querySelector('.selected')
    if (selected.classList.contains('black')) {
        event.target.style.backgroundColor = 'black';
    } else if (selected.classList.contains('darkBlue')) {
        event.target.style.backgroundColor = '#1b1f3b';
    } else if (selected.classList.contains('purple')) {
        event.target.style.backgroundColor = '#b14aed';
    } else if (selected.classList.contains('pink')) {
        event.target.style.backgroundColor = '#c874d9';
    }
}

function changePixel() {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', changeColor);
    }
}
changePixel()







