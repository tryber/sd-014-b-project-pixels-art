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
    if(index==0){
    row.className='color';
    row.classList.add(colorArray[index]); 
    row.classList.add('selected');   
    rowPalette.appendChild(row);
    }
    else{
    row.className='color';
    row.classList.add(colorArray[index]);       
    rowPalette.appendChild(row);
    }
    
  }  

}
createPalette()

const color1 = document.getElementsByClassName('.color1')
const color2 = document.getElementsByClassName('.color2')
const color3 = document.getElementsByClassName('.color3')
const color4 = document.querySelector('.color4')

function selectedColor(event){
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', selectedColor);
color2.addEventListener('click', selectedColor);
color3.addEventListener('click', selectedColor);
color4.addEventListener('click', selectedColor); 

selectedColor()

