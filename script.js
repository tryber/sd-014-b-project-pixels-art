// Recupera as cores backgroundcolor da Color-Palette
const initialColors = document.getElementsByClassName('color');
initialColors[0].style.backgroundColor = 'black';
initialColors[1].style.backgroundColor = 'yellow';
initialColors[2].style.backgroundColor = 'red';
initialColors[3].style.backgroundColor = 'green';
// criar funcao com itens
// Requisito 7
function addClass(event) {
  for (let index = 0; index < initialColors.length; index += 1) {
    //  console.log(initialColors[index].classList.contain('selected'));
    // console.log(initialColors[index]);
    initialColors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
// add event listen para remover a classe .selected
initialColors[0].addEventListener('click', addClass);
initialColors[1].addEventListener('click', addClass);
initialColors[2].addEventListener('click', addClass);
initialColors[3].addEventListener('click', addClass);
/* Direciona o pixel a ser pintado
const colorSelected = document.querySelector('.selected');
function paintColor(color) {
  color.target.style.backgroundColor = colorSelected;
  console.log('cor selecionada');
  console.log(colorSelected);
}
*/
// funcao que pega todos os estilos de um elemento que vc definir ( window.getComputedStyle) e depois vc pega uma propriedade definida (getPropertyValue)  no caso seria o background-color
function paintColor(ocorrency) {
  const selection = document.querySelector('.selected');
  const selectionColor = window.getComputedStyle(selection).getPropertyValue('background-color');
  ocorrency.target.style.backgroundColor = selectionColor;
}

// adicionando o evento click no pixel board evita ter que fazer um for
document.querySelector('#pixel-board').addEventListener('click', paintColor);
// 8 Seleciona o quadrado de pixel que vai ser clicado
/*
const blocksToPaint = document.getElementsByClassName('pixel');
for (let index = 0; index < blocksToPaint.length; index += 1) {
 blocksToPaint[index].addEventListener('click', paintColor);
}
*/
// Requisito 9  limpar background / class pixel
const bgwall = document.querySelectorAll('.pixel');
function clearColors() {
  for (let index = 0; index < bgwall.length; index += 1) {
    bgwall[index].style.backgroundColor = 'white';
  }
  console.log('Clear Board');
}
clearColors();
// Requisito 10
