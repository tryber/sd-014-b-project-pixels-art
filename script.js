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

h1Creation()
paletteCreation()
colors('black')
colors('yellow')
colors('red')
colors('green')