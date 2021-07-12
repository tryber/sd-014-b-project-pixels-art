const initialColors = document.getElementsByClassName('color');
initialColors[0].style.backgroundColor = 'black';
initialColors[1].style.backgroundColor = 'yellow';
initialColors[2].style.backgroundColor = 'red';
initialColors[3].style.backgroundColor = 'green';
// Requisito 7
function removeColor(event) {
  const remColor = document.querySelector('.selected');
  remColor.classList.remove('selected');
  event.target.classList.add('selected');
}

//trocar de classse Requisito 8
function selectedColor() {
  const deletedColor = document.querySelectorAll('.color');
  for (let index = 0; index < deletedColor.length; index += 1) {
    deletedColor[index].addEventListener('click', removeColor);
   
console.log(click);  
  }
}


// Requisito 9
// limpar background / class pixel
const bgwall = document.querySelectorAll('.pixel');
function clearColors() {
 
  for (let index = 0; index < bgwall.length; index += 1) {
    bgwall[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
