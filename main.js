import "./style.css";
import Player from "./modules/player";
import Game from "./modules/game";
import { createAIGrid, createPlayerGrid } from "./modules/DOMHandler";
const app = document.querySelector("#app");

const ai = new Player("tom", true);
const p1 = new Player("betty");

const game = new Game(p1, ai);

game.placeAIShips(ai);
game.placeAIShips(p1);

const p1grid = createPlayerGrid(p1);
const p2grid = createAIGrid(ai, p1);

app.append(p1grid, p2grid);

document.body.addEventListener("click", (e) => {
  game.gameOver();
  if (p1.wins) {
    alert("Player 1 wins!");
  } else if (ai.wins) {
    alert("Computer wins!");
  }
});
