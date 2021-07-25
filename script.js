window.onload = function colorsPalet(){
    const board = document.getElementById('pixel-board');
    const clearButton = document.getElementById('clear-board');
    const generateBoardButton = document.getElementById("generate-board");
    const boarSizeInput = document.getElementById('board-size');
    let  printed = false;
    let changeSizeBoard = false;
    /* const audioVolume = document.getElementById('audio'); */
    audio.volume = 0.1;
    // referência de como alterar volume do audio.
    //https://stackoverflow.com/questions/33747398/html-audio-tag-volume
    //Não precisei da const audioVolume ? Oo
 function boardForInputNumber(input){
        for(indexColumn = 1; indexColumn  <= input; indexColumn  += 1){
            const board = document.getElementById('pixel-board');
            let column = document.createElement('div');
            board.appendChild(column);
            column.className = 'col';             
            for(indexRow = 1; indexRow <= input; indexRow += 1){
                let row = document.createElement('div');
                row.className = "pixel";
                row.addEventListener('mousedown', paintingBoard);  
                column.appendChild(row);
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
  let input = document.getElementById("board-size");
  input.addEventListener('mousemove', () => {
    changeSizeBoard = true;
    if(changeSizeBoard === true) {
        deleteBoard();
        boardForInputNumber(input.value);
    }
    input.addEventListener('mouseup', () => {
      changeSizeBoard = false;
    })
  });
}


function paintingBoard(event){        
    let colorSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = colorSelected.value; 
    printed = true;
     let pix = document.querySelectorAll('.pixel');
    for(let index = 0; index < pix.length; index += 1){
      pix[index].addEventListener('mousemove', function () {
        if (printed === true) {
            pix[index].style.backgroundColor = colorSelected.value;
        }
      });   
      pix[index].addEventListener('mouseup', function () {
        printed = false;
        
      });
                
    }
    
}    
    

function clearBoard(){
    let boardItems = document.querySelectorAll('.pixel');
    for(let keys of boardItems){
        let board = document.getElementById('pixel-board');
        keys.style.backgroundColor = 'white';
        board.style.backgroundColor = "white";
    }
}       


clearButton.addEventListener('click', clearBoard);        
generateBoardButton.addEventListener('click', generateBoard);
boarSizeInput.addEventListener('mousedown', () => {
    changeSizeBoard = true;
    generateBoard();
});

boardForInputNumber(30);
}



  