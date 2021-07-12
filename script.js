function criaPixels(x, y) { // cria a tabela de pixel art com o tamanho x de lagura e y de altura.
  const div = document.querySelector('#pixel-board');
  for (let index = 0; index < y; index += 1) {
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (let index = 0; index < x; index += 1) {
      let li = document.createElement('li');
      ul = document.querySelector('div').lastChild;
      ul.appendChild(li);
      li = ul.lastChild;
      li.className = 'pixel';
    }
  }
}

function selectColorAndRemove(event){                    // Apartir da variavel 'color' adiciona a classe selected
    let cor = event.target.classList[1];
    let color = document.querySelector('.' + cor);
    color.classList.add('selected');
    switch (cor) {
        case 'cor0':
        document.querySelector('.cor1').classList.remove('selected');   
        document.querySelector('.cor2').classList.remove('selected');   
        document.querySelector('.cor3').classList.remove('selected');
        break; 
        case 'cor1':
        document.querySelector('.cor0').classList.remove('selected');   
        document.querySelector('.cor2').classList.remove('selected');   
        document.querySelector('.cor3').classList.remove('selected');
        break;   
        case 'cor2':
        document.querySelector('.cor0').classList.remove('selected');   
        document.querySelector('.cor1').classList.remove('selected');   
        document.querySelector('.cor3').classList.remove('selected');
        break;
        case 'cor3':
        document.querySelector('.cor0').classList.remove('selected');   
        document.querySelector('.cor1').classList.remove('selected');   
        document.querySelector('.cor2').classList.remove('selected');
        break;      
} 
};

function criarEventosPaletaDeCores(){
    for (let index = 0; index <= 3; index += 1){
        colors[index].addEventListener('click', selectColorAndRemove);
    }; 
}

function addEventPixels() {
  let div = document.querySelector('div');
  let pixels = div.querySelectorAll('li');
  let color = document.querySelectorAll('.color');
  let cor = [];
  let colors = document.querySelectorAll('.color');
  for(let index = 0; index <= color.length - 1; index += 1 ) {
    cor.push(color[index].style.backgroundColor);
    console.log(cor);
    console.log(color[index].style.backgroundColor);
  }
    for(let pixel of pixels) {
        pixel.addEventListener('click', function () {
        let corAtual = 'null';
        for (let index = 0; index <= 3; index += 1){
            if (colors[index].classList[2] === "selected"){
                let corAtual = colors[index].classList[1];
                if (corAtual === 'cor0'){
                    pixel.style.backgroundColor = 'black';
                }
                if (corAtual === 'cor1'){
                    pixel.style.backgroundColor = cor[1] ;
                }
                if (corAtual === 'cor2'){
                    pixel.style.backgroundColor = cor[2];
                }
                if (corAtual === 'cor3'){
                    pixel.style.backgroundColor = cor[3];
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
  const tabela = document.querySelector('div').querySelectorAll('li');
  // eslint-disable-next-line no-restricted-syntax
  for (let pixel of tabela) {
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
  }
}

function removeTabela() {
  let tabela = document.getElementById('pixel-board');
  let ul = document.querySelectorAll('ul');
  for (let index = 1; index <= ul.length - 1; index += 1) {
    tabela.removeChild(ul[index]);  
  }
}

function recriaPixels() {
  if (document.getElementById('board-size').value === "") {
    alert('Board inválido!');
    return;
  }
  let input = parseInt(document.getElementById('board-size').value);
  if (input < 5) {
    removeTabela();
    criaPixels(5, 5);
  } 
  else if (input > 50) {
    removeTabela();
    criaPixels(50, 50);
  }
  else {
    removeTabela();
    criaPixels(input, input);
    addEventPixels();
  }      
}

function sortColors() {
  let color = document.querySelectorAll('li');
  let value = [];
  for (let index = 1; index <= 3; index += 1) {
    value[index] = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    color[index].style.backgroundColor = value[index];
    }
  }

sortColors();
const button = document.querySelector('#clear-board');
let colors = document.querySelectorAll('.color');
criaPixels(5,5);
colors[0].classList.add('selected'); // seleciona o preto.
criarEventosPaletaDeCores();
addEventPixels();
button.addEventListener('click', apagar);
let buttonVqv = document.getElementById('generate-board');
buttonVqv.addEventListener('click', recriaPixels);

