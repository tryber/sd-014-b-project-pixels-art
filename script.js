window.onload = function () {

  let pixelColors = document.querySelector("#color-palette");

  pixelColors.addEventListener('click', function changeColorSelected(event) {
    let colorClassSelected = document.querySelector('.selected');
    colorClassSelected.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(document.querySelector('.selected'));
  });

  let tablePixel = document.querySelector('#pixel-board');

  tablePixel.addEventListener('click', function changePixelColor(event) {
    let colorClassSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = colorClassSelected.id;
    console.log(colorClassSelected.id);
  });

  let button = document.querySelector('#clear-board');

  button.addEventListener('click', function clearBoard() {
    let pixelCells = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelCells.length; index += 1) {
      pixelCells[index].style.backgroundColor = 'white'
    }
  });
  let tableParent = document.getElementById('pixel-board')
  console.log(tableParent)

  function generatePixelCells(n) {
    let tableParent = document.getElementById('pixel-board')
    // código da linha 4 a 7, visualizado e re-interpretado da url https://www.codegrepper.com/code-examples/javascript/how+to+remove+all+child+elements+of+div+in+javascript
    while (tableParent.firstChild) {
      tableParent.removeChild(tableParent.lastChild)
    }
    for (let index = 0; index < n; index += 1) {
      let newLine = document.createElement('div');
      newLine.className = 'tr';
      tableParent.appendChild(newLine);
      for (let i = 0; i < n; i += 1) {
        let newCol = document.createElement('div')
        newCol.className = 'pixel';
        newLine.appendChild(newCol);

      }
    }
  }

  let generateCellsButton = document.querySelector('#generate-board');

  generateCellsButton.addEventListener('click', function buttonEvent() {
    let input = document.querySelector('#board-size');
    let inputValue = input.value
    if (input.value == '') {
      alert("Board Inválido!")
    } else if (inputValue > 5 && inputValue <= 50) {
      generatePixelCells(inputValue);
    } else if (inputValue <= 5) {
      generatePixelCells(5)
    } else if (inputValue >= 50) {
      generatePixelCells(50)
    } else if (input.value == null) {
      alert("Board Inválido!")
    }
    input.value = ''
  });

}


