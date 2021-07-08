function criaPixels(x,y){           // cria a tabela de pixel art com o tamanho x de lagura e y de altura.
    let div = document.querySelector('#pixel-board');
    
    for (let index = 0; index < y; index ++){
        let ul = document.createElement('ul');
        div.appendChild(ul);
        for (let index = 0; index < x; index ++){
            let li = document.createElement('li');
            ul = document.querySelector('div').lastChild;
            ul.appendChild(li);
            li = ul.lastChild;
            li.className = 'pixel';
        }
    } 
};

function selectColorAndRemove(event){                    // Apartir da variavel 'color' adiciona a classe selected
    let cor = event.target.classList[1];
    let color = document.querySelector('.' + cor);
    color.classList.add('selected');
    switch (cor) {
        case 'preto':
        document.querySelector('.vermelho').classList.remove('selected');   
        document.querySelector('.azul').classList.remove('selected');   
        document.querySelector('.roxo').classList.remove('selected');
        break; 
        case 'vermelho':
        document.querySelector('.preto').classList.remove('selected');   
        document.querySelector('.azul').classList.remove('selected');   
        document.querySelector('.roxo').classList.remove('selected');
        break;   
        case 'roxo':
        document.querySelector('.vermelho').classList.remove('selected');   
        document.querySelector('.azul').classList.remove('selected');   
        document.querySelector('.preto').classList.remove('selected');
        break;
        case 'azul':
        document.querySelector('.vermelho').classList.remove('selected');   
        document.querySelector('.roxo').classList.remove('selected');   
        document.querySelector('.preto').classList.remove('selected');
        break;      
} 
};

function criarEventosPaletaDeCores(){
    for (let index = 0; index <= 3; index += 1){
        colors[index].addEventListener('click', selectColorAndRemove);
    }; 
}

function addEventPixels(){
    let div = document.querySelector('div');
    let pixels = div.querySelectorAll('li');
    // let cor = colors.
    for(let pixel of pixels){
        pixel.addEventListener('click', function () {
        let corAtual = 'null'
        for (let index = 0; index <= 3; index += 1){
            if (colors[index].classList[2] === "selected"){
                let corAtual = colors[index].classList[1];
                if (corAtual === 'preto'){
                    pixel.style.backgroundColor = 'black';
                }
                if (corAtual === 'azul'){
                    pixel.style.backgroundColor = 'blue';
                }
                if (corAtual === 'roxo'){
                    pixel.style.backgroundColor = 'purple';
                }
                if (corAtual === 'vermelho'){
                    pixel.style.backgroundColor = 'red';
                }
                pixel.classList.remove('pixel')
                pixel.classList.add(corAtual);
                pixel.classList.add('pixel');
                console.log(colors[index].classList[1]);
            }  
        }
        });
    }
}

function apagar() {
    let tabela = document.querySelector('div').querySelectorAll('li');
    for (let pixel of tabela){
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
    }
}

let button = document.querySelector('button');
var colors = document.querySelectorAll('.color');
criaPixels(5,5);
colors[0].classList.add('selected'); // seleciona o preto.
criarEventosPaletaDeCores();
addEventPixels();
button.addEventListener('click', apagar);






