
let tabelaDePixels = document.getElementById('pixel-board');
let tabelaDeCores = document.getElementsByClassName('color');

let primeiraCor = document.querySelector('.color');
primeiraCor.classList.add('selected');

for (let index = 0; index < 25; index +=1){
    let pixelsDaTabela = document.createElement('div');
    pixelsDaTabela.className='pixel';
    tabelaDePixels.appendChild(pixelsDaTabela);
}




