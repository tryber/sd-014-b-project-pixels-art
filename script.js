const blackDiv = document.getElementById('black');
const blueDiv = document.getElementById('blue');
const redDiv = document.getElementById('red');
const greenDiv = document.getElementById('green');
const caixaPixel = document.querySelector('#pixel-board');
const corSelecionada = document.querySelector('.selected');
const caixinhaPixel = document.querySelector('.pixel');


function changeSelectedColor (event) {
  let color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

blackDiv.addEventListener('click', changeSelectedColor);
blueDiv.addEventListener('click', changeSelectedColor);
redDiv.addEventListener('click', changeSelectedColor);
greenDiv.addEventListener('click', changeSelectedColor);

function paintSquare(event){
  event.target.style.backgroundColor = document.querySelector('.selected').id;
}
caixaPixel.addEventListener('click', paintSquare)