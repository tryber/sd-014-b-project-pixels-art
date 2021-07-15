const firstDiv = document.getElementById('black');
const secondDiv = document.getElementById('yellow');
const thirdDiv = document.getElementById('red');
const fourthDiv = document.getElementById('blue');
const clearButton = document.getElementById('clear-board');
const generateButton = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');


function selectColor(event){
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
}

firstDiv.addEventListener("click",selectColor)
secondDiv.addEventListener("click",selectColor)
thirdDiv.addEventListener("click",selectColor)
fourthDiv.addEventListener("click",selectColor)


function printColor(event){
    let box = document.querySelector('.selected')
        
    event.target.style.backgroundColor = box.id;
}

function resetColor(){
    
    let boxPrinted = document.querySelectorAll('.pixel')
    for (let cont = 0; cont < boxPrinted.length;cont+=1){
    boxPrinted[cont].style.backgroundColor = 'white';
    } 
}

clearButton.addEventListener("click",resetColor);
generateButton.addEventListener("click",validate);

function creatPixels(n){

        pixelBoard.innerHTML = ''
        for (let line=0; line < n; line+=1){
          let div = document.createElement('div')
            pixelBoard.appendChild(div);
            div.classList.add('linha');
            
            
            for (let colun = 0; colun < n; colun+=1){
              let div2 = document.createElement('div')
                div.appendChild(div2);
                div2.className = 'pixel';
            }
            
        }    
            
        for(let cont=0;cont < n*n; cont+=1){
            let box = document.querySelectorAll('.pixel');
                box[cont].addEventListener("click",printColor);
            }
    
}

function creatDefault(){
    let n = 5;
    for (let line=0; line < n; line+=1){
        let div = document.createElement('div')
          pixelBoard.appendChild(div);
          div.classList.add('linha');
          
          
    
          for (let colun = 0; colun < n; colun+=1){
            let div2 = document.createElement('div')
              div.appendChild(div2);
              div2.classList.add('pixel');
          }
      }
          
      for(let cont=0;cont < n*n; cont+=1){
          let box = document.querySelectorAll('.pixel');
              box[cont].addEventListener("click",printColor);
          }
}

function validate(){
    
    let n = document.getElementById('board-size').value;
   
    if (n > 0 && n < 5){

       return creatPixels(5);
    
    }else if (n > 50){

        return creatPixels(50);
        
    }else if(n >= 5 && n <=50 ){
        creatPixels(n)
    
    }else if(n == ""){
        alert('Board inválido!');
    }
    
}

creatDefault();


