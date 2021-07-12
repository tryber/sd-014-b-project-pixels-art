let black = document.querySelector('.black').style.backgroundColor = 'black';
let yellow = document.querySelector('.yellow').style.backgroundColor = 'yellow';
let red = document.querySelector('.red').style.backgroundColor = 'red';
let green = document.querySelector('.green').style.backgroundColor = 'green'; 

function addSelected(event) {
  const selected1 = document.querySelector('.selected');
  selected1.classList.remove('selected');
  event.target.classList.add('selected');
}
const colors = document.querySelector('#color-palette');
colors.addEventListener('click', addSelected);

function changeColor(event) {
  const cor = document.querySelector('.selected');
  event.target.style.backgroundColor = cor.style.backgroundColor;
}
const caixaDeQuadrados = document.querySelector('#pixel-board');
caixaDeQuadrados.addEventListener('click', changeColor);
