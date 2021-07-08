//refs: Ajudas do meu colega, Glauco.

//essa função seleciona cores, remove e muda as cores da classe selected
const select = () => {
  const reset = () => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
  };
  const change = document.querySelector('#color-palette');
  change.addEventListener('click', (e) => {
    reset();
    e.target.classList.add('selected');
  });
};

//essa função adiciona uma background color ao "target" do click
const paint = () => {
  const painting = document.querySelector('#pixel-board');

  painting.addEventListener('click', (e) => {
    e.target.style.backgroundColor =
      document.querySelector('.selected').style.backgroundColor;
  });
};

//essa função limpa tudo
const clear = () => {
  const del = document.querySelector('#clear-board');
  del.addEventListener('click', () => {
    const pxl = document.querySelectorAll('.pixel');
    for (let i = 0; i < pxl.length; i++) {
      pxl[i].style.backgroundColor = 'white';
    }
  });
};

select();
paint();
clear();
