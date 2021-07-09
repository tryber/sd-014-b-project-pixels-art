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
  divCreation.classList.add(colorDesired)
  divSelection.appendChild(divCreation)
}

function setPixelColor(evnt) {
  evnt.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
function abc () {
  document.querySelector('#pixel-board').classList.add('bioca')
}

function tableContainer () {
  let bodySelection = document.querySelector('body');
  let divCreation = document.createElement('div')
  divCreation.id = 'pixel-board'
  bodySelection.appendChild(divCreation)
}
function pixelDivs () {
  let pixelBoardSelection = document.querySelector('#pixel-board');
  let divCreation = document.createElement('div')
  divCreation.classList.add('tr')
  pixelBoardSelection.appendChild(divCreation)
}
function pixelsX (index) {
  let divCreation = document.createElement('div')
  divCreation.classList.add('pixel')
  let pixelBoardSelection = document.querySelectorAll('.tr')
  pixelBoardSelection[index].appendChild(divCreation)
}
function pixelTable () {
  tableContainer()
pixelDivs()
pixelDivs()
pixelDivs()
pixelDivs()
pixelDivs()
pixelsX(0)
pixelsX(0)
pixelsX(0)
pixelsX(0)
pixelsX(0)
pixelsX(1)
pixelsX(1)
pixelsX(1)
pixelsX(1)
pixelsX(1)
pixelsX(2)
pixelsX(2)
pixelsX(2)
pixelsX(2)
pixelsX(2)
pixelsX(3)
pixelsX(3)
pixelsX(3)
pixelsX(3)
pixelsX(3)
pixelsX(4)
pixelsX(4)
pixelsX(4)
pixelsX(4)
pixelsX(4)
}

function swapClass(evnt) {
  let classSelection = document.querySelector('.selected');// procuro a class 
  classSelection.classList.remove('selected');//removo a class 
  evnt.target.classList.add('selected');//adiciono a class ao elemento que eu cliquei
}

function clearButton () {
  let bodySelection = document.querySelector('body')
  let divCreation = document.createElement('button')
  divCreation.innerText = 'Limpar'
  divCreation.id = 'clear-board'
  bodySelection.appendChild(divCreation)
}

h1Creation()
paletteCreation()
colors('black')
colors('yellow')
colors('red')
colors('green')
clearButton()
pixelTable()
function setPixelColor (event){
  let selection = document.querySelector('.selected')
  let selectionColor = window.getComputedStyle(selection).getPropertyValue("background-color")
  event.target.style.backgroundColor = selectionColor
}
document.querySelector('#color-palette').addEventListener('click', swapClass)
document.querySelector('#pixel-board').addEventListener('click', setPixelColor)
document.querySelector('#clear-board').addEventListener('click', function(){
  let pixelSelection = document.querySelectorAll(".pixel")
  for(let index = 0; index < pixelSelection.length; index +=1){
  pixelSelection[index].style.backgroundColor = 'white'
  }
})
