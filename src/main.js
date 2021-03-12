import { App, gamePageEasy, gamePageMedium, gamePageHard, congratsPage } from './components/App.js';
import pokemon from '../data/pokemon/pokemon.js';


document.getElementById('root').appendChild(App());

let buttonToEasy = document.querySelector('#easy');
buttonToEasy.addEventListener("click", function () {

    document.querySelector('#root').style.display = "none";
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
            let imagen = document.createElement("img");
            imagen.className = "card-upside";
            imagen.style.background = element.bgColor;
            imagen.src = element.image;
            node.appendChild(imagen);
        })
    }
    generarPokemon(shuffleArray(pokemon.items));
    generarPokemon(shuffleArray(pokemon.items));
});

let buttonToMedium = document.querySelector('#medium');
buttonToMedium.addEventListener("click", function () {

    document.querySelector('#root').style.display = "none";
    document.querySelector('#gamePageMedium').appendChild(gamePageMedium());

});

let buttonToHard = document.querySelector('#hard');
buttonToHard.addEventListener("click", function () {

    document.querySelector('#root').style.display = "none";

});
