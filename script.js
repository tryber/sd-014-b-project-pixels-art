///usando hugo como referência
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

let blackColor = document.querySelector('#black');
blackColor.addEventListener('click', afterColor);
let blueColor = document.querySelector('#blue');
blueColor.addEventListener('click', afterColor);
let orangeColor = document.querySelector('#orange');
orangeColor.addEventListener('click', afterColor);
let pinkColor = document.querySelector('#red');
pinkColor.addEventListener('click', afterColor);

//pintando os pixels
let pixelPaint = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelPaint.length; index += 1) {
  pixelPaint[index].addEventListener('click', paint);
}

//https://stackoverflow.com/questions/60559793/changing-the-background-color-with-click-using-queryselector-js
function paint(evento) {
  let color = document.querySelector('.selected');
  evento.target.style.backgroundColor = color.id;
}

//limpando o quadro
let oneDelete = document.querySelector('#clear-board');
oneDelete.addEventListener('click', deleteAll);

function deleteAll() {
  for (let index = 0; index < pixelPaint.length; index += 1) {
    pixelPaint[index].style.backgroundColor = 'white';
  }
}