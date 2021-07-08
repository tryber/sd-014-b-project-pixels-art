// Adiciona as cores da paleta de cores;
const colors = ['background: rgb(0, 0, 0)',
  'background: rgb(252, 163, 17)',
  'background: rgb(229, 229, 229)',
  'background: rgb(125, 231, 85)',
];

const trChindren = document.querySelector('tr').children;

for (let index = 0; index < trChindren.length; index += 1) {
  trChindren[index].setAttribute('style', colors[index]);
}

const color = document.querySelector('.color');
color.classList.add('selected');

const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index++) {
  pixels[index].addEventListener('click', function (event) {
    let colorSelect = document.querySelector('.selected').style.background;
    event.target.setAttribute('style', 'background:' + colorSelect);
  });
}

function selectedChange(event) {
  const colorsSelected = document.querySelector('.selected');
  colorsSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const divColors = document.querySelectorAll('.color');

for (let index = 0; index < divColors.length; index += 1) {
  const div = divColors[index];
  div.addEventListener('click', selectedChange);
}
