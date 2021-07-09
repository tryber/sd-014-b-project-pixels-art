let linha =document.querySelectorAll(".line");
var brek=document.createElement("br");
let cet=linha[index];
selectedCor();
readline(linha);
function createPixel(className){
    let pixel=document.createElement("div");
    pixel.className=className;
    return pixel;
}
function addpixel(cet){
    for (let v=1;v<=5;v++){ 
        cet.appendChild(createPixel("pixel"));
        }
    }

function readline(linha){
    for(let index=0;index<linha.length;index+=1){
        addpixel(linha[index]);
       linha.appendChild(brek);
    }
}

