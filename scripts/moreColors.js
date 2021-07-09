const newColorSelector = document.querySelector('#new-color');
newColorSelector.addEventListener('change', (event) => {
  const selected = document.querySelector('.selected');
  selected.style.backgroundColor = event.target.value;
});
