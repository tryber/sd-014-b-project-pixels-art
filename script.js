/*outras refs *
Tabelas Display Flex: https://www.maujor.com/tutorial/anti-heroi-css-display-table.php
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Javascript Arrow Functions: https://www.w3schools.com/js/js_arrow_function.asp/
*/
//refs: Ajudas do meu colega, Glauco.

//essa função seleciona cores, remove e muda as cores da classe selected

const select = () => {
  const change = document.querySelector('#color-palette');

  change.addEventListener('click', (e) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
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

//essa função limpa tudo https://www.codegrepper.com/code-examples/javascript/javascript+change+color+for+class+name
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
