window.onload = function () {
  let colorsPallete = document.querySelectorAll('.color');

  for (let element of colorsPallete) {
    if (colorsPallete[0] === element) {
      element.style.backgroundColor = 'black';
      element.classList.add('selected');
    } else if (colorsPallete[1] === element) {
      element.style.backgroundColor = 'red';
    } else if (colorsPallete[2] === element) {
      element.style.backgroundColor = 'blue';
    } else if (colorsPallete[3] === element) {
      element.style.backgroundColor = 'green';
    }

    element.addEventListener('click', (event) => {
      for (let index = 0; index < colorsPallete.length; index += 1) {
        colorsPallete[index].classList.remove('selected');
        event.target.classList.add('selected');
      }
    });
  }

  let pixelBoard = document.querySelector('#pixel-board');

  for (let i = 1; i <= 25; i += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
};

const pixelBoard = document.querySelector('#pixel-board');

pixelBoard.addEventListener('click', (event) => {
  const alreadySelected =
    document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = alreadySelected;
});

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', () => {
  for (element of pixelBoard.children) {
    element.style.backgroundColor = 'white';
  }
});

let btn = document.querySelector('#clear-board');
btn.addEventListener('mousemove', (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});
