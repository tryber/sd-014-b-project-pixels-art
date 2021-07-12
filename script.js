const black = document.querySelector('#black');
black.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  black.className = 'color selected';
});

const blue = document.querySelector('#blue');
blue.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  blue.className = 'color selected';
});

const green = document.querySelector('#green');
green.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  green.className = 'color selected';
});

const yellow = document.querySelector('#yellow');
yellow.addEventListener('click', () => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  yellow.className = 'color selected';
});

function colorBlock() {
  const colorTable = document.querySelectorAll('#pixel-board .pixel');
  colorTable.forEach((click) => {
    click.addEventListener('click', (event) => {
      const getColor = event.target.style;
      getColor.backgroundColor = window
        .getComputedStyle(document.querySelector('.selected'))
        .getPropertyValue('background-color');
    });
  });
}
colorBlock();
