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