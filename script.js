function recebeClick(evento) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  evento.target.classList.add('selected');
  console.log(evento.target);
}

const paletaDeCores = document.querySelector('#color-palette');
paletaDeCores.addEventListener('click', recebeClick);

function colorePixel(eventoDeOrigem) {
  const corSelecionada = document.querySelector('.selected').id;
  eventoDeOrigem.target.style.backgroundColor = corSelecionada;
}
// https://stackoverflow.com/questions/30112838/javascript-onclick-get-the-div-id

const pixel = document.getElementsByClassName('pixel');

for (let indice = 0; indice < pixel.length; indice += 1) {
  pixel[indice].addEventListener('click', colorePixel);
}

if (window.onload) {
  const preto = document.querySelector('#black');
  document.getElementsByClassName('pixel').style.backgroundColor = preto;
}
