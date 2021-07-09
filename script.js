function colorSelected(event) {

    const selectedActual = document.getElementsByClassName('selected')[0];
    selectedActual.classList.remove('selected');

    event.target.classList.add('selected');

}
document.getElementById('color-palette').addEventListener('click', colorSelected);

// const corVerde = document.getElementById('color4');

// verificar se for clicada for clicada,
// corVerde.addEventListener('click', colorSelected);
// a classe selected deve ser removida de onde estava e

// ficar na cor atual, nesse caso a verde.