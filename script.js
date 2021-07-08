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

