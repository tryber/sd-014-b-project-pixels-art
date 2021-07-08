window.onload = function (){

  let colorPalette = document.getElementById('color-palette');

  let colorBlack = document.createElement('div');
  colorBlack.className = "color"
  colorBlack.style.backgroundColor = "black";
  colorPalette.appendChild(colorBlack);

  let colorGreen = document.createElement('div');
  colorGreen.className = "color"
  colorGreen.style.backgroundColor = "#42883E";
  colorPalette.appendChild(colorGreen);
  
  let colorBlue = document.createElement('div');
  colorBlue.className = "color"
  colorBlue.style.backgroundColor = "#282E62";
  colorPalette.appendChild(colorBlue);

  let colorYellow = document.createElement('div');
  colorYellow.className = "color"
  colorYellow.style.backgroundColor = "#E6BF5E";
  colorPalette.appendChild(colorYellow);
}