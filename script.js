const firstDiv = document.getElementById('black');
const secondDiv = document.getElementById('yellow');
const thirdDiv = document.getElementById('red');
const forDiv = document.getElementById('blue');

let box = document.querySelector('#pixel-board');
    box.addEventListener("click",printColor);



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
    let boxprinted = document.querySelector('.selected')
        
    event.target.style.backgroundColor = boxprinted.id;
}

