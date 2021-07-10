// 1 - Adicione à página o título "Paleta de Cores". OK

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const clearButton = document.getElementById('clear-board'); // Atribuir elemento do botão clear-board à variável clearButton

function clearBoard() { // Adicionar evento 'click' para botão acionar função anônima
  document.querySelectorAll('.pixel').forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white'; // Setar backgroundcolor em branco para cada pixel
  });
}

clearButton.addEventListener('click', clearBoard);
