// Requisito 2 e 3
const colors = document.querySelectorAll('.color');
const black = colors[0];
const cyan = colors[1];
const magenta = colors[2];
const yellow = colors[3];
black.style.backgroundColor = 'black';
cyan.style.backgroundColor = 'cyan';
magenta.style.backgroundColor = 'magenta';
yellow.style.backgroundColor = 'yellow';

// Requisito 4 e 5
const canvas = document.createElement('div');
canvas.id = 'pixel-board';
document.querySelector('body').appendChild(canvas);
for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.innerHTML = index;
  canvas.appendChild(pixel);
}
