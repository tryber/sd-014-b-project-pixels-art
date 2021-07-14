window.onload=function(){
let linha =document.querySelectorAll(".line");
let clearbut=document.querySelector("#clear-board");
limpPixel();
clearbut.addEventListener('click',limpPixel);
let selecionado=document.querySelector('.selected');

document.querySelectorAll(".color").forEach(unit=>{
    unit.addEventListener('click',selecionaCor=>{
        selecionado.classList.remove('selected');
        unit.classList.add('selected');
        selecionado = document.querySelector('.selected');
       
    });}
)

readline(linha);
limpPixel();

document.querySelectorAll(".pixel").forEach(item=>{
    item.addEventListener("click",mudacor);}
)

function mudacor(event){
    let itm= event.target;
    itm.style.backgroundColor=selecionado.id;
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