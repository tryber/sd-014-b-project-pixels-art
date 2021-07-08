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
    for (let index = 0; index < pixelCells.length; index +=1 ) {
      pixelCells[index].style.backgroundColor = 'white'
    }
  });
}


