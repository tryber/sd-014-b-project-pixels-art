const blackPixel = document.getElementById('black');
const orangeRedPixel = document.getElementById('orange-red');
const bluePixel = document.getElementById('blue');
const greenPixel = document.getElementById('green');

function selectedColor() {
  function changeSelected(event) {
    let divSelected = document.querySelector('.selected');
    divSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }

  blackPixel.addEventListener('click', changeSelected);
  orangeRedPixel.addEventListener('click', changeSelected);
  bluePixel.addEventListener('click', changeSelected);
  greenPixel.addEventListener('click', changeSelected);
}

selectedColor();
