const color = ['black'];
const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

function rgbR() {
  const rgb = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  return rgb;
}

for (let i = 0; i < 3; i += 1) {
  color.push(rgbR());
}

for (let i = 0; i < color.length; i += 1) {
  const blu = document.createElement('div');
  blu.classList = 'color';
  blu.style.backgroundColor = color[i];
  palette.appendChild(blu);
}

function tamanho(cell) {
  for (let i = 0; i < cell; i += 1) {
    const pixel = document.createElement('tr');
    pixel.classList = 'pboard';
    board.appendChild(pixel);
    for (let index = 0; index < cell; index += 1) {
      const pixel2 = document.createElement('td');
      pixel2.classList = ('pboard pixel');
      board.appendChild(pixel2);
    }
  }
}

tamanho(5);

palette.firstChild.className.add('selected');

// https://gomakethings.com/attaching-multiple-
// elements-to-a-single-event-listener-in-vanilla-js/
document.body.addEventListener('click', (event) => {
  if (event.target.className === 'cor') {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
});

document.body.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const selectedBG = document.queryselector('selected').style.backgroundColor;
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = selectedBG;
  }
});
