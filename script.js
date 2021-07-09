//criando as variaveis e atribuindo cores a paleta
let todasCores = document.getElementsByClassName('color');
let corPreto = document.getElementsByClassName('color')[0]
corPreto.style.backgroundColor = 'black';
let corVermelho = document.getElementsByClassName('color')[1]
corVermelho.style.backgroundColor = 'red';
let corVerde = document.getElementsByClassName('color')[2]
corVerde.style.backgroundColor = 'green';
let corAzul = document.getElementsByClassName('color')[3]
corAzul.style.backgroundColor = 'blue';
let todosPixels =  document.getElementsByClassName('pixel'); 

//atribuindo iniciamente classe selected ao preto e trocando backgrondcolor de todos com classe pixel
corPreto.classList.add('selected');
for(i = 0; i < todosPixels.length; i += 1){
  todosPixels[i].style.backgroundColor = 'white';
}

//trocando classe selected pra quando uma cor for clicada
for (i = 0; i < todasCores.length; i += 1){
  todasCores[i].addEventListener('click' , function(){
    for (i2 = 0; i2 < todasCores.length; i2 +=1){
      todasCores[i2].classList.remove('selected');
    }
    event.target.classList.add('selected');
  })
}

//trocando a cor dos pixels referente a classe selected
for (i = 0; i < todosPixels.length; i += 1){
  todosPixels[i].addEventListener('click', function(){
    let colorir = document.querySelector('.selected');
    if( todosPixels[i].style.backgroundColor !== colorir.style.backgroundColor){
      todosPixels[i].style.backgroundColor = colorir.style.backgroundColor;
    }
  })
}

//fazendo o botao limpar todos os quadrados
let pegarBotao = document.getElementById('clear-board');

pegarBotao.addEventListener('click', function(){
  for (i = 0; i < todosPixels.length; i += 1){
    todosPixels[i].style.backgroundColor = 'white';
  }
})