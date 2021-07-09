/* Variaveis globais */

/* let corSelected = 'black'; */

/* ********* */

window.onload = function () {
  const botaoBlack = document.getElementById('black');
  botaoBlack.classList.add('selected');
}

/* function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  corSelected = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
} */

/* Chamando eventos */

/* Add eventos de seleção do botão e da cor */
/* for (let i = 0; i < botoesCores.length; i += 1) {
  botoesCores[i].addEventListener('click', selectColor);
} */

/* Eventos de pintura na tabela */
/* for (let i = 0; i < pixels.length; i += 1) {

  pixels[i].addEventListener('click', function () {
    pixels[i].style.backgroundColor = corSelected;
  })

} */

/* Ferramentas - Botão de resetar tudo pra branco */
/* botaoReset.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}) */
