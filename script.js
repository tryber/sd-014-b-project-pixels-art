// Requisito 7

/// A classe selected sai de uma cor e passa pra outra com o clique

const colorPalette = document.querySelector('#color-palette');
const tablePixels = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');
var allCollors = document.querySelector('#pixel-board');
var cliquePixel = document.querySelector('.pixel');

function removeSelectedClass() {
  var cliquePixel = document.querySelectorAll('#color-palette');
  for (let index = 0; index < cliquePixel.length; index += 1) {
    if (cliquePixel[index].classList.contains('selected')) {
     cliquePixel[index].classList.remove('selected');
    }
  }
}
colorPalette.addEventListener('click', (element) => {
  removeSelected();
  element.target.classList.add('selected');
});

function colorRGB(color) {
  switch (color) {
  case 'black':
    return 'rgb(0, 0, 0)';
  case 'orange':
    return 'rgb((255,165,0)';
  case 'red':
    return 'rgb((255,69,0)';
  case 'blue':
    return 'rgb(0,0,255)';
  default:
    return null;
  }
}
/// requisito 9
/// Criar um botão com o texto "limpar" - ok
/// O botão precisa ter a função de limpar a cor do pixel e deixar branco
/// A cor da paleta é selecionada com clique e passa para a tabela de pixels
/// Adicionar ao botão um evento de clique

clearButton.addEventListener('click', () => {
  removeSelected();
  const tablePixels= colorPalette.children[0];
  tablePixels.classList.add('selected');

  tablePixels.innerHTML = '';
});