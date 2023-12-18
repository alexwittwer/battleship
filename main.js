import "./style.css";
import Player from "./modules/player";
import Game from "./modules/game";
import { createAIGrid, createPlayerGrid } from "./modules/DOMHandler";
const app = document.querySelector("#app");

const p1 = new Player("The Admiral");
const ai = new Player("Computer");
const game = new Game(p1, ai);

game.placeAIShips(p1);
game.placeAIShips(ai);

const p1grid = createPlayerGrid(p1);
const p2grid = createAIGrid(ai, p1);

app.append(p1grid, p2grid);

document.body.addEventListener("click", (e) => {
  game.gameOver(p1, ai);
});
