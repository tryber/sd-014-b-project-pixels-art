function h1Creation () {
  let bodySelection = document.querySelector('body')
  let titleCreation = document.createElement('h1')
  titleCreation.innerText = 'Paleta de Cores'
  titleCreation.id = 'title'
  bodySelection.appendChild(titleCreation)
}

h1Creation()