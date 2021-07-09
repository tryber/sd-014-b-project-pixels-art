
function colorGenerator() {
// Definir cores aleatoriamente (Referência [1])
    for (let i=0; i <= 3; i+=1){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let color = "rgb(" + x + "," + y + "," + z + ")";
        let square = document.getElementById('color-palette').children[i];
        square.style.backgroundColor = color;
    }
// Não permitir a cor branca nem cores repetidas    
    let colors = document.querySelectorAll('.color');
    for (let j=0; j<=3; j+=1){
        for (let k=0; k<=3; k+=1){
            if (color[j] === 'white' || color[j] === color[k]){
                colorGenerator();
            } else {
                break;
            }
        } 
    }
}
colorGenerator();

// REFERÊNCIAS:
// [1] GERADOR DE COR ALEATÓRIA: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php