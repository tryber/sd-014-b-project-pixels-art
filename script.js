// Requisito 07
const black = document.querySelector('.black');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

function selectedColor(event) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectedColor);
green.addEventListener('click', selectedColor);
blue.addEventListener('click', selectedColor);
yellow.addEventListener('click', selectedColor);

// Requisito 08
