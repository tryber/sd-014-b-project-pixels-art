const pixelColor = document.querySelector('#pixel-board');

const blackColor = document.getElementById('black');
const blueColor = document.getElementById('blue');
const greenColor = document.getElementById('green');
const yellowColor = document.getElementById('yellow');

function catchColor(event) {
  const selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener('click', catchColor);
blueColor.addEventListener('click', catchColor);
greenColor.addEventListener('click', catchColor);
yellowColor.addEventListener('click', catchColor);

pixelColor.addEventListener('click', changeColor);

function changeColor(event) {
  const selectColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectColor.id;
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearAll);

function clearAll(){
  const element = document.querySelectorAll('.pixel');
  for (let index = 0; index < element.length; index += 1) {
    element[index].style.backgroundColor = 'white';
  };
}
