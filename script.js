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

window.onload = function () {
  const color = document.querySelector('.color');
  color.classList.add('selected');

  function selectedChange(event) {
    const colorsSelected = document.querySelector('.selected');
    colorsSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }

  const divColors = document.querySelectorAll('.color');

  for (let index = 0; index < divColors.length; index += 1) {
    divColors[index].addEventListener('click', selectedChange);
  }
};
