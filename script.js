window.onload = function() {

let color1 = document.getElementsByClassName('color')[0];
color1.style.backgroundColor = "black";

let color2 = document.getElementsByClassName('color')[1];
color2.style.backgroundColor = "blue";

let color3 = document.getElementsByClassName('color')[2];
color3.style.backgroundColor = "green";

let color4 = document.getElementsByClassName('color')[3];
color4.style.backgroundColor = "yellow";

// função #7 para selecionar as 4 cores pré definidas  do pallete 
// evento click espera a ação do click para executar a função click na cor, a função invoca um evento que seleciona o alvo com target
function clickNaCor(event) {
  const corSelect = document.querySelector('.selected');
  corSelect.classList.remove('selected');

  event.target.classList.add('selected');
}
function addClick () {
color1.addEventListener("click" , clickNaCor);
color2.addEventListener("click" , clickNaCor);
color3.addEventListener("click" , clickNaCor);
color4.addEventListener("click" , clickNaCor);
}
addClick();
}

function corPixel(event) {
  const corSelectPixel = document.querySelector('.selected');

  event.target.style.backgroundColor = corSelectPixel.style.backgroundColor;
}

function ClickPixel () {
  const clickPalette = document.querySelector('#pixel-board');

  clickPalette.addEventListener('click', corPixel);
}
ClickPixel();