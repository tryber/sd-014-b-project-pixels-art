function colorSelector(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}

function paint(event) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const element = event.target;
  element.style.backgroundColor = selectedColor;
}

function randomHexColorGenerator() {
  const hexCharacters = 'abcdef1234567890';
  let hexColorCode = '#';
  for (let index = 0; index < 6; index += 1) {
    hexColorCode += hexCharacters.charAt(Math.floor(Math.random() * 16));
  }
  return hexColorCode;
}

function createColorPalette() {
  const paletteColor = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.addEventListener('click', colorSelector);

    if (index === 0) {
      color.style.backgroundColor = 'black';
      color.classList.add('selected');
    } else {
      color.style.backgroundColor = randomHexColorGenerator();
    }

    paletteColor.appendChild(color);
  }
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';

    for (let subIndex = 0; subIndex < 5; subIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paint);
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

function newBoard() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const element = pixels[index];
    element.style.backgroundColor = 'white';
  }
}

createColorPalette();
createPixelBoard();

document.getElementById('clear-board').addEventListener('click', newBoard);

/*
  Descrição da function randomHexColorGenerator():
  A função retorna uma string contendo uma cor aleatória em hexadecimal.

  ### --- Linha por linha --- ###
  Linha 12: Eu crio a função que não recebe parâmetro
  Linha 13: Declaro uma variável constante com uma string contendo os caracteres que aparecem em um valor de cor hexadecimal;
  Linha 14: Declaro uma variável que eu possa modificar contento apenas a string com a cerquilha. Essa variável vai receber mais caracteres;
  Linha 15: Declaro um for loop com limite de 6 ações para atender ao formato de uma cor em hexadecimal;
  Linha 16: Nessa linha eu digo para pegar um caractere aleatório de hexCharacters. O Math.floor é para transformar em inteiro levando em
            consideração o piso. Math.random gera um valor aleatório e, quando multiplicado por 16, ele incluí 0 e excluí 16. Como eu tenho
            Math.floor sendo executado, esse número vai de 0 à 15. Esse é intervalo de índices da string hexCharacters. O charAt vai usar esse
            valor para selecionar o caractere da string hexCharacters;
  Linha 17: Fecho a execução do for;
  Linha 18: Retorno hexColorCode, pois vou precisar desse retorno para definir as cores na função createColorPalette.

  Referência acerca do charAt e geração de caracteres aleatórios a partir de uma string:
  https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/
*/
