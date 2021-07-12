const initialColors = document.getElementsByClassName('color');
initialColors[0].style.backgroundColor = 'black';
initialColors[1].style.backgroundColor = 'yellow';
initialColors[2].style.backgroundColor = 'red';
initialColors[3].style.backgroundColor = 'green';


// Requisito 7
function mouseEmCima(evento) {
  console.log('Mouse passou por cima');
evento.target
console.log(evento.target);
}
// Funcao para remover a classe "Selected"
function removeClass(evento) {
  evento.target.classList.add('.selected');
  evento.target.classList.remove('.selected');
  console.log(evento.target);
  console.log(evento.type);
}
const remColor = document.querySelector('.selected');
remColor.addEventListener('click', removeClass);
remColor.addEventListener('mouseover', mouseEmCima);


// trocar de classse  e adicionar em outra cor a calsse "Selected" Requisito 8
const deletedColor = document.querySelectorAll('.color');
function selectedColor(event) {
  for (let index = 0; index < deletedColor.length; index += 1) {
    deletedColor[index].addEventListener('click', removeClass);
  }
}
// Direciona o pixel a ser pintado
const blocksToPaint = document.getElementsByClassName('pixel');
function paintColor(obj) {
  obj.target.style.backgroundColor = 'yellow';
}
// Seleciona o clique para pintar
for (let index = 0; index < blocksToPaint.length; index += 1) {
  blocksToPaint[index].addEventListener('click', paintColor);
}

// Requisito 9

// limpar background / class pixel
const bgwall = document.querySelectorAll('.pixel');
function clearColors() { 
  for (let index = 0; index < bgwall.length; index += 1) {
    bgwall[index].style.backgroundColor = 'white';
    console.log(bgwall);
  }
}
// Requisito 10
