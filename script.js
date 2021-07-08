window.onload = function () {

  let pixelColors = document.querySelector("#color-palette");
  pixelColors.addEventListener('click', function changeClassSelected(event) {
    let colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  });


};
