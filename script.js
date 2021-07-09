let palette = document.querySelector("#color-palette");
createPalette();

function createPalette(){
    
    for(let index = 0; index < 4; index += 1){
        

        let createDivItem = document.createElement('div');
        createDivItem.className = 'color';
        
        palette.appendChild(createDivItem);
        console.log(createDivItem);

        switch(index){
            case 1:
                document.querySelectorAll('div')[1].style.backgroundColor = 'black';
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

