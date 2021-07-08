function makeFramePixel() {
  for (let index = 0; index < 5; index += 1) {
    let parentPixel = document.querySelector("#pixel-board")
    let pixel = document.createElement("table");
    pixel.classList.add("pixel");
    parentPixel.appendChild(pixel);
  }
}

let pixel = document. querySelectorAll("#pixel-board td")
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].classList.add("pixel");
}
