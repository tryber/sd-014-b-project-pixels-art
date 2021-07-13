
/* function createPixels() {
  for (let index = 0; index <= 24; index += 1) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    pixels.classList.add(index);
    document.querySelector('#pixel-board').appendChild(pixels);
    if (index == 4) {
      const quebra = document.createElement('div');
      document.querySelector('#pixel-board').appendChild(quebra);
    }
    if (index == 9) {
      const quebra = document.createElement('div');
      document.querySelector('#pixel-board').appendChild(quebra);
    }
    if (index == 14) {
      const quebra = document.createElement('div');
      document.querySelector('#pixel-board').appendChild(quebra);
    }
    if (index == 19) {
      const quebra = document.createElement('div');
      document.querySelector('#pixel-board').appendChild(quebra);
    }
  }
}
createPixels(); */

let pixels = document.getElementsByClassName('pixel')
let inputPixel = document.getElementById('board-size');
let tamanho = inputPixel.value;
let tabelPixel = document.getElementById('pixel-board');


/* 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária. */
document.getElementById('generate-board').addEventListener('click', generatePixels)

function generatePixels(){
  if (pixels.length > 0){
    for (let index = 0; index < pixels.length; index += 1){
      document.getElementsByClassName('pixel')[0].remove() 
    }
  }
  
  for (let index = 0; index < inputPixel.value; index += 1){
    let line = document.createElement('tr');
    line.classList.add('pixel')
    tabelPixel.appendChild(line);
    
      for (let index = 0; index < inputPixel.value; index +=1){
      let header = document.createElement('td');
      header.classList.add('pixel')
      header.addEventListener('click', paintColor)
      line.appendChild(header);
  }
  }
}

 
generatePixels()
document.getElementById('pixel-board').style.width = (pixels.length * 5)
function addSelected(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

document.querySelector('#black').addEventListener('click', addSelected);
document.querySelector('#red').addEventListener('click', addSelected);
document.querySelector('#blue').addEventListener('click', addSelected);
document.querySelector('#yellow').addEventListener('click', addSelected);
document.querySelector('#white').addEventListener('click', addSelected);

function paintColor(event) {
  for (index = 0; index < pixels.length; index += 1) {
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#black')) {
      event.target.style.backgroundColor = 'black';
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#red')) {
      event.target.style.backgroundColor = 'red';
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#blue')) {
      event.target.style.backgroundColor = 'blue';
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#yellow')) {
      event.target.style.backgroundColor = 'yellow';
      
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#white')) {
      event.target.style.backgroundColor = 'white';
      
    }
  }
}

const resetBtn = document.querySelector('#clear-board');

function clear() {
  for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = 'white'
  }
}
resetBtn.addEventListener('click', clear);

