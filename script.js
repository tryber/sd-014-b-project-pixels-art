const color = document.querySelectorAll('.color');

function selected(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selected);
}
