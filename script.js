 window.onload = function colorsPalet(){
 

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
        paletItem[1].style.backgroundColor = "red";
        paletItem[2].style.backgroundColor = "blue";
        paletItem[3].style.backgroundColor = "green";
    }    

    function generateBoard(){
        let board = document.getElementById('pixel-board');
           for(index = 1; index <= 25; index += 1){
           let line = document.createElement('div');
           line.className = "pixel";
           board.appendChild(line);
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

 generateBoard();
 generatePalet();    
 selectColor();


}