window.onload = function initialBlack() {
    const blackColor = document.querySelector('.black');
    blackColor.classList.add('selected');
}

let base = 5;
let pixBoard = document.getElementById('pixel-board');
let divsWithColor = document.querySelectorAll('.color');

function createPixBoard(value1) {
    for (let index = 1; index <= value1; index += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        pixBoard.appendChild(line);
        for (let secondIndex = 0; secondIndex < value1; secondIndex += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}
createPixBoard(base)


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

function clearBoard() {
    let button = document.getElementById('clear-board');
    let pixels = document.querySelectorAll('.pixel')
    button.addEventListener('click', function () {
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = 'white';
        }
    });
}
clearBoard()

function changeBoard() {
    let button = document.getElementById('generate-board');
    let input = document.getElementById('board-size');
    button.addEventListener('click', function (){
        let value = parseInt(input.value);
        if (value >= 5 && value <= 50 && value > 0) {
            base = value;
        } else {
            alert("Board inválido!");
        }
    })
}
changeBoard()












