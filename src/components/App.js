import pokemon from '../data/pokemon/pokemon.js';

const App = () => {
  const el = document.createElement('div');

  el.className = 'initPage';
  el.innerHTML = '<img src="./resources/pokemon.png" alt="Logo Pokemon" class="logo"><img src="./resources/Memorice.png" alt="Logo Pokemon" id="memorice"><img src="./resources/trainer.png" alt="Logo Pokemon" id="entrenador"><img src="./resources/select.png" alt="Logo Pokemon" id="select"><div class="difficulty"><img src="./resources/pokeball.png" alt="Tres pares de cartas" class="dificultad" id="easy"><img src="./resources/superball.png" alt="Seis pares de cartas" class="dificultad" id="medium"><img src="./resources/ultraball.png" alt="Nueve pares de cartas" class="dificultad" id="hard"></div><div><img src="./resources/ash.gif" alt="" id="img-footer"></div>';

  return el;
}

const gamePage = () => {

   /* Genera el titulo y el boton de inicio */
  let node1 = document.querySelector('#pokemonCards');
  let title = document.createElement("img");
  title.src = "./resources/voltearcartas.png";
  title.className = "titulo";
  node1.appendChild(title);

  let playAgain = document.getElementById('toInit1');
   playAgain.addEventListener('click', () =>{
     location.reload();
   });

  /* Funciones que generan pokemones aleatorios */
  function shuffleArray(array) {
    array.map(function (element, i) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    })
    return array;
  }

  function generarPokemon(pokemons) {
    pokemons.map(function (element) {
      let node = document.querySelector('#pokemonCards');
      let divs = document.createElement("div");
      divs.classList.add("memory-card");
      divs.classList.add(element.id);
      node.appendChild(divs);
      let imagen2 = document.createElement("img");
      imagen2.className = "card-backside";
      imagen2.src = element.image;
      imagen2.style.background = element.bgColor;
      let imagen = document.createElement("img");
      imagen.className = "card-upside";
      imagen.src = "./resources/backside.png";
      divs.appendChild(imagen2);
      divs.appendChild(imagen);
    })

  }
  generarPokemon(shuffleArray(pokemon.items));
  generarPokemon(shuffleArray(pokemon.items));

  /* Guardar cada par de cartas en una constante */
  const cards = document.querySelectorAll('.memory-card');

  /* agrega la clase flip y voltea las cartas*/
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;


  function flipCard(e) {
    if (lockBoard) return;
    if (e.target.parentNode === firstCard) return;

    e.target.parentNode.classList.add('flip');


    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = e.target.parentNode;

      return;
    }
    secondCard = e.target.parentNode;

    checkForMatch();
  }

  /* Chequea si hay match */
  let correct = 0;
  function checkForMatch() {
    let isMatch = firstCard.className === secondCard.className;

    isMatch ? disableCards() : unflipCards();
    if (isMatch === true) {
      correct += 1;
    }
    if (correct === 2) {
      document.querySelector('#gamePage').style.display = "none";
      document.querySelector('#congratsPage').style.display = "block";
      var el = document.querySelector('#congratsPage');

      el.innerHTML = '<img src="./resources/congrats.png" alt="" id="celebrate3"><img src="./resources/celebrate.gif" alt="Pokemones celebrando victoria" id="celebrate1"> <img src="./resources/confetti.gif" alt="Confetti" id="celebrate2"><button id="toInit">Inicio</button>';

      let playAgain = document.getElementById('toInit');
      playAgain.addEventListener('click', () => {
        location.reload();
      });

      return el;
    }
  }
  /* Desactivar el click de cada div de cartas */
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
  /* Desactivar el voltear las cartas, quita la clase flip */
  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  /* Hace reset del tablero cada vez que hay disable o unflip */
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 /* Agrega un eventListener a cada divs de cartas */
  setTimeout(function () {
    cards.forEach( () => addEventListener('click', flipCard))
  }, 500);
}; 


export { App, gamePage };