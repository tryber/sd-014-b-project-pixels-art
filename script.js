window.onload = function() {
  const pixelBoard = document.getElementById('pixel-board');
  const pixelLine = document.querySelectorAll('.pixel-line');

  for (let i = 0; i < pixelLine.length; i += 1) {
    for (let i2 = 0; i2 < pixelLine.length; i2 += 1) {
      const pixel = document.createElement('span');
      pixelLine[i].appendChild(pixel);
      pixel.className = 'pixel';
    };
  };
};