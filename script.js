let divs = document.getElementsByClassName('color');
for (let index of divs) {
    index.addEventListener('click', selectColor);
}

function selectColor(event) {
  let color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

function setColor(event) {
  let color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.id;
}

let table = document.getElementById('pixel-board');
table.addEventListener('click', setColor);
