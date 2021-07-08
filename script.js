function createColor(rgbString) {
  const createElement = document.createElement('div');
  const colorPalette = document.querySelector('#color-palette');
  const color = colorPalette.appendChild(createElement);
  color.style.backgroundColor = rgbString;
  color.style.border = '1px solid black';
  color.setAttribute('class', 'color');
}

createColor('rgb(0, 0, 0)');

createColor('rgb(250, 0, 0)');

createColor('rgb(10, 50, 149)');

createColor('rgb(0, 250, 075)');
