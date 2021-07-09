

function colorGenerator() {
// Definir cores aleatoriamente (REF. [1])
// O primeiro quadrado (número 0) é sempre preto
    for (let i=1; i <= 3; i+=1){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let color = "rgb(" + x + "," + y + "," + z + ")";
        let square = document.getElementById('color-palette').children[i];
        square.style.backgroundColor = color;
    }
// Não permitir a cor branca nem cores repetidas    
    let colors = document.querySelectorAll('.color');
    for (let j=1; j<=3; j+=1){
        for (let k=0; k<=3; k+=1){
            if (color[j] === 'white' || color[j] === color[k]){
                colorGenerator();
            } else {
                break;
            }
        } 
    }
}

function createPixel(value) {
    // Criar um grid de 5x5
    let pixelBoard = document.querySelector('#pixel-board');
    for (let i = 1; i <= value; i += 1) {
      let boardItem = document.createElement('div');
      boardItem.className = 'pixel';
      pixelBoard.appendChild(boardItem);
    }
}

createPixel(25);
colorGenerator();




// REFERÊNCIAS JAVASCRIPT:
// [1] GERADOR DE COR ALEATÓRIA: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
