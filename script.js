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


let colors = document.querySelectorAll('.color');
criaPixels(5,5);
colors[0].classList.add('selected'); // seleciona o preto.
for (let index = 0; index <= 3; index += 1){
    colors[index].addEventListener('click', selectColorAndRemove);
};






