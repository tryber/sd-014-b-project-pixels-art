const select = () => {
  const reset = () => {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
  };
  const changeColor = document.querySelector('#color-palette');

  changeColor.addEventListener('click', (e) => {
    reset();
    e.target.classList.add('selected');
  });
};

const paint = () => {
  const painting = document.querySelector('#pixel-board');

  painting.addEventListener('click', (e) => {
    e.target.style.backgroundColor =
      document.querySelector('.selected').style.backgroundColor;
  });
};

const clear = () => {
  const totalDeleteLesgoTrybers = document.querySelector('#clear-board');

  totalDeleteLesgoTrybers.addEventListener('click', () => {
    const pxl = document.querySelectorAll('.pixel');
    for (let index = 0; index < pxl.length; index += 1) {
      pxl[index].style.backgroundColor = 'white';
    }
  });
};

select();
paint();
clear();
