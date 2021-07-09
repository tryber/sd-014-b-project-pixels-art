let linha =document.querySelectorAll(".line");

selectedCor();
readline(linha);
function readline(linha){
    for(let index=0;index<linha.length;index+=1){
        addpixel(linha[index]);
    }
}
function addpixel(divLine){
    for (let v=1;v<=25;v++){ 
        divLine.appendChild(createPixel("pixel"));
        if(v%5==0){
            divLine.createElement(<br></br>);
        }
    }
}
function createPixel(className){
    let pixel=document.createElement("div");
    pixel.className=className;
    return pixel;
}