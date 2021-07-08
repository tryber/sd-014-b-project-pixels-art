const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', selecionar);
const pixelBoard = document.querySelector('#pixel-board');
const apagar = document.getElementById('clear-board');

function selecionar(event) {
  const cores = document.querySelectorAll('.color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function trocarCor(event) {
  let pintar = document.querySelector('.color.selected');
  let cor = pintar.getAttribute('id');
  event.target.setAttribute('id', cor);
}
pixelBoard.addEventListener('click', trocarCor);

function clear() {
  const pixel = document.getElementsByClassName('pixel');
  apagar.addEventListener('click', () => {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
}
clear();
