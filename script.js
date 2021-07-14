const initialColor = document.querySelector('#black');
initialColor.classList.add('selected');

const colorPalette = document.querySelectorAll('.color');

function setClass(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  console.log(event);
}

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', setClass);
}
