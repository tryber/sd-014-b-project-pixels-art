const black = document.querySelector('.black');

window.addEventListener('load', function() {
  black.classList.add('selected')
})

let colors = document.querySelectorAll('.color');
let paletteColors = document.body.children[1];

function selectedColor(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.length === 3) {
      event.target.parentElement.children[index].classList.remove('selected');
    }
    if (colors[index].classList.length === 2) {
      event.target.classList.add('selected');
    }
  }
}

paletteColors.addEventListener('click', selectedColor);