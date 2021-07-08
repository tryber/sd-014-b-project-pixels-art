function createPixelBoard() {
  for (let index = 0; index < 5; index += 1){
    let tableRow = document.createElement('div');
    tableRow.className = 'pixel tr';
    document.querySelector('#pixel-board').appendChild(tableRow);
    for (let indexB = 0; indexB < 5; indexB += 1){
      let tableCell = document.createElement('div');
      tableCell.className = 'pixel td'
      document.querySelectorAll('.tr')[index].appendChild(tableCell);
    }
  }

}

window.onload = function () {
  createPixelBoard();
}