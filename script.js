window.onload = function (){

//Criação dos quadrados com cada um com sua cor
  let colorPalette = document.getElementById('color-palette');

  let colorBlack = document.createElement('div');
  colorBlack.className = "color selected"
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

//Criação da tabela

  let pixelBoard = document.getElementById('pixel-board');
  let largura = 5;
  let altura = 5;
  
  for (let index = 0; index < altura; index += 1){
    for (let index = 0; index < largura; index += 1){
      let pixels = document.createElement('div');
      pixels.className = "pixel";
      pixelBoard.appendChild(pixels);    
    }
  }
  
}
  