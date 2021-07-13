window.onload=function(){
let linha =document.querySelectorAll(".line");
let cor='black'
changedcor(cor);
finalcor(cor);
function changedcor(cor){
document.querySelectorAll(".color").forEach(unit=>{
    unit.addEventListener('click',selecionaCor=>{
        let cor= unit.id
       
    });
})}

readline(linha);

function finalcor(cor){
document.querySelectorAll(".pixel").forEach(item=>{
    item.addEventListener("click",mudacor=>{
        item.styles.backgroundColor= cor
    })
})}

function createPixel(className){
    let pixel=document.createElement("div");
    pixel.className=className;
    return pixel;
}

function addpixel(divLine){
    for (let v=1;v<=5;v++){ 
        divLine.appendChild(createPixel("pixel"));
        }
    }

function readline(linha){
    for(let index=0;index<linha.length;index+=1){
        addpixel(linha[index]);      
    }
}

}