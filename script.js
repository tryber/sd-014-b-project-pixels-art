window.onload = function colorsPalet(){
    let palet = document.getElementById('color-palette');  
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

}

