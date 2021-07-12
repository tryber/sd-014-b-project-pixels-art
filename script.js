// Define a cor preta como cor inicial.
document.querySelector('.color').classList.add('selected');
// Clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
// Help da Bel Alburquerque com a dica de tirar o loop.
const palette = document.querySelector('#color-palette');
palette.addEventListener('click', (event) => {
  const pickColor = document.querySelector('.selected');
  pickColor.classList.remove('selected');
  event.target.classList.add('selected');
});
// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta, faz com que o pixel seja preenchido com a cor selecionada.
const toColor = () => {
  const coloringBoard = document.querySelector('#pixel-board');

  coloringBoard.addEventListener('click', (event) => {
    const selectColor = document.querySelector('.selected');
    const currentColor = window.getComputedStyle(selectColor).getPropertyValue('background-color');
    event.target.style.backgroundColor = currentColor;
  });
};
toColor();
// Botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');

  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].style.backgroundColor = 'white';
  }
};
clearBoard();
