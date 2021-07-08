window.onload = function () {
    const blackColor = document.getElementById('black')
    blackColor.classList.add('selected')
}

const base = 5;
const pixBoard = document.getElementById('pixel-board');
const divWithSelected = document.querySelector('.selected');
let divsWithColor = document.querySelectorAll('.color');


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
 let selected = document.querySelector('.selected')
 selected.classList.remove('selected')
 color.target.classList.add('selected')
}

function classSelected() {
    for (let index = 0; index < divsWithColor.length; index += 1) {
        divsWithColor[index].addEventListener('click', assignSelected);
    }
}
classSelected()

