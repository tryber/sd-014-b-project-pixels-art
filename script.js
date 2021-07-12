const gridSize = document.getElementById('board-size').value;
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
const clearBoardButton = document.querySelector('#clear-board');
const generateBoard = document.getElementById('generate-board');


// Define cores da paleta aleatoriamente (REF. [1]):
function colorGenerator() {
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
  for (let j=1; j<=3; j+=1){
    for (let k=0; k<=3; k+=1){
      if (colors[j] === 'white' || colors[j] === colors[k]){
        colorGenerator();
    } else {
      break;
    }
  } 
 }
}
colorGenerator();

// Cria o grid de pixels usando uma tabela:
function gridGenerator(tamanhoGrid) {
  let createTable = document.createElement('table');
  pixelBoard.appendChild(createTable);
  for (let i = 1; i <= tamanhoGrid; i += 1) {
    let row = document.createElement('tr');
    row.classList.add('tableRow');
    createTable.appendChild(row);
    for (let j = 1; j <= tamanhoGrid; j += 1) {
      let column = document.createElement('th');
      row.classList.add('tableHead');
      column.classList.add('pixel');
      row.appendChild(column);
    }
  }
}
gridGenerator(5);

// "Pega" as cores da paleta
function getColor() { 
  // Antes de tudo, é preciso checar se alguma cor foi selecionada
  // Porque encontrei um bug: se vc seleciona a mesma cor duas vezes, nenhuma cor fica selecionada   
  // Outro bug: Se o usuário clcia fora das caixas .pixel, nenhuma cor é selecionada e dá erro
  colorPalette.addEventListener('click', (event) => {
  if (!event.target.classList.contains('color')){
      alert('Selecione alguma das 4 cores.');
    }  
    colors.forEach((element) => {
      if (element.classList.contains('selected') && element !== event.target){
        element.classList.remove('selected');
      } else if (element === event.target){
        element.classList.add('selected');
      }
    });
  });
}
getColor(); // REF. [2]

// Pinta o grid
function paintGrid() {
  pixelBoard.addEventListener('click', (event) => {
    let selectedItem = document.querySelector('.selected')
    let newColor = selectedItem.style.backgroundColor;
    event.target.style.backgroundColor = newColor;
  });
}
paintGrid();

function cleanGrid() {
  // pixels.forEach((element) => { //REF. [3]
  //   element.style.backgroundColor = 'white';
  // });
  let pixels = document.querySelectorAll('.pixel');

  for (let i=0; i < pixels.length; i++){
    pixels[i].style.backgroundColor = 'white';
  }
  
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
}

// Botão que apaga o grid. REF. [4]
clearBoardButton.addEventListener('click', (event) => {
  cleanGrid();
});

// Botão quera novo pixel-board.
generateBoard.addEventListener('click', (event)=>{
  let gridSize = document.getElementById('board-size').value;
    if (gridSize === ''){
    window.alert('Board inválido!');
    }
    if (gridSize >= 50){
      gridSize = 50;
    } else if (gridSize <= 5){
      gridSize = 5;
    }
  cleanGrid();
  pixelBoard.innerHTML = '';
  gridGenerator(gridSize);
});

// generateBoard.addEventListener('keypress', (event)=>{
//   if (event.key === 'Enter'){
//     let gridSize = document.getElementById('board-size').value;
//       if (gridSize >= 50){
//         gridSize = 50;
//       } else if (gridSize <= 5){
//         gridSize = 5;
//       }
//       else if (gridSize === ''){
//         alert('Board inválido!');
//       }
//     cleanGrid();
//     pixelBoard.innerHTML = '';
//     gridGenerator(gridSize);
//   }
// });

// REFERÊNCIAS JAVASCRIPT:
// [1] GERADOR DE COR ALEATÓRIA: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
// [2] AJUDA COM A LÓGICA PARA CRIAR getColor e paintGrid PELO CÓDIGO DO COLEGA GILSON FERNANDES (DevJunior21@GitHub)
// [3] Vi colegas falando sobre um método que eu não conhecia, o element.forEach(). Então li sobre em: https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808
// [4] Ideia de como apagar uma div toda e seus filhos https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb

//PROBLEMAS:
// 1 - paintGrid pinta fora do grid também (it's not a bug, it's a feature...?)
