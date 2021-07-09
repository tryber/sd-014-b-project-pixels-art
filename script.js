// arrow use e outros problemas corrigidos pela extensão es-lint de forma automática (quick-fix)

/* eslint-disable semi */
const Colors = document.querySelector('#pixel-board');
Colors.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const selectedColor = document.querySelector('.selected');
    const color = window.getComputedStyle(selectedColor).backgroundColor;
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = color;
  }
})

// uso de Window.getComputedStyle() conforme:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const palettes = document.querySelectorAll('.color');
for (let index = 0; index < palettes.length; index += 1) {
  palettes[index].addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', () => {
    const newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixel[index].style.backgroundColor = newColor;
  });
}

const button = document.getElementById('clear-board');
// eslint-disable-next-line no-use-before-define
button.addEventListener('click', clear);

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
}
