
let tabelaDePixels = document.getElementById('pixel-board');

for (let index = 0; index < 25; index +=1){
    let pixelsDaTabela = document.createElement('div');
    pixelsDaTabela.className='pixel';
    tabelaDePixels.appendChild(pixelsDaTabela);
}



