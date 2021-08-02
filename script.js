const preto = document.getElementById('preto');
const vermelho = document.getElementById('vermelho');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');
let corPrimaria = document.querySelector('.selected');

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
