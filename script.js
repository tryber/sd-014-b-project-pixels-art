const blackDiv = document.getElementById('black');
const blueDiv = document.getElementById('blue');
const redDiv = document.getElementById('red');
const greenDiv = document.getElementById('green');
const caixaPixel = document.querySelector('#pixel-board');
const corSelecionada = document.querySelector('.selected');
const caixinhaPixel = document.querySelector('.pixel');
const botaoLimpar = document.getElementById('#clear-board')

function changeSelectedColor(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

blackDiv.addEventListener('click', changeSelectedColor);
blueDiv.addEventListener('click', changeSelectedColor);
redDiv.addEventListener('click', changeSelectedColor);
greenDiv.addEventListener('click', changeSelectedColor);

function paintSquare(event){
  event.target.style.backgroundColor = document.querySelector ('.selected').id;
}
caixaPixel.addEventListener('click', paintSquare); 

// function clearButton(){
//   let caixaPintada = document.querySelectorAll('.pixel');
//   for (let i=0; i=24; i++){
//     caixaPintada[i].style.backgroundColor = 'white';
//   }
//  }
//  botaoLimpar.addEventListener('click', clearButton)