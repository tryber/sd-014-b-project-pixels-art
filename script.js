window.onload = function () {
  let paletaDeCores = document.querySelectorAll('.color');

  for (let colors of paletaDeCores) {
    if (paletaDeCores[0] === colors) {
      colors.style.backgroundColor = 'black';
      colors.classList.add('selected');
    }
    else if (paletaDeCores[1] === colors) {
      colors.style.backgroundColor = 'blue';
    }
    else if (paletaDeCores[2] === colors) {
      colors.style.backgroundColor = 'purple';
    }
    else if (paletaDeCores[3] === colors) {
      colors.style.backgroundColor = 'pink';
    }
  }
  let color1 = document.querySelector('#blackPixel');
  let color2 = document.querySelector('#bluePixel');
  let color3 = document.querySelector('#purplePixel');
  let color4 = document.querySelector('#pinkPixel');

  color1.addEventListener('click', clickPalette);
  color2.addEventListener('click', clickPalette);
  color3.addEventListener('click', clickPalette);
  color4.addEventListener('click', clickPalette);

  function clickPalette(eventColor) {
    let colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove("selected");
    eventColor.target.classList.add("selected");
    console.log(eventColor.target);
  }

  let boxOfPixels = document.querySelector('#pixel-board');
  boxOfPixels.addEventListener('click', receiveColorOfPixels);

  function receiveColorOfPixels (Event) { 
    let selectedPixels = document.querySelector('.selected');
    let colorSelect = window.getComputedStyle(selectedPixels).getPropertyValue('background-color'); //fonte:https://www.w3schools.com/jsref/met_cssstyle_getpropertyvalue.asp. e https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle.
    Event.target.style.backgroundColor = colorSelect;
  }
  

}