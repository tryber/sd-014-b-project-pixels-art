let pegaPreto = document.getElementsByClassName('color');
pegaPreto[0].classList.add('selected');
function criaGrid() {
  const alturaGrid = 5;
  const larguraGrid = 5;
  const grid = document.getElementById('pixel-board');

  for (let i = 0; i < alturaGrid; i++) {
    const coluna = grid.insertRow(0);
    for (let x = 0; x < larguraGrid; x++) {
      let celula = coluna.insertCell(0);
      celula.classList.add('pixel');
      celula.style.backgroundColor = 'white';
    }
  }
}
criaGrid();
const pegaPixel = document.querySelectorAll('.pixel');
const grid = document.getElementById('pixel-board');

for (let i = 0; i < pegaPixel.length; i++) {
  pegaPixel[i].addEventListener('click', function () {
    let selecaoCor = document.querySelector('.selected');
    if (
      pegaPixel[i].style.backgroundColor !== selecaoCor.style.backgroundColor
    ) {
      pegaPixel[i].style.backgroundColor = selecaoCor.style.backgroundColor;
    }
  });
}
/*grid.addEventListener(
  'click',
  function (event) {
    console.log(event);
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = selecaoCor.style.backgroundColor;
    }
  },
  false
);*/

const pegaCores = document.querySelectorAll('.color');
for (i = 0; i < pegaCores.length; i++) {
  const corSelecionada = pegaCores[i];
  corSelecionada.addEventListener('click', function () {
    const ultimaSelecionada = document.querySelector('.selected');
    ultimaSelecionada.classList.remove('selected');
    corSelecionada.classList.add('selected');
  });
}
