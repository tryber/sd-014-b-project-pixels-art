const selectColorBlack = document.querySelector('#black');
const selectColorPurple = document.querySelector('#purple');
const selectColorYellow = document.querySelector('#yellow');
const selectColorBlue = document.querySelector('#blue');
const colorAllPixels = document.querySelector('#pixel-board');
const allPixels = document.querySelectorAll(".pixel");



function selectBlack() {
  const colorBlack = document.querySelector('.selected');
  colorBlack.style.backgroundColor = 'black';
}
selectBlack();

selectColorBlack.addEventListener('click', selectColor);
selectColorPurple.addEventListener('click', selectColor);
selectColorYellow.addEventListener('click', selectColor);
selectColorBlue.addEventListener('click', selectColor);

function selectColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}


const clear = document.querySelector("#clear-board")
clear.addEventListener("click", function clear() {
  for (i = 0; i < colorAllPixels.length; i += 1) {
    colorAllPixels[i].style.backgroundColor = 'white';
  }
})
