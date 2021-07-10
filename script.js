let palette = document.querySelector("#color-palette");
let pixelBoard = document.querySelector("#pixel-board");

createPalette();

function createPalette(){
    
    for(let index = 0; index < 4; index += 1){
        

        let createDivItem = document.createElement('div');
        createDivItem.className = 'color';
        
        palette.appendChild(createDivItem);

        switch(index){
            case 1:
                document.querySelectorAll('div')[1].style.backgroundColor = 'black';
                document.querySelectorAll('div')[1].className = 'color selected'
            break;
            case 2:
                document.querySelectorAll('div')[2].style.backgroundColor = 'blue';
            break;
            case 3:
                document.querySelectorAll('div')[3].style.backgroundColor = 'red';
            case 4:
                document.querySelectorAll('div')[4].style.backgroundColor = 'yellow';
            break;
        }

    }
}



createPixel()
function createPixel(){
    for(let index = 0; index < 25; index += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel'
        pixelBoard.appendChild(pixel); 
        
    }
}
//variável com as divs que devem ser selecionadas
let divColor = document.querySelectorAll('.color');
for(let index = 0; index < divColor.length; index += 1){
    //cria variável para recuperar o elemento 
    let activeClass = divColor[index];
    //atribui um evento a classe criada
    activeClass.addEventListener('click',function(){
        disableClass = document.querySelector('.selected');
    //cria um if para verificar se o elemento ja possui a class selected e caso tenha altera no click
        if(activeClass.className != 'selected'){
            disableClass.classList.remove('selected');
            activeClass.classList.add('selected');
            
        }
    });
   
}
let colorPixel = document.querySelectorAll('.pixel');


for(let index = 0;index < colorPixel.length;index +=1){
    colorPixel[index].addEventListener('click',function(event){
        let element = document.querySelector('.selected');
        element = element.style.backgroundColor;
        event.target.style.backgroundColor = element;
    });
}