function selectColor() {
  const changeColor = document.querySelector('#color-palette');

  changeColor.addEventListener('click', (e) => {
    clearSelected();
    e.target.classList.add('selected');
  });
}

const paint = () => {
  const painting = document.getElementById('pixel-board');

  painting.addEventListener('click', (event) => {
    event.target.style.backgroundColor =
      document.querySelector('.selected').style.backgroundColor;
  });
};

const clear = () => {
  const clearAll = document.getElementById('clear-board');
  clearAll.addEventListener('click', () => {
    const selectpxl = document.getElementsByClassName('pixel');
    for (let index = 0; index < selectpxl.length; index += 1) {
      selectpxl[index].style.backgroundColor = 'white';
    }
  });
};

paint();
clear();
