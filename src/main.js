import { App, gamePage } from './components/App.js';

let variable = App();
let varia1 = document.querySelector('#root');
varia1.appendChild(variable);

let dificultades = document.getElementsByClassName('dificultad');
for (let i = 0; i < dificultades.length; i++) {
  dificultades[i].addEventListener('click', (event) => {
    switch (event.target.id) {
      case "easy":
        document.querySelector('#root').style.display = "none";
        document.querySelector('#gamePage').style.display = "table";
        gamePage();
        break;
      case "medium":
        document.querySelector('#root').style.display = "none";
        document.querySelector('#gamePage').style.display = "table";
        gamePage();
        break;
      case "hard":
      default:
        document.querySelector('#root').style.display = "none";
        document.querySelector('#gamePage').style.display = "table";
        gamePage();
        break;
    }
  })
}