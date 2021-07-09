const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const select = () => {
  query('#color-palette').addEventListener('click', (e) => {
    query('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });
};
const fill = () =>
  query('#pixel-board').addEventListener(
    'click',
    (e) =>
      (e.target.style.backgroundColor =
        query('.selected').style.backgroundColor)
  );
const clear = () =>
  query('#clear-board').addEventListener('click', () => {
    const p = queryAll('.pixel');
    for (let pxl of p) pxl.style.backgroundColor = 'white';
  });
select(), fill(), clear();
/*Referencias do trabalho
Tabelas Display Flex: https://www.maujor.com/tutorial/anti-heroi-css-display-table.php
ainda referente a tabelas: https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Javascript Arrow Functions: https://www.w3schools.com/js/js_arrow_function.asp/
operações com classlist https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
change backgrounds with js https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
*/
