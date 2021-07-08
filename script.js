/*outras refs *
Tabelas Display Flex: https://www.maujor.com/tutorial/anti-heroi-css-display-table.php
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Javascript Arrow Functions: https://www.w3schools.com/js/js_arrow_function.asp/
*/
//refs: Ajudas do meu colega, Glauco.
//seleciona a palheta, aidicona um evento, seleciona a classe selected, no clique, remove do antigo e adiciona no novo.
const select = () => {
  document
    .querySelector('#color-palette')
    .addEventListener('click', async (e) => {
      document.querySelector('.selected').classList.remove('selected');
      e.target.classList.add('selected');
    });
};
//com a função paint pegamos a cor selecionada na select e aplicamos no item do pixel-board.
const paint = () => {
  document.querySelector('#pixel-board').addEventListener('click', (e) => {
    e.target.style.backgroundColor =
      document.querySelector('.selected').style.backgroundColor;
  });
};
//essa função limpa tudo - ref: https://www.codegrepper.com/code-examples/javascript/javascript+change+color+for+class+name
const clear = () => {
  document.querySelector('#clear-board').addEventListener('click', () => {
    const pxl = document.querySelectorAll('.pixel');
    for (let i = 0; i < 25; i += 1) {
      pxl[i].style.backgroundColor = 'white';
    }
  });
};

select();
paint();
clear();
