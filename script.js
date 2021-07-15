window.onload = function () {
  let colorSelected = document.getElementById('black');
  colorSelected.classList.add('selected');
};

function clickColor(evento) {
  let colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
};

const clickRed = document.querySelector('#red');
clickRed.addEventListener('click', clickColor);
const clickBlue = document.querySelector('#blue');
clickBlue.addEventListener('click', clickColor);
const clickGreen = document.querySelector('#green');
clickGreen.addEventListener('click', clickColor);
const clickBlack = document.querySelector('#black');
clickBlack.addEventListener('click', clickColor);

const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', painting);
}

function painting(evento) {
  let color = document.querySelector('.selected');
  evento.target.style.backgroundColor = color.id;
};

const clean = document.querySelector('#clear-board');
clean.addEventListener('click', cleaning);

function cleaning() {
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
  }
};
