const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const button = document.getElementById('clear-board');

function selected(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selected);
}

function pixelColor(event) {
  const select = document.querySelector('.selected');
  const cor = select.id;
  event.target.style.backgroundColor = cor;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', pixelColor);
}

function clearButton() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearButton);
