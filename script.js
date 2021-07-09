window.onload = function blk() {
    for (let index = 0; index < allPixels.length; index++) {
        allPixels[index].addEventListener('click', function() {
            if (allPixels[index].style.backgroundColor != 'black') {
                allPixels[index].style.backgroundColor = 'black';
            };
        })
    }
}



let allPixels = document.querySelectorAll('.pixel');

//Remover classe selected!!!


let red = document.getElementById("red"); //.addEventListener('click', addClase);
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let black = document.getElementById("black");

function addClasseBlack() {
    if (red.classList) {
        red.classList.remove("selected");
        blue.classList.remove("selected");
        green.classList.remove("selected");
        black.classList.add("selected");
    }
}

function addClasseRed() {
    if (red.classList) {
        black.classList.remove("selected");
        blue.classList.remove("selected");
        green.classList.remove("selected");
        red.classList.add("selected");
    }
}

function addClasseBlue() {
    if (red.classList) {
        black.classList.remove("selected");
        red.classList.remove("selected");
        green.classList.remove("selected");
        blue.classList.add("selected");
    }
}

function addClasseGreen() {
    if (red.classList) {
        black.classList.remove("selected");
        blue.classList.remove("selected");
        red.classList.remove("selected");
        green.classList.add("selected");
    }
}

//Pintar de preto abaixo!!!

let clickBlack = document.querySelector('#black').addEventListener('click', paintBlack);

function paintBlack() {
    for (let index = 0; index < allPixels.length; index++) {
        allPixels[index].addEventListener('click', function() {
            if (allPixels[index].style.backgroundColor != 'black') {
                allPixels[index].style.backgroundColor = 'black';
            };
        })
    }
}

//Pintar de vermelho abaixo!!!

let clickRed = document.querySelector('#red').addEventListener('click', paintRed);

function paintRed() {
    for (let index = 0; index < allPixels.length; index++) {
        allPixels[index].addEventListener('click', function() {
            if (allPixels[index].style.backgroundColor != 'red') {
                allPixels[index].style.backgroundColor = 'red'
            };
        })
    }
}

//Pintar de azul abaixo!!!

let clickBlue = document.querySelector('#blue').addEventListener('click', paintBlue);

function paintBlue() {
    for (let index = 0; index < allPixels.length; index++) {
        allPixels[index].addEventListener('click', function() {
            if (allPixels[index].style.backgroundColor != 'blue') {
                allPixels[index].style.backgroundColor = 'blue'
            };
        })
    }
}

//Pintar de verde abaixo!!!

let clickGreen = document.querySelector('#green').addEventListener('click', paintGreen);

function paintGreen() {
    for (let index = 0; index < allPixels.length; index++) {
        allPixels[index].addEventListener('click', function() {
            if (allPixels[index].style.backgroundColor != 'green') {
                allPixels[index].style.backgroundColor = 'green'
            };
        })
    }
}