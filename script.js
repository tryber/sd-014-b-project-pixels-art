// Define cores da paleta aleatoriamente (REF. [1]):
function colorGenerator() {
  // O primeiro quadrado (posição 0) é sempre preto
  let square0 = document.getElementById('color-palette').children[0];
  square0.style.backgroundColor = 'black';
  // Os outros três são de cores aleatórias
  for (let i=1; i <= 3; i+=1){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    let square = document.getElementById('color-palette').children[i];
    square.style.backgroundColor = color;
  }
  // Nenhuma cor é branca ou repetida: 
  let colors = document.querySelectorAll('.color');
  for (let j=1; j<=3; j+=1){
    for (let k=0; k<=3; k+=1){
      if (colors[j] === 'white' || colors[j] === colors[k]){
        colorGenerator();
    } 
      else {
      break;
    }
  } 
 }
}
colorGenerator();

// Cria o grid de pixels usando uma tabela:
function gridGenerator(tamanhoGrid) {
  let pixelBoard = document.getElementById('pixel-board');
  let createTable = document.createElement('table');
  pixelBoard.appendChild(createTable);
  for (let i = 1; i <= tamanhoGrid; i += 1) {
    let row = document.createElement('tr');
    row.classList.add('tableRow');
    createTable.appendChild(row);
    for (let j = 1; j <= tamanhoGrid; j += 1) {
      let column = document.createElement('th');
      row.classList.add('tableHead');
      column.className = 'pixel';
      row.appendChild(column);
    }
  }
}
gridGenerator(5);

// "Pega" as cores da paleta
function getColor() { 
  let colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', (event) => {
    let previouslySelected = document.querySelector('.selected')
    previouslySelected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

// Pinta o grid
function paintGrid() {
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    let selectedItem = document.querySelector('.selected')
    let newColor = selectedItem.style.backgroundColor;
    event.target.style.backgroundColor = newColor;
  });
}
getColor(); // REF. [2]
paintGrid();

// Botão que apaga o grid 
// Como paintGrid pinta TUDO em que clica, eu preciso apagar tudo também...
// Ou seja, section, table, tr, th e divs
let clearBoardButton = document.querySelector('#clear-board');
clearBoardButton.addEventListener('click', (event) => {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach((element) => { //REF. [3]
    element.style.backgroundColor = 'white';
  });
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.style.backgroundColor = 'white';
  let pixelTable = document.querySelector('table');
  pixelTable.style.backgroundColor = 'white';
  let tableRows = document.querySelectorAll('.tableRow');
  tableRows.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
  let tableHeads = document.querySelectorAll('.tableHead');
  tableHeads.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
});

// REFERÊNCIAS JAVASCRIPT:
// [1] GERADOR DE COR ALEATÓRIA: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
// [2] AJUDA COM A LÓGICA PARA CRIAR getColor e paintGrid PELO CÓDIGO DO COLEGA GILSON FERNANDES (DevJunior21@GitHub)
// [3] Vi colegas falando sobre um método que eu não conhecia, o element.forEach(). Então li sobre em: https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808

//PROBLEMAS:
// 1 - paintGrid pinta fora do grid também (it's not a bug, it's a feature...?)
