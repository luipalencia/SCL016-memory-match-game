import pokemon from '../data/pokemon/pokemon.js';

/* const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.innerHTML = '<img src="./resources/pokemon.png" alt="Logo Pokemon" id="logo"><h1>Memorice</h1><h2>¿Estás listo para ser un entrenador Pokemón?</h2><h3>Selecciona con cuántos pares quieres jugar</h3><div class="difficulty"><img src="./resources/pokeball.png" alt="Tres pares de cartas" class="dificultad" id="easy"><img src="./resources/superball.png" alt="Seis pares de cartas"  class="dificultad" id="medium"><img src="./resources/ultraball.png" alt="Nueve pares de cartas"  class="dificultad" id="hard"></div><div class=""><img src="./resources/ash.gif" alt="" id="img-footer"></div>';

  return el;
}; */

const gamePage = () => {

  let node1 = document.querySelector('#pokemonCards');
  let text = document.createElement("h1");
  text.textContent = "¡Voltea las cartas para encontrar pares de tus Pokemones favoritos!";
  node1.appendChild(text);

  /*  let playAgain = document.getElementById('toInit');
   playAgain.addEventListener('click', () =>{
     location.reload();
   }); */

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
    pokemons.map(function (element, index) {
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

  const cards = document.querySelectorAll('.memory-card');

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

      el.innerHTML = '<img src="./resources/congrats.png" alt="" id="celebrate3"><img src="./resources/celebrate.gif" alt="Pokemones celebrando victoria" id="celebrate1"><button id="toInit">Inicio</button>';

      return el;
    }
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  setTimeout(function () {
    cards.forEach(card => addEventListener('click', flipCard))
  }, 500);
};


const congratsPage = () => {
  const el = document.createElement('div');

  el.className = 'congratsPage';
  el.innerHTML = '<img src="./resources/congrats.png" alt="" id="celebrate3"><img src="./resources/celebrate.gif" alt="Pokemones celebrando victoria" id="celebrate1"><button id="toInit">Inicio</button>';

  let playAgain = document.getElementById('toInit');
  playAgain.addEventListener('click', () => {
    location.reload();
  });

  return el;
};

export { gamePage, congratsPage };