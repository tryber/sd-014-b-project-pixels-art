//Requisito 1:
document.querySelector('#title').innerHTML = "Paleta de Cores";

//Requisito 3:
//console.log(document.querySelector('.color'))
document.querySelector('.color').style.backgroundColor = 'black';

//Requisito 6:
document.querySelectorAll('.color')[0].id = 'first';
document.getElementById('first').className = "selected";
//console.log(document.getElementById('first').className);
//console.log(document.querySelectorAll('.selected')[0]);
