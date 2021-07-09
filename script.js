
//criando a paleta de cores
for (let index = 0; index < 4; index +=1) {
    let collorPalette = document.createElement('div');
    collorPalette.className = 'color'
    document.querySelector('#color-palette').appendChild(collorPalette)
}
// adicionando classes com as respectivas cores
// adicinando `selected` primeira div que contem a cor black
let color = document.querySelectorAll('.color')
    color[0].classList.add ('black', 'selected')
    color[1].classList.add ('red')
    color[2].classList.add ('yellow')
    color[3].classList.add ('green')
// limpa todas as classes `selected` das divs do (#color-palette) 
    document.querySelector('#color-palette').addEventListener ('click', clearClass)
        function clearClass() {
            for ( let index = 0; index < color.length; index += 1) {
                color[index].classList.remove ('selected')
            }
        }
// adicinando a classe `selected` a div clickada 
//usando o setTimeout para que a remocao nao entre em conflito com a adicao
    for ( let index = 0; index < color.length; index += 1) {
        color[index].addEventListener ('click', selecionar)
        function selecionar() {
            setTimeout(function () {
                color[index].classList.add ('selected');
            },10);
        }
    }
    //setTimeout https://www.youtube.com/watch?v=RXWAZ0C_mds&ab_channel=AkshaySaini

// nota : a remocao de todas as classes acontece ao mesmo tempo que a classe é adicionada a div determinada(clicada), entao usei o setTimeout para que a remocao aconteca primeio, e a adicao aconteca dps
let setColor = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue("background-color")
let a = document.querySelectorAll('.pixel')
    for (let index = 0; index < a.length; index += 1) {
        a[index].addEventListener ('click', c)
        function c() {
            let setColor = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue("background-color")
            a[index].style.backgroundColor = setColor;
        }
    }

