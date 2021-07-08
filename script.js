const colorBlack = document.querySelector('.black');
const colorYellow = document.querySelector('.yellow');
const colorMagenta = document.querySelector('.magenta');
const colorCyan = document.querySelector('.cyan');
const section = document.querySelector('#pixel-board');

function oneClick(event) {
  let selectedClass = document.querySelector('.selected');
  selectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', oneClick);
colorYellow.addEventListener('click', oneClick);
colorMagenta.addEventListener('click', oneClick);
colorCyan.addEventListener('click', oneClick);
