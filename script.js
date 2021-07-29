window.onload = function(){

// Requesito 4
  function createPixels(number = 5 * 5){
    for(let index = 0; index < number; index += 1){
     const pixelBoard = document.querySelector('#pixel-board');
     const quadrado = document.createElement('div');
     quadrado.classList = 'pixel';
     pixelBoard.appendChild(quadrado);
     quadrado.style.backgroundColor = 'white';
   }
 }
 createPixels();

// Requesito 7
const one = document.querySelector('.um')
const two = document.querySelector('.dois');
const three = document.querySelector('.tres');
const four = document.querySelector('.quatro');

one.addEventListener('click', selectedColor);
two.addEventListener('click', selectedColor);
three.addEventListener('click', selectedColor);
four.addEventListener('click', selectedColor);

function selectedColor(event){
  const selectedClass = document.querySelector('.selected');
  if(selectedClass.classList.contains('selected')){
    selectedClass.classList.remove('selected');
  }
  event.target.classList.add('selected');
};



// Requesito 8
// Documentação - https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
const pixelColor = document.querySelectorAll('.pixel');
for(let pixel of pixelColor){
  //console.log(pixelColor);
  pixel.addEventListener('click', function(event){
    const evento = event.target;
    const selected = document.querySelector('.selected');
    const styleBackground = window.getComputedStyle(selected);
    const style = styleBackground.backgroundColor;
    evento.style.backgroundColor = style;
  })
};


// Requesito 9
const button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
const div = document.querySelector('.button-limpar');
div.appendChild(button);

button.addEventListener('click', function(event){
  const button = document.querySelector('clear-board');
  const selected = document.querySelector('.selected');

})

// Requesito 10
const input = document.createElement('input');
const buttonInput = document.createElement('button');
const divInput = document.querySelector('.input-button');
input.minLength = '5';
input.maxLength = '50';
input.id = 'board-size';
input.placeholder = 'Defina';
buttonInput.id = 'generate-board';
buttonInput.innerText = 'VQV';
divInput.appendChild(input);
divInput.appendChild(buttonInput);

buttonInput.addEventListener('click', function(){

});

};


