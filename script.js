window.onload = function() {  

  let numberOfColors = 4;
  let colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < numberOfColors; index += 1) {
    let newColor = document.createElement('li');
    newColor.className = 'color';
    colorPalette.appendChild(newColor);
    if (index === 0) {
      newColor.style.backgroundColor = 'black';
    } else {
      newColor.style.backgroundColor = generateRandomColor();
    }
  }

  function generateRandomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
  }
}