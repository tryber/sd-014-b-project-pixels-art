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


