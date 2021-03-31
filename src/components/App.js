import pokemon from '../data/pokemon/pokemon.js';

const App = () => {
  const initContent = document.createElement('div');
  
  initContent.className = 'initPage';
  initContent.innerHTML = '<img src="./resources/pokemon.png" alt="Logo Pokemon" class="logo"><img src="./resources/Memorice.png" alt="memorice" id="memorice-img"><img src="./resources/trainer.png" alt="¿quieres ser un entrenador pokemon?" id="trainer-img"><img src="./resources/select.png" alt="Selecciona la dificultad" id="select-img"><div class="difficultities"><img src="./resources/pokeball.png" alt="Tres pares de cartas" class="difficulty" id="easy"><img src="./resources/superball.png" alt="Seis pares de cartas" class="difficulty" id="medium"><img src="./resources/ultraball.png" alt="Nueve pares de cartas" class="difficulty" id="hard"></div><div><img src="./resources/ash.gif" alt="imagen de Ash y Pikachu" id="footer-img"></div>';
  
  return initContent;
}

const gamePage = () => {
  
  /* Genera el titulo */
  let nodeTitle = document.querySelector('.pokemonCards');
  let title = document.createElement("img");
  title.src = "./resources/voltearcartas.png";
  title.className = "instructions";
  nodeTitle.appendChild(title);
  
  /* Genera el boton de inicio */
  let playAgain = document.getElementById('startOverOne');
  playAgain.addEventListener('click', () => {
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
      let node = document.querySelector('.pokemonCards');
      let card = document.createElement("div");
      card.classList.add("memory-card", element.id);
      node.appendChild(card);
      let backside = document.createElement("img");
      backside.className = "card-backside";
      backside.src = element.image;
      backside.style.background = element.bgColor;
      let upside = document.createElement("img");
      upside.className = "card-upside";
      upside.src = "./resources/upside.png";
      card.appendChild(backside);
      card.appendChild(upside);
    })
    
  }
  generarPokemon(shuffleArray(pokemon.items));
  generarPokemon(shuffleArray(pokemon.items));
  
  /* Guardar cada par de cartas en una constante */
  const cards = document.querySelectorAll('.memory-card');
  
  /* Agrega un eventListener a cada divs de cartas */
  setTimeout(function () {
    cards.forEach(() => addEventListener('click', flipCard))
  }, 500);
  
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
    if (correct === 1) {
      document.querySelector('#gamePage').style.display = "none";
      document.querySelector('#congratsPage').style.display = "block";
      let toCongratsPage = document.querySelector('#congratsPage');
      
      toCongratsPage.innerHTML = '<img src="./resources/congrats.png" alt="" id="celebrate3"><img src="./resources/celebrate.gif" alt="Pokemones celebrando victoria" id="celebrate1"> <img src="./resources/confetti.gif" alt="Confetti" id="celebrate2"><button id="startOver">Inicio</button>';
      
      let playAgain = document.getElementById('startOver');
      playAgain.addEventListener('click', () => {
        location.reload();
      });
      
      return toCongratsPage;
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
};


export { App, gamePage };