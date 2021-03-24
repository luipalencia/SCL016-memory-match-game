import { gamePage, congratsPage } from './components/App.js';



 let dificultades = document.getElementsByClassName('dificultad');
for (let i = 0; i < dificultades.length; i++) {
  dificultades[i].addEventListener('click', (event) => {
    switch (event.target.id) {
      case "easy":
        document.querySelector('#root').style.display = "none";
        document.querySelector('#gamePage').style.display = "block";
        gamePage();
        break;
      case "medium":
        document.querySelector('#root').style.display = "none";
        document.querySelector('#gamePage').style.display = "block";
        gamePage();
        break;
      case "hard":
      default:
        document.querySelector('#root').style.display = "none";
        document.querySelector('#congratsPage').style.display = "block";
        gamePage();
        break;
    }
  })
} 