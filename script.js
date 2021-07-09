let colorList = document.querySelectorAll(".color");

function addSelected(event){
   let getSelected = document.querySelector(".selected");
   getSelected.classList.remove("selected");
   event.target.classList.add("selected");
}

for(let index = 0; index < colorList.length; index +=1){
   colorList[index].addEventListener("click", addSelected);
}