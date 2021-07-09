let colorList = document.querySelectorAll(".color");

function addSelected(event){
    let getSelected = document.querySelector(".selected");
    getSelected.classList.remove(".delected");
    event.target.classList.add(".selected");
}

for(let index = 0; index < color.length; index =+1){
    colorList[index].addEventListener("click", addSelected);
}