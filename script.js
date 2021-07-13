// Recupera as cores backgroundcolor da Color-Palette
const initialColors = document.getElementsByClassName('color');
initialColors[0].style.backgroundColor = 'black';
initialColors[1].style.backgroundColor = 'yellow';
initialColors[2].style.backgroundColor = 'red';
initialColors[3].style.backgroundColor = 'green';



// add event listen para remover a classe .selected
initialColors[0].addEventListener('click', addClass);
initialColors[1].addEventListener('click', addClass);
initialColors[2].addEventListener('click', addClass);
initialColors[3].addEventListener('click', addClass);

// criar funcao com itens
// Requisito 7

function addClass(event) {
  for (let index = 0; index < initialColors.length; index += 1) {
 //   console.log(initialColors[index].classList.contain('selected'));
//    if (initialColors[index].classList.includes('selected')) {
  initialColors[index].classList.remove('selected');    
console.log('clicou e removeu');
    }
  event.target.classList.add('selected');
}


// Requisito 8 trocar de classse removendo a classe "Selected"  e adicionar em outra cor a classe.

// Direciona o pixel a ser pintado
const blocksToPaint = document.getElementsByClassName('pixel');
const colorSelected = document.querySelector('.selected');
function paintColor(p) {
  p.target.style.backgroundColor = 'yellow';
}
// usar initalColors para poder pintar fazendo com que remColor troque o .selected e use a cor para ser pintada adicionando
// Seleciona o quadrado de pixel que vai ser clicado e adicionado a cor selecionada
for (let index = 0; index < blocksToPaint.length; index += 1) {
  blocksToPaint[index].addEventListener('click', paintColor);
}

// Requisito 9  limpar background / class pixel
const bgwall = document.querySelectorAll('.pixel');
function clearColors() { 
  for (let index = 0; index < bgwall.length; index += 1) {
    bgwall[index].style.backgroundColor = 'white';
  }
}
// Requisito 10
