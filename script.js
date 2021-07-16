function recebeClick(evento) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  evento.target.classList.add('selected');
  console.log(evento.target);
}

const paletaDeCores = document.querySelector('#color-palette');
paletaDeCores.addEventListener('click', recebeClick);
