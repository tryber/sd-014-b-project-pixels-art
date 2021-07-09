//helpers pra reduzir o tamanho da sintaxe.
const query = document.querySelector.bind(document);
const queries = document.querySelectorAll.bind(document);
/*outras refs *
Tabelas Display Flex: https://www.maujor.com/tutorial/anti-heroi-css-display-table.php
ainda referente a tabelas: https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Javascript Arrow Functions: https://www.w3schools.com/js/js_arrow_function.asp/
*/
//refs: script do aluno Glauco.

//seleciona a palheta, aidicona um evento, seleciona a classe selected, no clique, remove do antigo e adiciona no novo.
const select = () => {
  query('#color-palette').addEventListener('click', (e) => {
    query('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });
};
//com a função fill pegamos a cor selecionada na select e preenchemos um pixel presente no pixel board.
const fill = () => {
  query('#pixel-board').addEventListener('click', (e) => {
    e.target.style.backgroundColor = query('.selected').style.backgroundColor;
  });
};
//essa função limpa tudo - ref: https://www.codegrepper.com/code-examples/javascript/javascript+change+color+for+class+name
const clear = () => {
  query('#clear-board').addEventListener('click', () => {
    const pxl = queries('.pixel');
    for (let i = 0; i < pxl.length; i += 1) {
      pxl[i].style.backgroundColor = 'white';
    }
  });
};

select();
fill();
clear();
