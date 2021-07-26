document.querySelector('.color').classList.add('selected');
const palette = document.querySelector('#color-palette');
palette.addEventListener('click', (event) => {
  const choseColor = document.querySelector('.selected');
  choseColor.classList.remove('selected');
  event.target.classList.add('selected');
});
const Colorir = () => {
  const coloringBoard = document.querySelector('#pixel-board');

  coloringBoard.addEventListener('click', () => {
    const selectColor = document.querySelector('.selected');
    const currentColor = window.getComputedStyle(selectColor).getPropertyValue('background-color');
    Event.target.style.backgroundColor = currentColor;
  });
};
Colorir();
const Limpar = () => {
  const pixels = document.querySelectorAll('.pixel');

  for (let key = 0; key < pixels.length; key += 1) {
    pixels[key].style.backgroundColor = 'white';
  }
};
Limpar();
