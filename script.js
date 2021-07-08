// *Requisito 7*
// function changeClass() {
//   let pathColor = document.querySelectorAll('.color');
//   for (let content of pathColor) {
//     content.addEventListener('click', function (event) {
//       if (content.classList == 'selected') {
//         content.classList.remove('selected');
//       }
//       event.target.classList.add('selected');
//     })
//     console.log(content.classList)
//     console.log(content);
//   }
// }; changeClass();
// *** Preciso de ajuda pra entender por que não está funcionando o 'remove' da function acima.

function deleteSelected() {
  document.querySelector('.selected').classList.remove('selected')
}
function changeClass() {
  let pathColor = document.querySelectorAll('.color');
  for (let content of pathColor) {
    content.addEventListener('click', function (event) {
      deleteSelected();
      if (event.target.classList != "selected") {
        event.target.classList.add('selected');
      } 
    })   
  }
}; changeClass();

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