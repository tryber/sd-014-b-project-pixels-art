const q = document.querySelector.bind(document);
const qll = document.querySelectorAll.bind(document);
const select = () => q('#color-palette').addEventListener('click', (e) => {
  q('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});
const fill = () => q('#pixel-board').addEventListener('click', (e) =>
  e.target.style.backgroundColor = q('.selected').style.backgroundColor);
const clear = () => q('#clear-board').addEventListener('click', () => {
  for (const p of qll('.pixel')) p.style.backgroundColor = 'white';
});
select(), fill(), clear();

/*Referencias do trabalho, fontes de estudo etc:

Tabelas Display Flex: https://www.maujor.com/tutorial/anti-heroi-css-display-table.php
ainda referente a tabelas: https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Javascript Arrow Functions: https://www.w3schools.com/js/js_arrow_function.asp/
operações com classlist https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
change backgrounds with js https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
assync fuctions https://developers.google.com/web/fundamentals/primers/async-functions#:~:text=If%20you%20use%20the%20async,the%20rejected%20value%20is%20thrown.
how to select divs https://medium.datadriveninvestor.com/how-to-select-all-div-elements-on-a-page-using-javascript-9b2cd16af740#:~:text=How%20to%20Select%20All%20Elements%20with%20JavaScript,name%2C%20i.e.%20.&text=Calling%20document.

____Funções____ fiz o máximo para reduzi-las e usar uma sintaxe mais moderna ___

(s)elect: essa função é acionada com o click, quando clica-se remove selected do black e adiciona a classe selected a cor do clique.

(f)ill: essa função é acionada no click, ela preenche um target contido no pixelboard, aplicando o backgroundColor da cor selecionada.

(c)lear: essa função é acionada no click, ela pega tods os pixels, percorre eles aplicando a cor white.
*/
