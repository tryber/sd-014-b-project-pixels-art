// Requisito 7 //
const getColors = document.querySelectorAll('.color');

for (let index = 0; index < getColors.length; index += 1) { 
  getColors[index].addEventListener('click', classColor); 
   function classColor(event) { 
   limpaSelect(); 
    event.target.classList.add('selected'); 
  }
}
function limpaSelect(){
  for (let index = 0; index < getColors.length; index += 1) { 
    getColors[index].classList.remove('selected');
  }
}