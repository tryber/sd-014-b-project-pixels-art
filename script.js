// Adiciona as cores da paleta de cores;
const colors = ['background: rgb(0, 0, 0)'];

for (let index = 0; index < 3; index += 1) {
  let color = '';
  for (let count = 0; count < 3; count += 1) {
    let generationNumber = Math.floor(Math.random()* 256);
    if (count === 0) {
      color += 'background: rgb('+generationNumber.toString();
    } else if (count === 2) {
      color += ',' + generationNumber.toString()+')';
    }else {
      color += ',' + generationNumber.toString();
    }
  }
  colors.push(color);
}

const trChindren = document.querySelector('tr').children;

for (let index = 0; index < trChindren.length; index += 1) {
  trChindren[index].setAttribute('style', colors[index]);
}

const color = document.querySelector('.color');
color.classList.add('selected');

const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    const colorSelect = document.querySelector('.selected').style.background;
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

const button = document.createElement('button');
button.innerText = 'Limpar';
button.setAttribute('id', 'clear-board');
const selectDiv = document.querySelector('#button');
selectDiv.appendChild(button);

const selectButton = document.querySelector('#clear-board');

selectButton.addEventListener('click', function (event) {
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.removeAttribute('style');
  }
});

// Cria input;
const inputCreate = document.createElement('input');
inputCreate.setAttribute('type', 'number');
inputCreate.setAttribute('max', '50');
inputCreate.setAttribute('min', '1');
// inputCreate.setAttribute('value', 'min');
inputCreate.setAttribute('id', 'board-size');
const selectDivInput = document.querySelector('#input');
selectDivInput.appendChild(inputCreate);

// Cria butão do input;
const createButton = document.createElement('button');
createButton.setAttribute('id', 'generate-board');
createButton.innerText = 'VQV';
selectDivInput.appendChild(createButton);

let buttonPixel = document.querySelector('#generate-board');
let inputPixel = document.querySelector('#board-size');
buttonPixel.addEventListener('click', function (event) {
  if (inputPixel.value.length === 0) {
    alert('Board inválido!');
  } else {
    const width = inputPixel.value + 'px';
    const height = inputPixel.value + 'px';
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.width = width;
      pixels[index].style.height = height;
      pixels[index].style.backgroundColor = 'white';
    }
  }
});
