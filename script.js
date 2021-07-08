window.onload = function () {
  let colorsPallete = document.querySelectorAll('.color');

  for (let element of colorsPallete) {
    if (colorsPallete[0] === element) {
      element.style.backgroundColor = 'black';
      element.classList.add('selected');
    } else if (colorsPallete[1] === element) {
      element.style.backgroundColor = 'grey';
    } else if (colorsPallete[2] === element) {
      element.style.backgroundColor = 'orange';
    } else if (colorsPallete[3] === element) {
      element.style.backgroundColor = 'pink';
    }
    element.addEventListener('click', function (event) {
      for (let i = 0; i < colorsPallete.length; i += 1) {
        colorsPallete[i].classList.remove('selected');
        event.target.classList.add('selected');
        for (let i = 1; i <= 25; i += 1) {
          pixel.classList.add('pixel');
        }
      }
    });
  }
};

let pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', function (event) {
  let alreadySelected =
    document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = alreadySelected;
});

const clear = () => {
  const totalDeleteLesgoTrybers = document.querySelector('#clear-board');
  totalDeleteLesgoTrybers.addEventListener('click', () => {
    const pxl = document.querySelectorAll('.pixel');
    for (let index = 0; index < pxl.length; index += 1) {
      pxl[index].style.backgroundColor = 'white';
    }
  });
};

clear();
