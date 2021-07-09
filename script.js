function colorGenerator() {
// Definir cores aleatoriamente (REF. [1])
// O primeiro quadrado (posição 0) é sempre preto
  for (let i=1; i <= 3; i+=1){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    let square = document.getElementById('color-palette').children[i];
    square.style.backgroundColor = color;
    }
// Não permitir a cor branca nem cores repetidas    
  let colors = document.querySelectorAll('.color');
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

function gridGenerator(tamanhoGrid) {
// Criar um grid 5x5
  const pixelBoard = document.getElementById('pixel-board');
  const newTable = document.createElement('table');
  pixelBoard.appendChild(newTable);
  for (let i = 1; i <= tamanhoGrid; i += 1) {
    const row = document.createElement('tr');
    newTable.appendChild(row);
    for (let j = 1; j <= tamanhoGrid; j += 1) {
      const column = document.createElement('th');
      column.className = 'pixel';
      row.appendChild(column);
    }
 }
}
gridGenerator(5);


// REFERÊNCIAS JAVASCRIPT:
// [1] GERADOR DE COR ALEATÓRIA: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
