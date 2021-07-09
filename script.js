//Requisito 1:
document.querySelector('#title').innerHTML = "Paleta de Cores";

//Requisito 3:
//console.log(document.querySelector('.color'))
document.querySelector('.color').style.backgroundColor = 'black';

//Requisito 6:
document.querySelectorAll('.color')[0].classList.replace('color','selected')
//console.log(document.querySelectorAll('.selected')[0]);