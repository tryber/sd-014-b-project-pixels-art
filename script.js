const colorOne = document.querySelector('#black');
const colorTwo = document.querySelector('#pink');
const colorTree = document.querySelector('#green');
const colorFour = document.querySelector('#purple');
const whiteBox = document.querySelector('#pixel-board');

function selectColor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}
colorOne.addEventListener('click', selectColor);
colorTwo.addEventListener('click', selectColor);
colorTree.addEventListener('click', selectColor);
colorFour.addEventListener('click', selectColor);

function colorir(event) {
  const corSelecionada = document.querySelector('.selected').id;
  event.target.style.backgroundColor = corSelecionada;  
}
whiteBox.addEventListener('click', colorir);

