//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);
// //
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
//  fetch('./data/pokemon/pokemon.json')
//    .then(resp => resp.json())
//    .then(console.log)
//    .catch(console.error);

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.innerHTML = '<img src="./resources/pokemon.png" alt="Logo Pokemon" id="logo"><h1>Memorice</h1><h2>¿Estás listo para ser un entrenador Pokemón?</h2><h3>Selecciona con cuántos pares quieres jugar</h3><div id="difficulty"><img src="./resources/pokeball.png" alt="Tres pares de cartas" id="easy"><img src="./resources/superball.png" alt="Seis pares de cartas" id="medium"><img src="./resources/ultraball.png" alt="Nueve pares de cartas" id="hard"></div>';

  return el;
};

const gamePageEasy = () => {
  const el = document.createElement('div');

  el.className = 'gamePageEasy';
  el.innerHTML =  '<img src="./resources/carta.png" alt="Carta pokemon"></img> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon">';

  return el;
};

const gamePageMedium = () => {
  const el = document.createElement('div');

  el.className = 'gamePageMedium';
  el.innerHTML =  '<img src="./resources/carta.png" alt="Carta pokemon"></img> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"><img src="./resources/carta.png" alt="Carta pokemon"></img> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon">';

  return el;
};

const gamePageHard = () => {
  const el = document.createElement('div');

  el.className = 'gamePageHard';
  el.innerHTML =  '<img src="./resources/carta.png" alt="Carta pokemon"></img> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"><img src="./resources/carta.png" alt="Carta pokemon"></img> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"><img src="./resources/carta.png" alt="Carta pokemon"></img> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon"> <img src="./resources/carta.png" alt="Carta pokemon">';

  return el;
};
const congratsPage = () => {
  const el = document.createElement('div');

  el.className = 'congratsPage';
  el.innerHTML =  '<h4>Felicitaciones</h4><img src="./resources/celebrate.gif" alt="Pokemones celebrando victoria" id="celebrate1"><img src="./resources/confetti.gif" alt="Confetti" id="celebrate2">';

  return el;
};



export { App, gamePageEasy, gamePageMedium, gamePageHard, congratsPage };
