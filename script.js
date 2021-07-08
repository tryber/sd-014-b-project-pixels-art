function createTable(){  
  const pixelTable= document.getElementById('pixel-board'); //elemento pai
  const table= document.createElement('table') //criando a tabela 
  table.className='table';

  for(let index=0; index<5;index+=1){  //cada interação aumenta uma linha
    const tr= document.createElement('tr');   
      tr.className='tr'  
      for(let index2=0; index2<5; index2+=1){  //alinha as colunas lado a lado formando uma linha ao final
        const td= document.createElement('td');
        td.className='pixel';
        tr.appendChild(td);
      }
      table.appendChild(tr);
  }
  pixelTable.appendChild(table);
}
createTable()

function createPalette(){
  const rowPalette = document.getElementById('color-palette');
  let colorArray=['color1','color2','color3','color4']
  for(index=0; index<4; index +=1 ){
    const row=document.createElement('div');
    row.className='color';
    row.classList.add(colorArray[index]);
    rowPalette.appendChild(row);
  }  
}
createPalette()

function selectedColor(){  
  let color = document.querySelectorAll('color');
  let select = 'selected';

  color.addEventListener('click', function(event){
    for(index=0; index <color.length; index +=1){
      if(color[index].innerHTML!= select){
        event.target.className = select;        
      }
      else {
        event.target.className = 'color'
      }
    }
  })   
  
}
selectedColor()