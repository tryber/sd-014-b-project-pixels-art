const colorBlack = document.querySelector('.black');
const colorYellow = document.querySelector('.yellow');
const colorMagenta = document.querySelector('.magenta');
const colorCyan = document.querySelector('.cyan');
const sectionMatriz = document.querySelector('#pixel-board');

function oneClick(event) {
  const selectedClass = document.querySelector('.selected');
  selectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', oneClick);
colorYellow.addEventListener('click', oneClick);
colorMagenta.addEventListener('click', oneClick);
colorCyan.addEventListener('click', oneClick);
