document.querySelector('.color').classList.add('selected');
const palette = document.querySelector('color-palette');
palette.addEventListener('click', (pickColor) => {
  const selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  pickColor.target.classList.add('selected');
});
