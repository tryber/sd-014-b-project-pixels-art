const cor = ['black'];

const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

function rgbR() {
  const rgb = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  return rgb;
}

for (let i = 0; i < 3; i += 1) {
  cor.push(rgbR());
}

for (let i = 0; i < cor.length; i += 1) {
  const blu = document.createElement('div');
  blu.classList = 'color';
  blu.style.backgroundColor = cor[i];
  palette.appendChild(blu);
}

function tamanho(cell) {
  for (let i = 0; i < cell; i += 1) {
    const pixel = document.createElement('tr');
    pixel.classList = 'pboard';
    board.appendChild(pixel);
    for (let index = 0; index < cell; index += 1) {
      const pixel2 = document.createElement('td');
      pixel2.classList = ('pboard b');
      board.appendChild(pixel2);
    }
  }
}

tamanho(5);
