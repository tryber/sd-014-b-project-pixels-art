function generateRandomColor() {
  let randomColor = document.querySelectorAll('.color');
  randomColor[0].style.background = 'black';
  for (let index = 1; index < randomColor.length; index += 1) {
    let random = () => [Math.floor(Math.random() * 255)];
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    randomColor[index].style.background = color;
  }
}
generateRandomColor();

const board = document.querySelector('#color-palette');
board.addEventListener('click', function(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
})