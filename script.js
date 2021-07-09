const black = document.querySelector('.black');

window.addEventListener('load', function() {
  black.classList.add('selected');
})

let colors = document.querySelectorAll('.color');
let divColors = document.body.children[0].children[1];
let selectColor = document.querySelector('.selected');

function selectedPallet(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.length === 3) {
      event.target.parentElement.children[index].classList.remove('selected');
    }
    if (colors[index].classList.length === 2) {
      event.target.classList.add('selected');
    }
  }
}

divColors.addEventListener('click', selectedPallet);
