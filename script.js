let black = document.querySelector('#black');
black.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  black.className = 'color selected';
});

let blue = document.querySelector('#blue');
blue.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  blue.className = 'color selected';
});

let green = document.querySelector('#green');
green.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  green.className = 'color selected';
});

let yellow = document.querySelector('#yellow');
yellow.addEventListener('click', function () {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  yellow.className = 'color selected';
});

function colorBlock() {
  const selectedItem = document.querySelectorAll('.selected');
  const selectedColor = document.querySelectorAll('.color');
  const colorTable = document.querySelectorAll('#pixel-board .pixel');
  colorTable.forEach((click) => {
    click.addEventListener('click', (event) => {
      let getColor = event.target.style;
      getColor.backgroundColor = window
        .getComputedStyle(document.querySelector('.selected'))
        .getPropertyValue('background-color');
    });
  });
}
colorBlock();
