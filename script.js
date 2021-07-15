// Requisito 7 //referencia https://stackoverflow.com/questions/50883690/remove-class-from-one-element-while-adding-that-class-to-another-element-using
let getColors = document.querySelectorAll('.color');
for (let index = 0; index < getColors.length; index += 1) { 
  GetColors[index].addEventListener('click', classColor); 
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