const preto = document.getElementById('black');
const vermelho = document.getElementById('red');
const azul = document.getElementById('blue');
const verde = document.getElementById('green');
let corPrimaria = document.querySelector('.selected');
const pixels = document.querySelectorAll('.pixel');
const botao = document.getElementById('clear-board');

function trocaCor(event) {
  const selecionaCor = event.target;
  if (selecionaCor !== corPrimaria) {
    corPrimaria.classList.remove('selected');
    selecionaCor.classList.add('selected');
  } corPrimaria = selecionaCor;
}

preto.addEventListener('click', trocaCor);
vermelho.addEventListener('click', trocaCor);
azul.addEventListener('click', trocaCor);
verde.addEventListener('click', trocaCor);

function pintar(event) {
  const selected = document.getElementsByClassName('selected');
  event.target.style.backgroundColor = selected[0].id;
} for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', pintar);
}

function limpar() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (const key of pixelBoard) {
    key.style.backgroundColor = 'rgb(255,255,255)';
  }
}
botao.addEventListener('click', limpar);
