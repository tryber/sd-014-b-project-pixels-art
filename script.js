window.onload = function () {
  
  let blackBox = document.getElementById('blackBox');
  
  let cornBox = document.getElementById('cornFlowerBox');
  
  let hotBox = document.getElementById('hotPinkBox');
  
  let tiffanyBox = document.getElementById('tiffanyBlueBox');

  blackBox.addEventListener('click', pickColor);
// cornBox.addEventListener('click', pickColor);
// hotBox.addEventListener('click', pickColor);
// tiffanyBox.addEventListener('click', pickColor);

  function pickColor(event) {
    let boxColor = event.target.style.backgroundColor;
  }

  let pixelsArray = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsArray.length; index += 1) {
    pixelsArray[index].addEventListener('click', changeToSelectedColor);
  }

  function changeToSelectedColor(event) {
    let pickedColor = document.querySelector('.selected');
    style = window.getComputedStyle(pickedColor);
    event.target.style.backgroundColor = style.getPropertyValue('background-color');
  }

}