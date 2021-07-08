window.onload = function () {
  const colorsPallete = document.querySelectorAll('.color');

  for (const element of colorsPallete) {
    if (colorsPallete[0] === element) {
      element.style.backgroundColor = 'black';
      element.classList.add('selected');
    } else if (colorsPallete[1] === element) {
      element.style.backgroundColor = 'aliceblue';
    } else if (colorsPallete[2] === element) {
      element.style.backgroundColor = 'pink';
    } else if (colorsPallete[3] === element) {
      element.style.backgroundColor = 'purple';
    }

    element.addEventListener('click', (event) => {
      for (let i = 0; i < colorsPallete.length; i += 1) {
        colorsPallete[i].classList.remove('selected');
        event.target.classList.add('selected');
      }
    });
  }

  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 1; i <= 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
};

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', (e) => {
  const alreadySelected = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = alreadySelected;
});

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', () => {
  for (const index of pixelBoard.children) {
    index.style.backgroundColor = 'white';
  }
});

const btn = document.querySelector('#clear-board');
const px = 'px';
btn.addEventListener('mousemove', (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + px);
  btn.style.setProperty('--y', y + px);
});
