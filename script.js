const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorPurple = document.querySelector('#purple');
const colorGrey = document.querySelector('#grey');
const boxPixels = document.querySelector('#pixel-board');

//selected (7)//
function clickPixel (event) {
  const classSelect = document.querySelector('.selected');
  classSelect.classList.remove('selected');
  event.target.classList.add('selected');
}
//preenchendo pixel-board (8)//
colorBlack.addEventListener('click', clickPixel);
colorGreen.addEventListener('click', clickPixel);
colorPurple.addEventListener('click', clickPixel);
colorGrey.addEventListener('click', clickPixel);

function colorPixel(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.id;
}

boxPixels.addEventListener('click', colorPixel);

//botão Limpar (9)//
function apagarTudo() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    //ao ser clicado deixa a tela branca (que é a união mágica de vermelho 255, verde 255 e azul 255//
  }
}

function adicionarApagarEvento() {
  document.getElementById('clear-board').addEventListener('click', apagarTudo);
}

adicionarApagarEvento();
