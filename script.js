window.onload = function () {
document.getElementById("black-box").style.backgroundColor = "black";
document.getElementById("red-box").style.backgroundColor = "red";
document.getElementById("green-box").style.backgroundColor = "green";
document.getElementById("blue-box").style.backgroundColor = "blue";


let black = document.querySelector('#black-box');
black.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    element.classList.remove('selected');
    black.className = 'color selected';
});
let red = document.querySelector('#red-box');
red.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    element.classList.remove('selected');
    red.className = 'color selected';
});
let green = document.querySelector('#green-box');
green.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    element.classList.remove('selected');
    green.className = 'color selected';
});
let blue = document.querySelector('#blue-box');
blue.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    element.classList.remove('selected');
    blue.className = 'color selected';
});

document.querySelectorAll('.pixel').forEach(box => {
    box.addEventListener('click', function (event) {
        event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
        console.log("alou silvio");
        //pinta os pixels de outras cores
    })
})

document.querySelector('#clear-board').addEventListener('click', function () {
    
    let pixel = document.querySelectorAll('.pixel')
    pixel.forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });

    // let pixel = document.querySelectorAll('.pixel')
    // pixel.style.backgroundColor = "white";
});
}