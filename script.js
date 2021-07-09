/* Variaveis globais */

let corSelected = 'black';

/* ********* */

window.onload = carregarApp;

function carregarApp() {

  let botoesCores = document.querySelectorAll('.color');
  let pixels = document.querySelectorAll('.pixel');
  let botaoReset = document.getElementById('clear-board');

  /* Cores inicias */

  botoesCores[0].style.backgroundColor = 'black';
  botoesCores[1].style.backgroundColor = 'rgb(227,113,113)';
  botoesCores[2].style.backgroundColor = 'rgb(55,154,234)';
  botoesCores[3].style.backgroundColor = 'rgb(226,232,81)';

  /* Eventos de seleção do botão e da cor */
  for (let i = 0; i < botoesCores.length; i += 1) {

    botoesCores[i].addEventListener('click', function () {
      
      for (let k = 0; k < botoesCores.length; k += 1) {
        botoesCores[k].classList.remove('selected');  
      }

      botoesCores[i].classList.add('selected');

      corSelected = window.getComputedStyle(botoesCores[i], null).getPropertyValue("background-color");
      console.log(corSelected);

    })

  }

  /* Eventos de pintura na tabela */
  for (let i = 0; i < pixels.length; i += 1) {

    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = corSelected;
    })

  }

  /* Ferramentas - Botão de resetar tudo pra branco */
  botaoReset.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'rgb(255,255,255)';
    }
  })

}
