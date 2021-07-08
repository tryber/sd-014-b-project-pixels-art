const blackDiv = document.getElementById('black');
const blueDiv = document.getElementById('blue');
const redDiv = document.getElementById('red');
const greenDiv = document.getElementById('green');

function changeSelectedColor(event){
  let color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected')
}

blackDiv.addEventListener('click', changeSelectedColor);
blueDiv.addEventListener('click', changeSelectedColor);
redDiv.addEventListener('click', changeSelectedColor);
greenDiv.addEventListener('click', changeSelectedColor);



// function changeSelected(){
//   let corSelecionada = document.querySelector('.color')
  
//   corSelecionada.addEventListener('click', function(){

//     for (let i =0; i < corSelecionada.length; i++){
//       if (corSelecionada[i].innerHtml == 'selected'){
//         corSelecionada.className.remove('selected');}
//         else {
//           corSelecionada.className.add('selected')
//         }
//       }
//     }
//   )
//   }




