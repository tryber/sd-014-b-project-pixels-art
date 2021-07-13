window.onload=function(){
let linha =document.querySelectorAll(".line");
let cr="black";
let clearbut=document.querySelector("#clear-board");
limpPixel();
clearbut.addEventListener('click',limpPixel);

document.querySelectorAll(".color").forEach(unit=>{
    unit.addEventListener('click',selecionaCor=>{
        cr=unit.id;
       console.log(cr);
    });}
)

readline(linha);
limpPixel();

document.querySelectorAll(".pixel").forEach(item=>{
    item.addEventListener("click",mudacor);}
)

function mudacor(event){
    let itm= event.target;
    itm.style.backgroundColor=cr;
}

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

function limpPixel(){
    document.querySelectorAll(".pixel").forEach(item=>{item.style.backgroundColor='white'})
}

}