function generateRandomColor() {
  let randomColor = document.querySelectorAll('.color');
  for(let index = 0; index < randomColor.length; index += 1) {
    let random = () => [Math.floor(Math.random() * 255)];
    let color = `rgb(${random()}, ${random()}, ${random()})`;
    randomColor[index].style.background = color;
  }
}
generateRandomColor();