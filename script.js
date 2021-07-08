// Cria paleta de cores e coloca cor pra cada um

const secaoPaleta = document.getElementById('color-palette');
const arrColor = ['black', 'red', 'green', 'blue'];

function criaPaleta (){
    for (let index = 0; index < 4; index += 1){
        let palleteBox = document.createElement('div');
        palleteBox.className = 'color';
        palleteBox.style.backgroundColor = arrColor[index];
        palleteBox.style.border = '1px solid black';
        secaoPaleta.appendChild(palleteBox);
    }
}
criaPaleta();


