const botaoGenerateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const paleta = document.getElementById('color-palette');
const cores = document.querySelectorAll('.color');
let defaultColor;
const botaoLimpa  = document.getElementById('clear-board');


//REQ5
function criaTabela(size){
    pixelBoard.innerHTML='';
    for (let index = 0; index < size; index++) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
        for (let i = 0; i < size; i++) {
            const coluna = document.createElement('div');
            coluna.classList.add('pixel');   
            linha.appendChild(coluna);
        }
        pixelBoard.appendChild(linha);
    }
};
//tabela botao
botaoGenerateBoard.addEventListener('click', () =>{
    const size = document.querySelector('#board-size').value; 
    if(size === '' || size < 0){
        alert('Board inválido!');
        return;
    }else if(size < 5){
        criaTabela(5);
    }else if(size > 50){
        criaTabela(50);
    }else{
        criaTabela(size);
    }
});

//REQ7  
paleta.addEventListener('click', function selecionaCor(event){
    const corSelecionada = event.target;
    if(corSelecionada !== defaultColor){
        defaultColor.classList.remove('selected');
        corSelecionada.classList.add('selected');
    }
    defaultColor = corSelecionada;

})

//req 8
pixelBoard.addEventListener('click', function pintaPixel(event){
    let e = event.target;
    e.style.backgroundColor = defaultColor.id;
})

//req 9
botaoLimpa.addEventListener('click',function limpaPixel(){
    let p = document.querySelectorAll('.pixel');
    for (let index = 0; index < p.length; index++) {
        p[index].removeAttribute('style');
    }
}) 

window.onload = function(){
    defaultColor = document.getElementById('black');
    defaultColor.classList.add('selected');
    criaTabela(5);    
};