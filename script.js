window.onload = function () {

  let pixelColors = document.querySelector("#color-palette");
  pixelColors.addEventListener('click', function changeColorSelected(event) {
    let colorClassSelected = document.querySelector('.selected');
    colorClassSelected.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(document.querySelector('.selected'))
  });

  let tablePixel = document.querySelector('#pixel-board');

}
