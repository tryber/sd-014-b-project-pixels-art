let colorList = document.querySelectorAll(".color");
let pixelList = document.querySelectorAll(".pixel");

function addSelected(event){
   let getSelected = document.querySelector(".selected");
   getSelected.classList.remove("selected");
   event.target.classList.add("selected");
}

for(let index = 0; index < colorList.length; index +=1){
   colorList[index].addEventListener("click", addSelected);
}

function addColor(event){
   let getSelected = document.querySelector(".selected");
   let bgcSelected = getSelected.id
   event.target.style.backgroundColor = bgcSelected;
}

for(let index = 0; index < pixelList.length; index +=1){
   pixelList[index].addEventListener("click", addColor);
}
