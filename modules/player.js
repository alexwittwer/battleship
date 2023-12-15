import Ship from "../modules/ship";
import Gameboard from "../modules/board";

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
  }

  makeAIAttack(player) {
    if (this.ai === false) return;
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
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
      this.makeAIAttack(player);
    } else {
      player.gameboard.receiveAttack(x, y);
      console.log(x, y);
    }
  }
}
