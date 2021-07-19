botaoGenerateBoard = document.getElementById('generate-board');
pixelBoard = document.getElementById('pixel-board');
paleta = document.getElementById('color-palette');
cores = document.querySelectorAll('.color');
let defaultColor = cores[0];
botaoLimpa  = document.getElementById('clear-board');


//REQ5
botaoGenerateBoard.addEventListener('click',function criaTabela(){
    for (let index = 0; index < 4; index++) {
        const linha = document.createElement('div');
        linha.className = "linha";
        
        for (let i = 0; i < 4; i++) {
            const coluna = document.createElement('div');
            coluna.className = "pixel";   
            linha.appendChild(coluna);
        }
        pixelBoard.appendChild(linha);
    }
})

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