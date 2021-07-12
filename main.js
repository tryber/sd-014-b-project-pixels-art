window.onload = function initialBlack() {
    const blackColor = document.querySelector('.black');
    blackColor.classList.add('selected');
}

let base = 5;
let pixBoard = document.getElementById('pixel-board');
let divsWithColor = document.querySelectorAll('.color');
let colorRandomOne = getRandomColor();
let colorRandomTwo = getRandomColor();
let colorRandomThree = getRandomColor();

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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColors() {
    var colorTwo = document.querySelector('.colorTwo');
    var colorThree = document.querySelector('.colorThree');
    var colorFour = document.querySelector('.colorFour');
    colorTwo.style.backgroundColor = colorRandomOne;
    colorThree.style.backgroundColor = colorRandomTwo;
    colorFour.style.backgroundColor = colorRandomThree;
}
randomColors()

function changeColor(event) {
    let selected = document.querySelector('.selected')
    if (selected.classList.contains('black')) {
        event.target.style.backgroundColor = 'black';
    } else if (selected.classList.contains('colorTwo')) {
        event.target.style.backgroundColor = colorRandomOne;
    } else if (selected.classList.contains('colorThree')) {
        event.target.style.backgroundColor = colorRandomTwo;
    } else if (selected.classList.contains('colorFour')) {
        event.target.style.backgroundColor = colorRandomThree;
    }
}

function changePixel() {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', changeColor);
    }
}
changePixel()

function changeBoard() {
    let button = document.getElementById('generate-board');
    button.addEventListener('click', function () {
        let inputValue = document.getElementById('board-size').value;
        let pixBoard = document.getElementById('pixel-board');
        let divsLine = document.querySelectorAll('.line')
        if (inputValue === '') {
            alert("Board inválido!");
        } else if (inputValue < 5) {
            inputValue = 5;
        } else if (inputValue > 50) {
            inputValue = 50;
        }
        base = inputValue;
        for (let index = 0; index < divsLine.length; index += 1) {
            pixBoard.removeChild(divsLine[index]);
        }
        createPixBoard(base);
        changePixel();
        inputValue = '';
    })
}
changeBoard()

function clearBoard() {
    let button = document.getElementById('clear-board');
    button.addEventListener('click', function () {
        let pixels = document.querySelectorAll('.pixel')
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = 'white';
        }
    });
}
clearBoard()






















