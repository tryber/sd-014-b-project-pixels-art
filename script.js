window.onload = function(){
// Requesito 4
function createPixels(){
    for(let index = 0; index < 5; index += 1){
      const section = document.querySelector('#pixel-board');
      const div = document.createElement('div');
      div.className = 'pixel-line';
      section.appendChild(div);
      for(let i = 0; i < 5; i += 1){
        const quadradinho = document.createElement('div');
        quadradinho.className = 'pixel';
        div.appendChild(quadradinho);
      }
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
  pixel.addEventListener('click', function(event){
    const evento = event.target;
    const selected = document.querySelector('.selected');
    const styleBackground = window.getComputedStyle(selected);
    const style = styleBackground.backgroundColor;
    evento.style.backgroundColor = style;
  })
};


// Requesito 9
const buttonClear = document.createElement('button');
buttonClear.id = 'clear-board';
buttonClear.innerText = 'Limpar';
buttonClear.type = 'submit';
const form = document.querySelector('form');
form.appendChild(buttonClear);
buttonClear.addEventListener('click', function(){
  const pixelAll = document.querySelectorAll('.pixel');
  for(let index = 0; index < pixelAll.length; index += 1){
    pixel = pixelAll[index];
    pixel.style.backgroundColor = 'white';
  }
});

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

// Requesito 11



//Requesito 12
// Documentação - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Documentação - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
function corRandom(){
  let colorB = Math.random() * 255;
  let colorC = Math.random() * 255;
  let colorD = Math.random() * 255;

  const dois = document.querySelector('.dois');
  dois.style.backgroundColor = `rgb(${colorB}, ${colorC}, ${colorD})`;
  const three = document.querySelector('.tres');
  three.style.backgroundColor = `rgb(${colorC}, ${colorD}, ${colorB})`;
  const four = document.querySelector('.quatro');
  four.style.backgroundColor = `rgb(${colorD}, ${colorC}, ${colorB})`;
}
corRandom();

}

