import { App, gamePage } from './components/App.js';

let homePage = App();
let nodoHome = document.querySelector('#root');
nodoHome.appendChild(homePage);

let difficulties = document.getElementsByClassName('difficulty');
for (let i = 0; i < difficulties.length; i++) {
  difficulties[i].addEventListener('click', (event) => {
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