window.onload = function() {
  let coresPalet = document.getElementById('color-palette').children

  //Cria um Loop para adicionar um listener em todos as cores da Paleta de cores.
  for (index = 0; index < coresPalet.length; index += 1) {
    coresPalet[index].addEventListener('click', selectColor);
  };
  
  //Função que adiciona a classe SELECTED na cor selecionada e remove da outra.
  function selectColor (event, selected) {
    //1° passo um Loop em todas as cores e removo a classe de todos
    for (index in coresPalet) {
      if (coresPalet[index].classList) {
        coresPalet[index].classList.remove('selected');
      }
    }
    //2° adiciono a classe novamente apenas na cor que recebeu o clique.
    if (event.target.classList) {
      event.target.classList.add('selected');
      }
  }  
}

  /*function selecionaCor (event, selected) {
    for (index in coresPalet) {
      if (coresPalet[index].hasClass(selected)) {
          coresPalete[index].classList.remove('selected');
      }
    }
    
    if (event.target.classList) {
        event.target.classList.add('selected');
    };

    /*function addClass (event, selected) {
      if (!hasClass(event.target, 'selected')) {
        event.target.classList.add('selected');
      }
    };
  }

  function selecionaACor (event, selected) {
    if (event.target.classList) {
    event.target.classList.add('selected');
    } else if (!hasClass(event, 'selected')) {
        event.target.selected += " " + 'selected';
    }
  }; 
  
  event.target.hasClass(selected) == false 
  
  function selecionaCor () {
    function remove () {
      for (index in coresPalet) {
        if (coresPalet[index].hasClass(selected)) {
            coresPalete[index].classList.remove('selected');
        }
      }
    }
    function add (event, selected) {
      if (event.target.classList) {
        event.target.classList.add('selected');
        } else if (!hasClass(event, 'selected')) {
            event.target.selected += " " + 'selected';
        }
    }
  }
  function remove (event, selected) {
  if (event.target.classList) {
    event.target.classList.remove('selected');
  } else if (hasClass(event.target, selected)) {
      var reg = new RegExp('(\\s|^)' + 'selected' + '(\\s|$)');
      event.target.selected = event.target.selected.replace(reg, ' ');
  }
}
  */

