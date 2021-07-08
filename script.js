// seleciona a cor
const colorOptions = document.querySelectorAll('.color');

colorOptions[0].style.backgroundColor = 'black';
colorOptions[1].style.backgroundColor = 'red';
colorOptions[2].style.backgroundColor = 'green';
colorOptions[3].style.backgroundColor = 'blue';

const pixels = document.querySelectorAll('.pixel');

function selectColor(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
}

for (let color of colorOptions) {
    color.addEventListener('click', selectColor);
}

function colorizePixel(event) {
    let newColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = newColor;
}

for(let pixel of pixels) {
    pixel.addEventListener('click', colorizePixel);
}

function clearBoard() {
    for(let pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
}

document.querySelector('#clear-board').addEventListener('click', clearBoard);
