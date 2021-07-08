const colorOne = document.querySelector('#black');
const colorTwo = document.querySelector('#pink');
const colorTree = document.querySelector('#green');
const colorFour = document.querySelector('#purple');

function selectColor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}
colorOne.addEventListener('click', selectColor);
colorTwo.addEventListener('click', selectColor);
colorTree.addEventListener('click', selectColor);
colorFour.addEventListener('click', selectColor);
