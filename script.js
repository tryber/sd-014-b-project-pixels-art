window.onload = function colorsPalet(){
let board = document.getElementById('pixel-board');
let clearButton = document.getElementById('clear-board');
let generateBoardButton = document.getElementById("generate-board")
function generatePalet(){     
    let palet = document.getElementById('color-palette'); 
    for(let index = 1; index <= 4; index += 1){   
        let paletItem = document.createElement('div');
        paletItem.className = "color";
        palet.appendChild(paletItem);
    }
    let paletItem = document.querySelectorAll('.color');
    paletItem[0].style.backgroundColor = "black";
    paletItem[0].classList.add('selected');
    paletItem[0].id = "black";
    paletItem[1].style.backgroundColor = "red";
    paletItem[1].id = "red";
    paletItem[2].style.backgroundColor = "blue";
    paletItem[2].id = "blue";
    paletItem[3].style.backgroundColor = "green";
    paletItem[3].id = "green";
}    

function generateBoard(){
    let board = document.getElementById('pixel-board');
    let input = document.getElementById("board-size").value;  
    console.log(input);  
    if(input === ''){
        alert('Board inválido!');
    }else{
        for(index = 1; index <= input * input; index += 1){
        let line = document.createElement('div');
        line.className = "pixel";
        board.appendChild(line);
        }
    } 
    if(input === 7){
        board.style.maxWidth = '575px';
        board.style.Height = '598px';
    } else if(input === 6){
        board.style.maxWidth = '492px';
        board.style.maxHeight = '512px';
    }else if(input === 5){
        board.style.maxWidth = '410px';
        board.style.maxHeight = '425px';
    }   
} 

function selectColor(){
    let optionsPalet = document.getElementsByClassName('color');
        optionsPalet[0].addEventListener('click', function(event){
            for(index = 0; index < optionsPalet.length; index += 1){
                optionsPalet[index].classList.remove('selected');
                event.target.classList.add('selected');
            }
        })    
        optionsPalet[1].addEventListener('click', function(event){
                for(index = 0; index < optionsPalet.length; index += 1){
                    optionsPalet[index].classList.remove('selected');
                    event.target.classList.add('selected');
                }
        })            
        optionsPalet[2].addEventListener('click', function(event){
            for(index = 0; index < optionsPalet.length; index += 1){
                optionsPalet[index].classList.remove('selected');
                event.target.classList.add('selected');
            }
        })        
        optionsPalet[3].addEventListener('click', function(event){
            for(index = 0; index < optionsPalet.length; index += 1){
                optionsPalet[index].classList.remove('selected');
                event.target.classList.add('selected');
            }
        })        
    
            
        
}     
function paintingBoard(event){        
    let colorSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = colorSelected.id;        
        
    }

function clearBoard(){
    let boardItems = document.querySelectorAll('.pixel');
    for(let keys of boardItems){
        keys.style.backgroundColor = 'white';
    board.style.backgroundColor = "white";
    }
}        
board.addEventListener('click', paintingBoard);
clearButton.addEventListener('click', clearBoard);        
generateBoardButton.addEventListener('click', generateBoard);




generatePalet();    
selectColor();



}