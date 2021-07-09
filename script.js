// Cria paleta de cores e coloca cor pra cada um

const secaoPaleta = document.getElementById('color-palette');
const arrColor = ['black', 'red', 'green', 'blue'];

function criaPaleta(){
    for (let index = 0; index < 4; index += 1){
        let palleteBox = document.createElement('div');
        palleteBox.className = 'color';
        palleteBox.style.backgroundColor = arrColor[index];
        palleteBox.style.border = '1px solid black';
        secaoPaleta.appendChild(palleteBox);
    }
}
criaPaleta();

//----------------------------------------------------------------------

//Cria quadrado de pixels brancos

const secaoPixelBoard = document.getElementById('pixel-board');

function criaPixelBoard() {
    for (let index = 0; index < 5; index +=1) {
        let pixelBoard = document.createElement('div');
        secaoPixelBoard.appendChild(pixelBoard);
        for (let i = 0; i < 5; i += 1){
            let pixelLine = document.createElement('div');
            pixelLine.className = 'pixel';
            pixelLine.style.backgroundColor = 'white';
            pixelLine.style.border = '1px solid black';
            pixelBoard.appendChild(pixelLine);
        }
    }
}
criaPixelBoard();

//--------------------------------------------------------------------------

// Faz a primeira cor do elemento ter a classe selected


function makeSelected() {
    let takeElementColor = document.querySelector('.color');
    takeElementColor.classList.add('selected');
}
makeSelected();

//-----------------------------------------------------------------------------

// Faz a cor clicada ter a classe selected

const keepAllColor = document.querySelectorAll('.color');

for (let index = 0; index < keepAllColor.length; index += 1) {
    let singleElementColor = keepAllColor[index];
    singleElementColor.addEventListener('click', function(){
        let lastSelectedElement = document.querySelector('.selected');
        if (singleElementColor.className !== 'selected'){
            lastSelectedElement.classList.remove('selected');
            singleElementColor.classList.add('selected');
        }
    })
}

//---------------------------------------------------------------------------------

// Coloca a cor selecionada no board de pixels

const pixelToColor = document.querySelectorAll('.pixel');


for (let index = 0; index < pixelToColor.length; index += 1){
pixelToColor[index].addEventListener('click', function(){
    let selectedElement = document.querySelector('.selected');
    pixelToColor[index].style.backgroundColor = selectedElement.style.backgroundColor;
    })
}

//---------------------------------------------------------------------------------------

// Limpa a board de pixels ao clicar no botão

const clearButton = document.getElementById('clear-board');
function clearBoard () {
for (let index = 0; index < pixelToColor.length; index += 1) {
    if (pixelToColor[index].style.backgroundColor != 'white') {
        pixelToColor[index].style.backgroundColor = 'white';
        }
    }
}
clearButton.addEventListener('click', clearBoard);

