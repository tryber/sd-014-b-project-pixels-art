let Colors = document.querySelector('#pixel-board');
Colors.addEventListener("click", function (event) {
  if (event.target.className === 'pixel') {
    let selectedColor = document.querySelector('.selected');
    let color = window.getComputedStyle(selectedColor).backgroundColor;
    event.target.style.backgroundColor = color;
  }
});

// uso de Window.getComputedStyle() conforme:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

let palettes = document.querySelectorAll('.color');
for (let index = 0; index < palettes.length; index += 1) {
  palettes[index].addEventListener('click', function (event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
};

const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function () {
    let newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixel[index].style.backgroundColor = newColor;
  });
};

const button = document.getElementById('clear-board');
button.addEventListener('click', clear);

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
}