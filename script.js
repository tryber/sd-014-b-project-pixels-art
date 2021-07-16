function mudarSelected(evento) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  evento.target.classList.add('selected');
}
const pixelBoard = document.querySelector('#pixel-board');
const black = document.getElementById('Black');
const red = document.getElementById('Red');
const green = document.getElementById('Green');
const yellow = document.getElementById('Yellow');

black.addEventListener('click', mudarSelected);
red.addEventListener('click', mudarSelected);
green.addEventListener('click', mudarSelected);
yellow.addEventListener('click', mudarSelected);

function color(evento) {
  const select = document.querySelector('.selected');
  evento.target.style.backgroundColor = select.id;
}
pixelBoard.addEventListener('click', color);
