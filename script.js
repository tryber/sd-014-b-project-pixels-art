function mudarSelected(evento) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  evento.target.classList.add('selected');
}
const colorPallete = document.querySelector('#color-palette');
colorPallete.addEventListener('click', mudarSelected);
