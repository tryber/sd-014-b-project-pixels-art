//Estabelecendo preto como principal
window.onload = function () {
  let firstColor = document.getElementById('black');
  firstColor.classList.add('selected');
}
//Selecionando as cores
function afterColor(evento) {
  let oneColor = document.getElementsByClassName('color');
  for (let index = 0; index < oneColor.length; index += 1) {
    oneColor[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

const blackColor = document.querySelector('#black');
blackColor.addEventListener('click', afterColor);
const blueColor = document.querySelector('#blue');
blueColor.addEventListener('click', afterColor);
const orangeColor = document.querySelector('#orange');
orangeColor.addEventListener('click', afterColor);
const pinkColor = document.querySelector('#pink');
pinkColor.addEventListener('click', afterColor);

//pintando os pixels
const pixelPaint = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelPaint.length; i++) {
  pixelPaint[i].addEventListener('click', paint);
}

function paint(evento) {
  let color = document.querySelector('.selected');
  evento.target.style.backgroundColor = color.id;
}

//limpando o quadro
const oneDelete = document.querySelector('#clear-board');
oneDelete.addEventListener('click', deleteAll);

function deleteAll() {
  for (let i = 0; i < pixels.length; i++) {
    pixelPaint[i].style.backgroundColor = 'white';
  }
}
