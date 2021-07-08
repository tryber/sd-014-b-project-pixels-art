const black = document.querySelector('.black');
const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');

// Requisito 7
function setColor(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', setColor);
green.addEventListener('click', setColor);
pink.addEventListener('click', setColor);
blue.addEventListener('click', setColor);

// Requisito 8
function selectColor(event) {
  const color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.id;
}
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', selectColor);
