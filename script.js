
let tabelaDePixels = document.getElementById('pixel-board');
let tabelaDeCores = document.getElementsByClassName('color');
let corPreto = document.getElementsByClassName('preto');
let corAmarelo = document.getElementsByClassName('amarelo');
let corAzul = document.getElementsByClassName('azul');
let corVerde = document.getElementsByClassName('verde');

let primeiraCor = document.querySelector('.color');
primeiraCor.classList.add('selected');

for (let index = 0; index < 25; index +=1){
    let pixelsDaTabela = document.createElement('div');
    pixelsDaTabela.className='pixel';
    tabelaDePixels.appendChild(pixelsDaTabela);
}



let selecionaCor = document.querySelector('#preto');
let selecionaCorAmarelo = document.querySelector('#amarelo');
let selecionaCorAzul = document.querySelector('#azul');
let selecionaCorVerde = document.querySelector('#verde');

selecionaCor.addEventListener("click", recebeClick);
selecionaCorAmarelo.addEventListener("click", recebeClick);
selecionaCorAzul.addEventListener("click", recebeClick);
selecionaCorVerde.addEventListener("click", recebeClick);

function recebeClick(evento){
    for (index = 0; index < 5 ; index +=1){
        let corAtual = document.querySelectorAll('.color');
        if (corAtual[index] === document.querySelector('.selected') ){
        corAtual = corAtual[index].classList.remove('selected');
        }
    }
   evento.target.classList.add('selected');      
}

    
let telaPixels = document.querySelectorAll('.pixel');












