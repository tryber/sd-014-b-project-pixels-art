const newColorSelector = document.querySelector('#new-color');
newColorSelector.addEventListener('change', function (event) {
  let selected = document.querySelector('.selected');
  selected.style.backgroundColor = event.target.value;
})