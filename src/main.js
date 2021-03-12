// import App from './components/App.js';

import {App, gamePageEasy, gamePageMedium, gamePageHard, congratsPage} from './components/App.js';

document.getElementById('root').appendChild(App());


let buttonToEasy = document.querySelector('#easy');
buttonToEasy.addEventListener("click", function () {
    
    document.querySelector("#root").style.display = "none";
    document.querySelector('#gamePageEasy').appendChild(gamePageEasy());
});


let buttonToMedium = document.querySelector('#medium');
buttonToMedium.addEventListener("click", function () {
    
    document.querySelector("#root").style.display = "none";
    document.querySelector('#gamePageMedium').appendChild(gamePageMedium());

});

let buttonToHard = document.querySelector('#hard');
buttonToHard.addEventListener("click", function () {
    
    document.querySelector("#root").style.display = "none";
    document.querySelector('#gamePageHard').appendChild(gamePageHard());

});