import Game from "../modules/game";
import Player from "./player";

export function createPlayerGrid() {
  const gridContainer = document.createElement("section");
  gridContainer.classList.add("grid-container", "player");

  for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.setAttribute("id", `cell_${i}_${j}`);
      gridRow.appendChild(gridItem);
    }
    gridContainer.append(gridRow);
  }

  return gridContainer;
}

export function createAIGrid(ai, player, game) {
  const gridContainer = document.createElement("section");
  gridContainer.classList.add("grid-container", "ai");

  for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.setAttribute("id", `cell_${i}_${j}`);
      gridItem.addEventListener("click", (e) => {
        if (game.gameOver()) {
          return;
        } else if (player.makeAttack(ai, [j, i])) {
          gridItem.classList.add("hit");
          gridItem.style.backgroundColor = "red";
          gridItem.textContent = "!!!";
        } else {
          ai.makeAIAttack(player);
          gridItem.removeEventListener("click", e);
          gridItem.classList.add("miss");
        }
      });
      gridRow.appendChild(gridItem);
    }
    gridContainer.append(gridRow);
  }

  return gridContainer;
}
