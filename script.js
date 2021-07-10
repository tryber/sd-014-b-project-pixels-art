let initialColors = document.getElementsByClassName('color');
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

function selectedColor() {
  const deletedColor = document.querySelectorAll('.color');
  for (let index = 0; index < deletedColor.length; index += 1) {
    deletedColor[index].addEventListener('click', removeColor)
    console.log(deletedColor[index].addEventListener('click', removeColor));
  }
}
