// window.onload = function (){

// //Criação dos quadrados com cada um com sua cor
//   let colorPalette = document.getElementById('color-palette');

//   let colorBlack = document.createElement('div');
//   colorBlack.className = "color selected"
//   colorBlack.style.backgroundColor = "black";
//   colorPalette.appendChild(colorBlack);

//   let colorGreen = document.createElement('div');
//   colorGreen.className = "color"
//   colorGreen.style.backgroundColor = "#42883E";
//   colorPalette.appendChild(colorGreen);

//   let colorBlue = document.createElement('div');
//   colorBlue.className = "color"
//   colorBlue.style.backgroundColor = "#282E62";
//   colorPalette.appendChild(colorBlue);

//   let colorYellow = document.createElement('div');
//   colorYellow.className = "color"
//   colorYellow.style.backgroundColor = "#E6BF5E";
//   colorPalette.appendChild(colorYellow);

// //Criação da tabela

//   let pixelBoard = document.getElementById('pixel-board');
//   let fullPixelBoard = document.getElementById('full-pixel-board');
//   const largura = 5;
//   const altura = 5;

//   // for (let index = 0; index < altura; index += 1){
//   //   let pixels = document.createElement('div');
//   //   pixels.className = "pixel";
//   //    pixelBoard.appendChild(pixels);

//   //    for (let index = 0; index < largura; index += 1){
//   //     let pixels = document.createElement('div');
//   //     pixels.className = "pixel";
//   //     pixelBoard.appendChild(pixels);
//   //   }
//   // }

//   for (let indexContador = 0; indexContador < altura; indexContador += 1) {
//     pixelBoard = document.createElement('div');
//     pixelBoard.className = 'pixel-board-2';
//     fullPixelBoard.appendChild(pixelBoard);

//     for (let index = 0; index < largura; index += 1) {
//       let pixels = document.createElement('div');
//       pixels.className = "pixel";
//       pixelBoard.appendChild(pixels);
//     }
//   }

// //Criar seletor do botão

//   function selectedButton(){
//     let selectedButtonColor = document.querySelectorAll(".color")

//       for (let index = 0; index < selectedButtonColor.length; index += 1) {
//         selectedButtonColor[index].addEventListener('click', function (event){
//           for (let indexContador = 0; indexContador < selectedButtonColor.length;indexContador += 1) {

//             if (selectedButtonColor[indexContador] !== event.target){
//               selectedButtonColor[indexContador].classList.remove('selected');

//             }else {
//               event.target.classList.add('selected');
//             }
//           }
//         })
//       }
//   }
//   selectedButton();

//   let allPixels = document.getElementsByClassName('pixel')

//   for (let index = 0; index < allPixels.length; index += 1) {
//     allPixels[index].addEventListener('click', function (event) {
//       let pixelSelected = document.querySelector('.selected').style.backgroundColor;
//       event.target.style.backgroundColor = pixelSelected;
//     })
//   }

//   let newButton = document.getElementById('button');

//  // Criando input para aumentar o tamanho do pixel

//   let generateBoard = document.createElement('button');
//   generateBoard.innerHTML = "VQV";
//   generateBoard.id = 'generate-board';
//   newButton.appendChild(generateBoard);

// // Criando botão limpar tudo

//   let clearPixel = document.createElement('button');
//   clearPixel.id = 'clear-board';
//   clearPixel.innerHTML = 'Limpar tudo';
//   newButton.appendChild(clearPixel);

//   clearPixel.addEventListener('click', function (){
//     for (let index = 0; index < allPixels.length; index += 1) {
//       allPixels[index].style.backgroundColor = 'white';
//     }
//   })

//   let buttonGenerateBoard = document.getElementById('generate-board');

//   const inputSize = document.getElementById('board-size');

//   generateBoard.addEventListener('click', function (){
//     const inputValue = parseInt(inputSize.value);
//     let addInputSizeAltura = inputValue;
//     let addInputSizeLargura = inputValue;
//     if (inputValue < 5 || inputValue > 50 || (isNaN(inputValue)) ) {
//       alert('Board inválido!');
//     }
//     let apagaTudo = document.getElementsByClassName('pixel-board-2')
//     for (let index = 0; index < apagaTudo.length; index += 1){
//       apagaTudo[index].parentNode.removeChild(apagaTudo[index]);
//     }

//     for (let indexContador = 0; indexContador < addInputSizeAltura; indexContador += 1) {
//       pixelBoard = document.createElement('div');
//       pixelBoard.className = 'pixel-board-3';
//       fullPixelBoard.appendChild(pixelBoard);

//       for (let index = 0; index < addInputSizeLargura; index += 1) {
//         let pixels = document.createElement('div');
//         pixels.className = "pixel";
//         pixelBoard.appendChild(pixels);
//       }
//     }
//   })
// }

function createPaleteColor() {
  const paletaDeCor = document.getElementById('color-palette');
  const colorBlack = document.createElement('div');
  colorBlack.className = 'selected color';
  colorBlack.style.backgroundColor = 'black';
  paletaDeCor.appendChild(colorBlack);
  const colorRed = document.createElement('div');
  colorRed.className = 'color';
  colorRed.style.backgroundColor = 'red';
  paletaDeCor.appendChild(colorRed);
  const colorBlue = document.createElement('div');
  colorBlue.className = 'color';
  colorBlue.style.backgroundColor = 'blue';
  paletaDeCor.appendChild(colorBlue);
  const colorGreen = document.createElement('div');
  colorGreen.className = 'color';
  colorGreen.style.backgroundColor = 'green';
  paletaDeCor.appendChild(colorGreen);
}

function createSquare() {
  const squarePixel = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    squarePixel.appendChild(createPixel);

    for (let indexContador = 0; indexContador < 4; indexContador += 1) {
      const createPixels = document.createElement('div');
      createPixels.className = 'pixel';
      squarePixel.appendChild(createPixels);
    }
  }
}

function classSelected() {
  const palleteColor = document.querySelectorAll('.color');

  palleteColor.forEach((color, index) => {
    palleteColor[index].addEventListener('click', (event) => {
      palleteColor.forEach((colorRemove, indexContador) => {
        if (palleteColor[indexContador] !== event.target) {
          palleteColor[indexContador].classList.remove('selected');
        } else {
          event.target.classList.add('selected');
          console.log(palleteColor[index]);
        }
      });
    });
  });
}

window.onload = () => {
  createPaleteColor();
  createSquare();
  classSelected();
};
