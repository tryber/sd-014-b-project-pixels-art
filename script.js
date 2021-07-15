const colors = document.querySelectorAll('.color');
colors[0].className = 'color selected';

for (let index = 1; index <= 3; index += 1) {
  const rgb = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
  colors[index].style.backgroundColor = `rgb(${Object.values(rgb)})`;
}

const setColor = (thisColor) => {
    colors.forEach((element, index) => {
      if (index !== thisColor) {
        element.className = 'color';
      } else {
        element.className = 'color selected';
      }
    });
};
  
colors[0].addEventListener('click', () => setColor(0));
colors[1].addEventListener('click', () => setColor(1));
colors[2].addEventListener('click', () => setColor(2));
colors[3].addEventListener('click', () => setColor(3));

function actionPixels() {
    const pixels = document.querySelectorAll('.pixel');
  
//  https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript
    pixels.forEach((eachPixel) => {
      eachPixel.addEventListener('click', () => {
        const selectedColor = window
          .getComputedStyle(document.querySelector('.selected'))
          .getPropertyValue('background-color');
        eachPixel.style.backgroundColor = selectedColor;
      });
    });
  
    const clear = document.querySelector('#clear');
  
    clear.addEventListener('click', () =>
      pixels.forEach((eachPixel) => {
        eachPixel.style.backgroundColor = 'white';
    }));
}

actionPixels();
