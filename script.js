 window.onload = function colorsPalet(){
    let palet = document.getElementById('color-palette'); 
    let board = document.getElementById('pixel-board');
    for(let index = 1; index <= 4; index += 1){   
        let paletItem = document.createElement('div');
        paletItem.className = "color";
        palet.appendChild(paletItem);
    }
    let paletItem = document.querySelectorAll('.color');
    paletItem[0].style.backgroundColor = "black";
    paletItem[1].style.backgroundColor = "red";
    paletItem[2].style.backgroundColor = "blue";
    paletItem[3].style.backgroundColor = "green";

           for(index = 1; index <= 25; index += 1){
           let line = document.createElement('div');
           line.className = "pixel";
           board.appendChild(line);
           }
        

         
 

          /* let line = document.getElementsByTagName('tr')
           for(index = 0; index <= line.length; index += 1){
               let square = document.createElement('td')
               square.className = "pixel";
               line[index].appendChild(square);

           }
     */


 

}