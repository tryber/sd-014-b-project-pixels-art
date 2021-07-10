function colorGenerator() {
  // Define cores aleatoriamente (REF. [1])
  // O primeiro quadrado (posição 0) é sempre preto
  for (let i=1; i <= 3; i+=1){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    let square = document.getElementById('color-palette').children[i];
    square.style.backgroundColor = color;
  }
  // Não permite a cor branca nem cores repetidas: 
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

function gridGenerator(tamanhoGrid) {
  // Cria o grid de pixels usando uma tabela
  let pixelBoard = document.getElementById('pixel-board');
  let createTable = document.createElement('table');
  pixelBoard.appendChild(createTable);
  for (let i = 1; i <= tamanhoGrid; i += 1) {
    let row = document.createElement('tr');
    createTable.appendChild(row);
    for (let j = 1; j <= tamanhoGrid; j += 1) {
      let column = document.createElement('th');
      column.className = 'pixel';
      row.appendChild(column);
    }
  }
}
gridGenerator(5);


// REFERÊNCIAS JAVASCRIPT:
// [1] GERADOR DE COR ALEATÓRIA: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
