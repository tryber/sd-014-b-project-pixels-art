const secaoPaleta = document.getElementById('color-pallete');

function criaPaleta (){
    for (let index = 1; index < 5; index += 1){
        let palleteBox = document.createElement('div');
        palleteBox.className = 'color';
        palleteBox.style.border = '1px solid black';
        secaoPaleta.appendChild(palleteBox);
    }
}
criaPaleta();

const takeEachPalleteBox = document.querySelectorAll('.color');
function createColorToPallete() {
    for (let index = 0; index < takeEachPalleteBox.length; index += 1) {
        if (takeEachPalleteBox[index].style.backgroundColor === 'white') {
            takeEachPalleteBox.style.backgroundColor = 
        }
    }
}
createColorToPallete();
takeEachPalleteBox.forEach(createColorToPallete);