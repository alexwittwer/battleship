import Game from "../modules/game";
import Player from "./player";

export function createPlayerGrid(player) {
  const gridContainer = document.createElement("section");
  gridContainer.classList.add("grid-container", "player");

  for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item", `cell_${i}_${j}`);
      if (player.gameboard.board[i][j]) {
        gridItem.style.backgroundColor = "grey";
      }
      gridRow.appendChild(gridItem);
    }
    gridContainer.append(gridRow);
  }

  return gridContainer;
}

export function createAIGrid(ai, player) {
  const gridContainer = document.createElement("section");
  gridContainer.classList.add("grid-container", "ai");

  for (let i = 0; i < 10; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("row");
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item", `cell_${i}_${j}`);
      gridItem.addEventListener("click", (e) => {
        const x = i;
        const y = j;
        if (ai.gameboard.receiveAttack(x, y)) {
          const { x, y, hit } = ai.makeAIAttack(player);
          const playerBoard = document.querySelector(`.player .cell_${x}_${y}`);
          if (hit) {
            playerBoard.style.backgroundColor = "red"
          } else {
            playerBoard.style.backgroundColor = "lightblue"
          }
          gridItem.style.backgroundColor = "red";
        } else {
          const { x, y, hit } = ai.makeAIAttack(player);
          const playerBoard = document.querySelector(`.player .cell_${x}_${y}`);
          if (hit) {
            playerBoard.style.backgroundColor = "red"
          } else {
            playerBoard.style.backgroundColor = "blue"
          }
          gridItem.classList.add("miss");
        }
      });
      gridRow.appendChild(gridItem);
    }
    gridContainer.append(gridRow);
  }

  return gridContainer;
}
