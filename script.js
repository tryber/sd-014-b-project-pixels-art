    let table = document.createElement('table');
    table.id = 'pixel-board';
    table.setAttribute('border', '1');
    for (let indexTr = 0; indexTr < 5; indexTr += 1) {
      let tr = document.createElement('tr');
      for (let indexTd = 0; indexTd < 5; indexTd += 1) {
        if (indexTr == 5 && indexTd == 5) {
          break;
        } else {
          let td = document.createElement('td');
          td.className = 'pixel';
          td.style.background = 'white';
          td.style.width = '40px';
          td.style.height = '40px';
          tr.appendChild(td);      
        } 
      }
      table.appendChild(tr);
    }
    document.getElementById('tabela').appendChild(table);

    let clickFirst = document.getElementById('first');
    let clickSecund = document.getElementById('secund');
    let clickThird = document.getElementById('third');
    let clickFourth = document.getElementById('fourth');

    const changeColor = (event) => {
        let valueSelect = document.querySelector('.selected');
        valueSelect.classList.remove('selected'); //procura e remove quem tiver com selected
        event.target.classList.add('selected');
      }

    clickFirst.addEventListener("click", changeColor);
    clickSecund.addEventListener("click", changeColor);
    clickThird.addEventListener("click", changeColor);
    clickFourth.addEventListener("click", changeColor);


    const fill = () => {
      document.querySelector('#pixel-board').addEventListener('click', (e) =>
    e .target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor); 
    }
   fill();

    // const choiceColor = () => {
    //    for (const p of document.querySelectorAll('.pixel')) p.style.backgroundColor = 'white';  // faz o link entre a cor pelo id da variavel 
    // } 
    // const constClear = () => {
    //   document.querySelector('#clear-board').addEventListener("click", choiceColor);
    // }
    // constClear();  //ctrl k c --- ctrl k u 

    //for (let index = 0; index < matriz.length; index =+1){
     // matriz[index].addEventListener("click", choiceColor);  
    //}
    //matriz.forEach((pixel) => pixel.addEventListener("click", choiceColor));
    //console.log(matriz.length);
    
    
    let btnElement = document.querySelector('#clear-board');
    btnElement.addEventListener("click", clearAll);

     function clearAll(){
       table.style.background = 'white';   
     }





 