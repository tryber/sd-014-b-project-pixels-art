//#7
function selectColor(event) {
  let color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

let divs = document.getElementsByClassName('color');
for (let index of divs) {
    index.addEventListener('click', selectColor);
}
//#8
function setColor(event) {
  let color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.id;
}

let table = document.getElementById('pixel-board');
table.addEventListener('click', setColor);

//#9
function clearTable() {
  let pixel = document.getElementsByClassName('pixel');
  for (let index of pixel) {
    index.style.backgroundColor = 'white';
  }
}

let button = document.getElementById('clear-board');
button.addEventListener('click', clearTable);
