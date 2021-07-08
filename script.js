window.onload = function () {
  
  const blackBox = document.getElementById('blackBox');
  
  const cornBox = document.getElementById('cornFlowerBox');
  
  const hotBox = document.getElementById('hotPinkBox');
  
  const tiffanyBox = document.getElementById('tiffanyBlueBox');

  blackBox.addEventListener('click', pickColor);
  cornBox.addEventListener('click', pickColor);
  hotBox.addEventListener('click', pickColor);
  tiffanyBox.addEventListener('click', pickColor);

  function pickColor(event) {
    let previousSelected = document.querySelector('.selected');
    previousSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }

  const pixelsArray = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsArray.length; index += 1) {
    pixelsArray[index].addEventListener('click', changeToSelectedColor);
  }

  function changeToSelectedColor(event) {
    let pickedColor = document.querySelector('.selected');
    let style = window.getComputedStyle(pickedColor);
    event.target.style.backgroundColor = style.getPropertyValue('background-color');
  }

}