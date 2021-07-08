const firstDiv = document.getElementById('black');
const secondDiv = document.getElementById('yellow');
const thirdDiv = document.getElementById('red');
const forDiv = document.getElementById('blue');
const botao = document.getElementById('clear-board')

    for(let cont=0;cont <=24; cont+=1){
        let box = document.querySelectorAll('.pixel');
        box[cont].addEventListener("click",printColor);
    }
    

function selectColor(event){
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
}

firstDiv.addEventListener("click",selectColor)
secondDiv.addEventListener("click",selectColor)
thirdDiv.addEventListener("click",selectColor)
forDiv.addEventListener("click",selectColor)


function printColor(event){
    let box = document.querySelector('.selected')
        
    event.target.style.backgroundColor = box.id;
}

function resetColor(){
    
    let boxPrinted = document.querySelectorAll('.pixel')
    for (let cont = 0; cont <=24;cont+=1){
    boxPrinted[cont].style.backgroundColor = 'white';
} 
}

botao.addEventListener("click",resetColor);




