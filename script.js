document.querySelector('.color').classList.add('selected');
const palette = document.querySelector('color-palette');
palette.addEventListener('click', (pickColor) => {
  const selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  pickColor.target.classList.add('selected');
});
const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgorundColor = 'white';
  }
};
