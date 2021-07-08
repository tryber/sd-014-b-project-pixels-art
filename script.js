let selected;
const colorPalette = document.querySelector('#color-palette');

// Cria as paletas e atribui cores aleatórias pra elas
const randomC = () => Math.floor(Math.random() * 255);
const createColor = () => {
  for (let i = 1; i < 5; i += 1) {
    const cores = document.createElement('div');
    colorPalette.appendChild(cores);
    cores.style.backgroundColor = `rgb(${randomC()}, ${randomC()}, ${randomC()})`;
    cores.style.margin = '0 10px';
    cores.style.width = '100px';
    cores.style.height = '100px';
    cores.classList.add('color');
    cores.addEventListener('click', createSelected);
  }
};

const createSelected = (event) => {
  selected.classList.remove('selected');
  selected = event.target;
  selected.classList.add('selected');
};

createColor();

window.onload = () => {
  const startBlack = document.querySelector('#color-palette div:nth-child(1)');
  selected = startBlack;
  selected.classList.add('selected');
  selected.style.backgroundColor = 'black';
};
