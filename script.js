
 
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
          tr.appendChild(td);      
        } 
      }
      table.appendChild(tr);
    }
    document.getElementById('tabela').appendChild(table);
 