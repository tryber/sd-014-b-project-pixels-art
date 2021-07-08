const blackPixel = document.getElementById('black');
const orangeRedPixel = document.getElementById('orange-red');
const bluePixel = document.getElementById('blue');
const greenPixel = document.getElementById('green');
  
function selectedColor() {
  function changeSelected(event) {
    const divSelected = document.querySelector('.selected');
    divSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }

  blackPixel.addEventListener('click', changeSelected);
  orangeRedPixel.addEventListener('click', changeSelected);
  bluePixel.addEventListener('click', changeSelected);
  greenPixel.addEventListener('click', changeSelected);
}

selectedColor();

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}, false);
// Acima foi ultilizado o conceito de event bubbling contido no link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/

const resetButton = document.getElementById('clear-board');
resetButton.addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.backgroundColor = 'white';
  }
});
