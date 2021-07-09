const q = document.querySelector.bind(document);
const qll = document.querySelectorAll.bind(document);
const select = () => {
  q('#color-palette').addEventListener('click', async (e) => {
    await q('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });
};
const fill = () => q('#pixel-board').addEventListener('click', async (e) =>
  await (e.target.style.backgroundColor = q('.selected').style.backgroundColor));
const clear = () => q('#clear-board').addEventListener('click', () => {
  for (let p of qll('.pixel')) p.style.backgroundColor = 'white';
});
select(), fill(), clear();
/*Referencias do trabalho
Tabelas Display Flex: https://www.maujor.com/tutorial/anti-heroi-css-display-table.php
ainda referente a tabelas: https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Javascript Arrow Functions: https://www.w3schools.com/js/js_arrow_function.asp/
operações com classlist https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
change backgrounds with js https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript


select: essa função é acionada com o click, quando clica-se remove selected do black e adiciona a classe selected a cor do clique.

fill: essa função é acionada no click, ela preenche um target contido no pixelboard, aplicando o backgroundColor da cor selecionada.

clear: essa função é acionada no click, ela pega tods os pixels, percorre eles aplicando a cor white.
*/
