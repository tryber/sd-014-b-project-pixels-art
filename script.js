function changeToSelectedColor(event) {
  const pickedColor = document.querySelector('.selected');
  const style = window.getComputedStyle(pickedColor);
  event.target.style.backgroundColor = style.getPropertyValue('background-color');
}

function pickColor(event) {
  const previousSelected = document.querySelector('.selected');
  previousSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function resetPixels() {
  for (let index = 0; index < pixelsArray.length; index += 1) {
    pixelsArray[index].style.removeProperty('background-color');
  }
}

const blackBox = document.getElementById('blackBox');
const cornBox = document.getElementById('cornFlowerBox');
const hotBox = document.getElementById('hotPinkBox');
const tiffanyBox = document.getElementById('tiffanyBlueBox');
const cleaningbutton = document.getElementById('clear-board');
const pixelsArray = document.querySelectorAll('.pixel');

blackBox.addEventListener('click', pickColor);
cornBox.addEventListener('click', pickColor);
hotBox.addEventListener('click', pickColor);
tiffanyBox.addEventListener('click', pickColor);
cleaningbutton.addEventListener('click', resetPixels);

for (let index = 0; index < pixelsArray.length; index += 1) {
  pixelsArray[index].addEventListener('click', changeToSelectedColor);
}
