window.onload = function() {
    
    let boardWidth = 5
    lines = 5

    /*Funções para construir o quadro de pixels inspirada nos arquivos da dinâmica do bloco 5.4*/
    function fillBoard(lines) {
        for(let index = 0; index < lines.length; index += 1) {
          fillLine(lines[index]);
          controlRight += 1;
          controlLeft -= 1;
        }
      }

    function createBox(className) {
        let box = document.createElement("div");
        box.className = className;
        return box;
      }

    function constructLine(divLine) {
      for (let index = 1; index <= boardWidth; index += 1) {
        pixel.appendChild(createBox("box"));
        }
      }

}