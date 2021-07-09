
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
let quadroDePixels = document.querySelector('#pixel-board');
quadroDePixels.addEventListener("click", recebeCor);
function recebeCor(evento){ // pesquisei sobre no MDN Web Docs
    let seletorDeSelected = document.querySelector('.selected');
    let seletorDeCor = window.getComputedStyle(seletorDeSelected).getPropertyValue ('background-color'); // window.getComputedStyle, vai selecionar os stylos do que vc selecionar e getPropertyValue vai fazer selecionar apenas o background color
    evento.target.style.backgroundColor = seletorDeCor //aqui esta adc esse stylo selecionado ao evento, no caso o pixel
}
botãoLimpar = document.querySelector('#clear-board')
botãoLimpar.addEventListener('click',limpando);
function limpando(){
    window.location.reload()
}



















