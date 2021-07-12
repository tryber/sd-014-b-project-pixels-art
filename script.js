const black = document.getElementById('black');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
let defColor = document.querySelector('.selected');
const pixelBoard = document.querySelector('#pixel-board');
const btn = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');
function changeColor(event){
  const selColor = event.target;
  if (selColor !== defColor) {
    defColor.classList.remove('selected');
    selColor.classList.add('selected');
  }
  defColor = selColor;
}
black.addEventListener('click', changeColor);
orange.addEventListener('click', changeColor);
yellow.addEventListener('click', changeColor);
red.addEventListener('click', changeColor);
function paint(event){
  const click = event.target;
  click.style.backgroundColor = defColor.id;
}
pixelBoard.addEventListener('click', paint);
function clear(){
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].removeAttribute('style');
  }
}
btn.addEventListener('click', clear());