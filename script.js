function criaGrid() {
  const alturaGrid = 5;
  const larguraGrid = 5;
  const grid = document.getElementById('pixel-board');

  for (let i = 0; i < alturaGrid; i++) {
    const coluna = grid.insertRow(0);
    for (let x = 0; x < larguraGrid; x++) {
      let celula = coluna.insertCell(0);
      celula.classList.add('pixel');
      celula.style.backgroundColor = 'white';
    }
  }
}
criaGrid();
let pegaCor = document.querySelector('.selected');
const grid = document.getElementById('pixel-board');
grid.addEventListener('click', function (event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = 'black';
  }
});
