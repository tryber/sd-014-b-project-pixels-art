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

colorAllPixels.addEventListener("click", function e(event) {
  const selection = document.querySelector('.selected');
  const colorSelection = window.getComputedStyle(selection).getPropertyValue("background-color");
  event.target.style.backgroundColor = colorSelection;
})

const clearButton = document.querySelector("#clear-board")
clearButton.addEventListener("click", function clearBtn() {
  for (i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
})
