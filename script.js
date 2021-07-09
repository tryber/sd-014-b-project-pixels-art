//Requisito 1:
document.querySelector('#title').innerHTML = "Paleta de Cores";

//Requisito 3:
//console.log(document.querySelector('.color'))
document.querySelector('.color').style.backgroundColor = 'black';

//Requisito 6:
document.querySelectorAll('.color')[0].id = 'first';
document.getElementById('first').classList.add("selected");
//console.log(document.getElementById('first').className);
//console.log(document.querySelectorAll('.selected')[0]);

//Requisito 7:
let firstColor = document.getElementById('first');
document.querySelectorAll('.color')[1].id = 'second';
let secondColor = document.getElementById('second');
document.querySelectorAll('.color')[2].id = 'third';
let thirdColor = document.getElementById('third');
document.querySelectorAll('.color')[3].id = ('forth');
let forthColor = document.getElementById('forth');

//console.log(firstColor, secondColor, thirdColor, forthColor);

////Adidionando os eventos de cliques as cores:
firstColor.addEventListener("click",selectorColor);
secondColor.addEventListener("click",selectorColor);
thirdColor.addEventListener("click",selectorColor);
forthColor.addEventListener("click",selectorColor);

////Criando a função para selecionar a cor:
function selectorColor(event){
  let selectedColor = document.querySelectorAll('.color');
  for(index = 0; index < 4; index += 1){
    //console.log(selectedColor[index])
    //console.log(event.target)
    if (selectedColor[index] !== event.target){      
      selectedColor[index].classList.remove("selected");
      //selectedColor = selectedColor[index].className = 'color';
    } else{
      event.target.classList.add('selected');
    }
  }  
}
