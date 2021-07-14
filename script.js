
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


/* VERIFICA SE O NUMERO É MAIOR QUE 50 MENOR QUE 5 */

inputPixel.addEventListener('change', verificar)

function verificar(){

    if (inputPixel.value < 5){
      inputPixel.value = 5
      alert('Board inválido!')
    }
    else if (inputPixel.value > 50){
      inputPixel.value = 50
      alert('Board inválido!')
    }
  }



document.getElementById('generate-board').addEventListener('click', generatePixels)


function generatePixels(){

    /* EXÇLUSÃO DA TABELA ANTERIOR */

  if (pixels.length > 0){
    for (let index = 0; index < pixels.length; index += 1){
      document.getElementsByClassName('pixel')[0].remove() 
      document.getElementsByClassName('pixelLine')[0].remove() 
    }
  }

  /* VERIFICAÇÃO SE É MAIOR QUE 5 OU MENOR QUE 50 */



  /* GERAÇÃO DA NOVA TABELA */
  if (inputPixel.value >= 5 || inputPixel <= 50){
    for (let index = 0; index < inputPixel.value; index += 1){
      let line = document.createElement('tr');
      line.classList.add('pixelLine');
    line.addEventListener('click', paintColor)
    tabelPixel.appendChild(line);
    
      for (let index = 0; index < inputPixel.value; index +=1){
      let header = document.createElement('td');
      header.classList.add('pixel')
      header.addEventListener('click', paintColor);
      line.appendChild(header);
 
      }
    }
  }
  else if (inputPixel.value < 5) {
    for (let index = 0; index < 5; index += 1){
      let line = document.createElement('tr');
      line.classList.add('pixelLine');
    line.addEventListener('click', paintColor)
    tabelPixel.appendChild(line);
    
      for (let index = 0; index < 5; index +=1){
      let header = document.createElement('td');
      header.classList.add('pixel')
      header.addEventListener('click', paintColor);
      line.appendChild(header);
 
      }
    }
  }
  else if (inputPixel.value > 50) {
    for (let index = 0; index < 50; index += 1){
      let line = document.createElement('tr');
      line.classList.add('pixelLine');
    line.addEventListener('click', paintColor)
    tabelPixel.appendChild(line);
    
      for (let index = 0; index < 50; index +=1){
      let header = document.createElement('td');
      header.classList.add('pixel')
      header.addEventListener('click', paintColor);
      line.appendChild(header);
 
      }
    }
  }
}
generatePixels()
document.getElementById('pixel-board').style.width = (pixels.length * 5)
function addSelected(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
/* 
4) Verifica se ao carregar a página deve ser possível pintar os pixels de preto
5) Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor
6) Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels. */

document.querySelector('#black').addEventListener('click', addSelected);
document.querySelector('#red').addEventListener('click', addSelected);
document.querySelector('#blue').addEventListener('click', addSelected);
document.querySelector('#yellow').addEventListener('click', addSelected);

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
    }
  }

const resetBtn = document.querySelector('#clear-board');

function clear() {
  for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = 'white'
  }
}
resetBtn.addEventListener('click', clear);

