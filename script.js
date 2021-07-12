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

corPreto.classList.add('selected');
for(i = 0; i < todosPixels.length; i += 1){
  todosPixels[i].style.backgroundColor = 'white';

  for (i = 0; i < todasCores.length; i += 1){
    todasCores[i].addEventListener('click' , function(){
      for (i2 = 0; i2 < todasCores.length; i2 +=1){
        todasCores[i2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    })
  }

  for (i = 0; i < todosPixels.length; i += 1){
    todosPixels[i].addEventListener('click', function(){
      let colorir = document.querySelector('.selected');
      if( todosPixels[i].style.backgroundColor !== colorir.style.backgroundColor){
        todosPixels[i].style.backgroundColor = colorir.style.backgroundColor;
      }
    })
  }

  let pegarBotao = document.getElementById('clear-board');

pegarBotao.addEventListener('click', function(){
  for (i = 0; i < todosPixels.length; i += 1){
    todosPixels[i].style.backgroundColor = 'white';
  }
})