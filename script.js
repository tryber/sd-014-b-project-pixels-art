window.onload = function() {
  const blackPixel = document.getElementById('black');
  const orangeRedPixel = document.getElementById('orange-red');
  const bluePixel = document.getElementById('blue');
  const greenPixel = document.getElementById('green');
  
  function selectedColor() {
    function changeSelected(event) {
      const divSelected = document.querySelector('.selected');
      divSelected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  
    blackPixel.addEventListener('click', changeSelected);
    orangeRedPixel.addEventListener('click', changeSelected);
    bluePixel.addEventListener('click', changeSelected);
    greenPixel.addEventListener('click', changeSelected);
  }
  
  selectedColor();

  document.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    }
  }, false);
  //Acima foi ultilizado o conceito de event bubbling contido no link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
}
