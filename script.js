const firstDiv = document.getElementById('black');
const secondDiv = document.getElementById('yellow');
const thirdDiv = document.getElementById('red');
const fourthDiv = document.getElementById('blue');
const clearButton = document.getElementById('clear-board');
const generateButton = documen.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');

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

clearButton.addEventListener("click",resetColor);
generateButton.addEventListener("click",creatDiv);

function creatDiv(){
    let n = input.value;
    if (n > 0){
        for (let cont=0; cont < n; cont+=1){
            let div = document.createElement('div')
            pixelBoard.appendChild(div);
            div.classList.add('pixel');
        }
        }else {
            alert('Board inválido!')
        }
    }





