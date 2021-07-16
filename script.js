let pixels = document.getElementsByClassName('pixel')
let inputPixel = document.getElementById('board-size');
let tabelPixel = document.getElementById('pixel-board');
let size = document.getElementById('board-size').value;


/* VERIFICA SE O NUMERO É MAIOR QUE 50 MENOR QUE 5 */

function verificar(){
  if (inputPixel.value < 5){
    inputPixel.value = 5
  }
  else if (inputPixel.value > 50){
    inputPixel.value = 50
  }
}


document.getElementById('generate-board').addEventListener('click', generatePixels)
inputPixel.addEventListener('change', verificar)

function generatePixels(){
  if (inputPixel.value == ""){
    alert("Board inválido!")
  }
    /* EXÇLUSÃO DA TABELA ANTERIOR */
  if (pixels.length > 0){
    for (let index = 0; index < pixels.length; index += 1){
      document.getElementsByClassName('pixel')[0].remove()
      document.getElementsByClassName('pixeline')[0].remove()
    }
  }
  /* GERAÇÃO DA NOVA TABELA */
    if (inputPixel.value >= 5 || inputPixel.value <= 50){
    for (let index = 0; index < inputPixel.value; index += 1){
      let line = document.createElement('tr');
      line.className = 'pixeline';
      tabelPixel.appendChild(line);
      
      for (let index = 0; index < inputPixel.value; index +=1){
      let header = document.createElement('td');
      header.className = 'pixel';
      header.addEventListener('click', paintColor);
      line.appendChild(header);
      }
    }
  }
}

document.getElementById('pixel-board').style.width = (pixels.length * 5)
function addSelected(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

document.querySelector('#black').addEventListener('click', addSelected);
document.querySelector('#cor1').addEventListener('click', addSelected);
document.querySelector('#cor2').addEventListener('click', addSelected);
document.querySelector('#cor3').addEventListener('click', addSelected);

function gerar_cor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  return `rgb(${r}, ${g}, ${b})`;
}

/* Referencia https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
 */
document.querySelector('#black').style.backgroundColor = 'black'
document.querySelector('#cor1').style.backgroundColor = gerar_cor()
document.querySelector('#cor2').style.backgroundColor = gerar_cor()
document.querySelector('#cor3').style.backgroundColor = gerar_cor()

function paintColor(event) {
  for (index = 0; index < pixels.length; index += 1) {
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#black')) {
      event.target.style.backgroundColor = 'black'
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#cor1')) {
      event.target.style.backgroundColor = document.querySelector('#cor1').style.backgroundColor;
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#cor2')) {
      event.target.style.backgroundColor = document.querySelector('#cor2').style.backgroundColor;
    }
    if (document.getElementsByClassName('selected')[0] === document.querySelector('#cor3')) {
      event.target.style.backgroundColor = document.querySelector('#cor3').style.backgroundColor;
      
    }
    
  }
}
for (index = 0; index < pixels.length; index += 1){
document.getElementsByClassName('pixel')[index].addEventListener('click', paintColor);
}

const resetBtn = document.querySelector('#clear-board');

function clear() {
  for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = 'white'
  }
}
resetBtn.addEventListener('click', clear);

