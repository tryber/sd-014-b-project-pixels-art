window.onload = function (){
  const coresPalet = document.getElementById('color-palette').children;
  const pixelArt = document.getElementsByClassName('pixel');  
  console.log(pixelArt);   
  // Função que adiciona a classe SELECTED na cor selecionada e remove da outra.
  function selectColor (event){
    // 1° passo um Loop em todas as cores e removo a classe de todos
    for (let index in coresPalet) {
      if (coresPalet[index].classList) {
        coresPalet[index].classList.remove('selected');
      }
    }
    // 2° adiciono a classe novamente apenas na cor que recebeu o clique.
    if (event.target.classList) {
      event.target.classList.add('selected');
    }
  }
  // Função que identifica a cor seleciona e pinta o pixel que recebeu o clique.
  function colore (event){
    let corSelecionada = document.querySelector('.selected');
    let cordaVez = window.getComputedStyle(corSelecionada, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = cordaVez;
  }
  // Cria um loop para adicionar um listener em todos os pixels.
  for (let index = 0; index < pixelArt.length; index += 1){
    pixelArt[index].addEventListener('click', colore);
  }
  // Cria um Loop para adicionar um listener em todos as cores da Paleta de cores.
  for (let index = 0; index < coresPalet.length; index += 1) {
    coresPalet[index].addEventListener('click', selectColor);
  }

};


// 1° adicionar um listener em todos os pixels click chama a função colore.
// 2° função que colore.
  // 1° identifica a cor da variavel corSelecionada
  // 2° pinta o pixel que recebel o clique.
