const black = document.querySelector('.black');
const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');

// eslint-disable-next-line no-unused-vars
function setColor(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', setColor);
green.addEventListener('click', setColor);
pink.addEventListener('click', setColor);
blue.addEventListener('click', setColor);
