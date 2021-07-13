const selectColorBlack = document.querySelector('#black');
const selectColorPurple = document.querySelector('#purple');
const selectColorYellow = document.querySelector('#yellow');
const selectColorBlue = document.querySelector('#blue');
const allColors = document.querySelectorAll('.color');


function selectBlack() {
  const colorBlack = document.querySelector('.selected');
  colorBlack.style.backgroundColor = 'black';
}
selectBlack();

function selectColors() {

  function selectColor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }

  selectColorBlack.addEventListener('click', selectColor);
  selectColorPurple.addEventListener('click', selectColor);
  selectColorYellow.addEventListener('click', selectColor);
  selectColorBlue.addEventListener('click', selectColor);
}
selectColors();
