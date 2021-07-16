//Faz com que a paleta de coores possa ser funcional somente depois que a página estiver carregada.
window.onload = function() {
  function paletteColor() { //Função que cria uma paleta de cores que já foram definidas.
    const getPalette = document.getElementsByClassName('color');
    for (let index of getPalette) {
      if (index === getPalette[0]) {
        index.style.background = 'black';
      } else if (index === getPalette[1]) {
        index.style.background = 'green';
      } else if (index === getPalette[2]) {
        index.style.background = 'blue';
      } else if (index === getPalette[3]) {
        index.style.background = 'yellow';
      }
      //Aproveitando o mesmo for para adicionar o evento de click aos quadrados de cores da paleta de cores. 
      index.addEventListener('click', function(event) {
        //Esse segundo loop adiciona a class selected onde não tem quando clicado e remove do outro que tinha.
        for (let indexTwo = 0; indexTwo < getPalette.length; indexTwo += 1) {
          getPalette[indexTwo].classList.remove('selected');
          event.target.classList.add('selected');
        }
      });
    }
  }
  paletteColor();
}
//Função para criar o quadro de pixels dinamicamente.
function creatPixilsBoard() {
  const pixelsBoard = document.querySelector('#pixel-board');
  for (let index = 1; index <= 5; index += 1) {
    const creatTr = document.createElement('tr');
    pixelsBoard.appendChild(creatTr);
    for (let indexTwo = 1; indexTwo <= 5; indexTwo += 1) {
      const creatTd = document.createElement('td');
      creatTr.appendChild(creatTd);
      creatTd.classList.add('pixel')
    }
  }
}

creatPixilsBoard();

//Requesito 08 onde adiciona o evento de click a tabela de pixel e a função faz com que eles recebam a cor da paleta.
const getTdPixels = document.querySelector('#pixel-board');
  
getTdPixels.addEventListener('click', function(event) {
  const selected = document.querySelector('.selected').style.background;
  event.target.style.backgroundColor  = selected;
});
