const color = ['black'];
const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');

function rgbR() {
  const rgb = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  return rgb;
}

for (let i = 0; i < 3; i += 1) {
  color.push(rgbR());
}

for (let i = 0; i < color.length; i += 1) {
  const blu = document.createElement('div');
  blu.classList = 'color';
  blu.style.backgroundColor = color[i];
  palette.appendChild(blu);
}

// https://www.w3schools.com/html/html_tables.asp
function size(cell) {
  for (let i = 0; i < cell; i += 1) {
    const pixel = document.createElement('tr');
    pixel.classList = 'pboard';
    board.appendChild(pixel);
    for (let index = 0; index < cell; index += 1) {
      const pixel2 = document.createElement('td');
      pixel2.classList = ('pboard pixel');
      board.appendChild(pixel2);
    }
  }
}

size(5);

palette.firstChild.classList.add('selected');

//  https://gomakethings.com/attaching-multiple
//  -elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('click', (colorE) => {
  if (colorE.target.classList.contains('color')) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    colorE.target.classList.add('selected');
  }
});

document.body.addEventListener('click', (click) => {
  if (click.target.classList.contains('pixel')) {
    const selectedBG = document.querySelector('.selected').style.backgroundColor;
    // eslint-disable-next-line no-param-reassign
    click.target.style.backgroundColor = selectedBG;
  }
});

const buttonClear = document.querySelector('#clear-board');

buttonClear.addEventListener('click', () => {
  const cpixel = document.getElementsByClassName('pboard');
  for (let i = 0; i < cpixel.length; i += 1) {
    cpixel[i].style.backgroundColor = 'white';
  }
});

// https://www.w3schools.com/jsref/prop_text_value.asp
// https://stackoverflow.com/questions/11563638/how
// -do-i-get-the-value-of-text-input-field-using-javascript

const textValue = document.getElementById('board-size');
const buttomResize = document.querySelector('#generate-board');

buttomResize.addEventListener('click', () => {
  const textValueR = textValue.value;
  const pixelC = document.querySelectorAll('.pboard');
  for (let i = 0; i < pixelC.length; i += 1) {
    board.removeChild(pixelC[i]);
  }
  if (textValueR < 5) {
    size(5);
  } else if (textValueR >= 50) {
    size(50);
  } else if (textValue === null) {
    alert('Board inválido!');
    size(5);
  } else {
    size(textValueR);
  }
});
