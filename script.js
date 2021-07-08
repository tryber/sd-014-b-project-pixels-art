window.onload = function () {
  let pixelColors = document.querySelector("#color-palette");

  pixelColors.addEventListener('click', function changeColorSelected(event) {
    let colorClassSelected = document.querySelector('.selected');
    colorClassSelected.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(document.querySelector('.selected'))
  });

  let tablePixel = document.querySelector('#pixel-board');

  tablePixel.addEventListener('click', function changePixelColor(event) {
    let colorClassSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = colorClassSelected.id
    console.log(colorSelected)
  })

}
