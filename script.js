// Define a cor preta como cor inicial.
document.getElementById('black').classList.add('selected');
// Clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
const palette = document.getElementById('color-palette');
palette.addEventListener('click', (event) => {
  const pickColor = document.getElementsByClassName('color');
  for (let key = 0; key <= pickColor.length; key += 1) {
    pickColor[key].classList.remove('selected');
    event.target.classList.add('selected');
  }
});
// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta, faz com que o pixel seja preenchido com a cor selecionada.
const toColor = () => {
  const coloringBoard = document.getElementById('pixel-board');

  coloringBoard.addEventListener('click', (event) => {
    const selectColor = document.querySelector('.selected');
    const currentColor = window.getComputedStyle(selectColor).getPropertyValue('background-color');
    event.target.style.backgroundColor = currentColor;
  });
};
toColor();
// Botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
const clearBoard = () => {
  const pixels = document.getElementsByClassName('pixel');

  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].style.backgroundColor = 'white';
  }
};
clearBoard();
