window.onload = function() {

let color1 = document.getElementsByClassName('color')[0];
color1.style.backgroundColor = "black";

let color2 = document.getElementsByClassName('color')[1];
color2.style.backgroundColor = "blue";

let color3 = document.getElementsByClassName('color')[2];
color3.style.backgroundColor = "green";

let color4 = document.getElementsByClassName('color')[3];
color4.style.backgroundColor = "yellow";

color1.addEventListener("click" , recebeClick);
color2.addEventListener("click" , recebeClick);
color3.addEventListener("click" , recebeClick);
color4.addEventListener("click" , recebeClick);

function recebeClick(event) {
  for (index = 0; index < 5; index +=1){
    let corSelect = document.querySelector('.color');
    if (corSelect[index] === document.querySelector('.selected')){
      corSelect = corSelect[index].classList.remove('.selected');
    } 
  }
  event.target.classList.add('.selected');
}
}