// *Requisito 7*
// function changeClass() {
//   let pathColor = document.querySelectorAll('.color');
//   for (let content of pathColor) {
//     content.addEventListener('click', function (event) {
//       if (content === event.target) {
//         content.classList.remove('selected');
//       } else {
//         event.target.classList.add('selected');
//       }  
//     })
//     console.log(content.classList)
//     console.log(content);
//   }
// }; changeClass();
// *** Preciso de ajuda pra entender por que não está funcionando o 'remove' da function acima. 
// Monitoria do Iago - Conclusão: É necessário outro 'for' dentro do eventListener, porque ele só entra na parte do 'if' quando o evento 'click' acontece, daí confere se tem 'selected' e acaba atribuindo, ou retirando desse mesmo clicado, e depois o 'for' volta a percorrer, mas não entra no eventListener, porque não tem novos 'clicks'.

function deleteSelected() {
  document.querySelector('.selected').classList.remove('selected')
}
for (let content of document.querySelectorAll('.color')) {
  content.addEventListener('click', function (event) {
    deleteSelected();
    event.target.classList.add('selected');
  })   
}

// *Requisito 8*
const pixelBlocks = document.querySelectorAll('.pixel');
function paintBlocks() {
  for (let index = 0; index < pixelBlocks.length; index += 1) {
    pixelBlocks[index].addEventListener('click', function () {
      document.querySelectorAll('.pixel')[index].style.backgroundColor = document.querySelector('.selected').id;
    })
  }
}; paintBlocks();

// *Requisito 9*

document.querySelector('#clear-board').addEventListener('click', function () {
  for (let index = 0; index < pixelBlocks.length; index += 1) {
    pixelBlocks[index].style.backgroundColor = 'white';
  }
})