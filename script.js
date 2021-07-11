window.onload = function() {
  let rowAndColumns = 5;
  sessionStorage.setItem('colorPicker','black');

  // Cria linhas('div') de acordo com a variável disposta acima
  function createRow() {
    let position = document.getElementById('pixel-board');
    let newRow = document.createElement('div');

    newRow.className = 'row';
    position.appendChild(newRow);
  }
  for (let i = 0; i < rowAndColumns; i += 1) { 
    createRow();
  }
    
  // Cria o pixel e o atribui à linha, quantidade de acordo com o parâmetro recebido
  function createPixel(integer) {
    const howMany = integer;
    const position = document.querySelectorAll('.row');
    for (let i = 0; i < howMany; i += 1) {
      for (let index = 0; index < position.length; index += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
      position[index].appendChild(newPixel);
      }
    }
  }
  createPixel(rowAndColumns);

  // Define função que permite aplicar a cor selecionada no elemento
  const canvas = document.querySelectorAll('.pixel');
  for (let i = 0; i < canvas.length; i += 1) {
  canvas[i].addEventListener('click', paint);
  }
  function paint(selection) {
  let currentColor = sessionStorage.getItem('colorPicker');
  selection.target.style.backgroundColor = currentColor;
  }
  // Permite troca da cor atual, move a classe 'selected' de acordo com o click do usuário, e limita a posse a um elemento
  let palette = document.querySelectorAll('.color');
    for (let i = 0; i < palette.length; i += 1) {
    palette[i].addEventListener('click', pickColor);
    palette[i].addEventListener('click', selectColor)
    }
  function pickColor(selection) {
    let newColor = selection.target.id;
    sessionStorage.setItem('colorPicker', newColor);
  }
  function selectColor(selection) {
    let selectedColor = document.querySelectorAll('.selected');
    if (selectedColor.length !== 0) {
      selectedColor[0].classList.remove('selected');
      selection.target.classList.add('selected');
    }
  }
  // Permite limpar o quadro, preenche todos os pixels com a cor branca
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearCanvas);
  function clearCanvas() {
    let canvas = document.querySelectorAll('.pixel');
    for (let i = 0; i < canvas.length; i += 1) {
      canvas[i].style.backgroundColor = 'white';
    }
  }
}
