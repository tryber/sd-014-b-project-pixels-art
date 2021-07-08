function h1Creation () {
  let bodySelection = document.querySelector('body');
  let titleCreation = document.createElement('h1');
  titleCreation.innerText = 'Paleta de Cores';
  titleCreation.id = 'title';
  bodySelection.appendChild(titleCreation);
}
function paletteCreation () {
  let bodySelection = document.querySelector('body');
  let divCreation = document.createElement('div')
  divCreation.id = 'color-palette'
  bodySelection.appendChild(divCreation)
}
function colors (colorDesired) {
  let divSelection = document.querySelector('#color-palette')
  let divCreation = document.createElement('div')
  divCreation.classList.add('color')
  if (colorDesired === 'black') {
    divCreation.classList.add('selected')
  }
  divCreation.id = colorDesired
  divSelection.appendChild(divCreation)
}
function swapClass(evnt) {
  let classSelection = document.querySelector('.selected');// procuro a class tech
  classSelection.classList.remove('selected');//removo a class tech
  evnt.target.classList.add('selected');//adiciono a class tech ao elemento que eu cliquei
}

h1Creation()
paletteCreation()
colors('black')
colors('yellow')
colors('red')
colors('green')
document.querySelector('#color-palette').addEventListener('click', swapClass)