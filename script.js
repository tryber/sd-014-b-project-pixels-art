window.onload = function colorsPalet(){
    const board = document.getElementById('pixel-board');
    const clearButton = document.getElementById('clear-board');
    const generateBoardButton = document.getElementById("generate-board");
    let clicado = false;

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

function generateFirstBoard(){
    boardForInputNumber(5);
}    



 function boardForInputNumber(input){
        for(indexColumn = 1; indexColumn  <= input; indexColumn  += 1){
            const board = document.getElementById('pixel-board');
            let column = document.createElement('div');
            board.appendChild(column);
            column.className = 'col';
            column.addEventListener('mousedown', paintingBoard);
            for(indexRow = 1; indexRow <= input; indexRow += 1){
                let row = document.createElement('div');
                row.className = "pixel";
                column.appendChild(row);
                board.addEventListener('click', paintingBoard);
            }   
        }   
} 
 

function deleteBoard(){
    let deleteBoard = document.querySelector('main');
    let aBoard = document.getElementById('pixel-board');  
      deleteBoard.removeChild(aBoard); 
    let newboard = document.createElement('div');
    newboard.id = 'pixel-board';
    deleteBoard.appendChild(newboard); 
}

function generateBoard(){
  let input = document.getElementById("board-size").value;
    if(input === ''){
        alert('Board inválido!');
    }else if(input <= 5){
        deleteBoard();
        boardForInputNumber(5);
    }else if(input >= 50){
        deleteBoard();
        boardForInputNumber(50);
    }else{
        deleteBoard();
        boardForInputNumber(input);
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
     clicado = true;   
 /*    let pix = document.querySelectorAll('.pixel');
    for(let key of pix){
    key.addEventListener('mouseup', function () {
        clicado = false;
      });
      key.addEventListener('mouseover', function () {
        if (clicado) {
          key.backgroundColor = 'yellow';
        }
      }); 
                
    } */
}    
    

function clearBoard(){
    let boardItems = document.querySelectorAll('.pixel');
    for(let keys of boardItems){
        let board = document.getElementById('pixel-board');
        keys.style.backgroundColor = 'white';
        board.style.backgroundColor = "white";
    }
}       


/* board.addEventListener('mousedown', paintingBoard); */
clearButton.addEventListener('click', clearBoard);        
generateBoardButton.addEventListener('click', generateBoard);
generateFirstBoard();
generatePalet();    
selectColor();

}