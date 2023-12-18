import Ship from "../modules/ship";
import Gameboard from "../modules/board";
import Game from "../modules/game";

export default class Player {
  constructor(name, ai = false) {
    this.name = name;
    this.ai = ai;
    this.carrier = new Ship(5, "Carrier");
    this.destroyer = new Ship(4, "Destroyer");
    this.cruiser = new Ship(3, "Cruiser");
    this.submarine = new Ship(3, "Submarine");
    this.pboat = new Ship(2, "Patrol Boat");
    this.gameboard = new Gameboard();
    this.wins = false;
  }

  makeAIAttack(player) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    let hit = false
    if (
      player.carrier.isSunk() &&
      player.destroyer.isSunk() &&
      player.cruiser.isSunk() &&
      player.submarine.isSunk() &&
      player.pboat.isSunk()
    ) {
      return console.log(`${player.name} has no more ships!`);
    }

    if (player.gameboard.board[x][y] === 1) {
      return this.makeAIAttack(player);
    } else {
      if (player.gameboard.board[x][y]) {
        hit = true
      }
      player.gameboard.receiveAttack(x, y);
      return { x, y, hit};
    }
  }
}
