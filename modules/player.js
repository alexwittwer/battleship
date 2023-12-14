import Ship from "../modules/ship";
import Board from "../modules/board";

export default class Player {
  constructor(name) {
    this.name = name;
    this.carrier = new Ship(5, "Carrier");
    this.destroyer = new Ship(4, "Destroyer");
    this.cruiser = new Ship(3, "Cruiser");
    this.submarine = new Ship(3, "Submarine");
    this.pboat = new Ship(2, "Patrol Boat");
    this.board = this.drawBoard();
  }

  drawBoard() {
    const board = [];
    const SIZE = 12;

    for (let i = 0; i < SIZE; i++) {
      board[i] = [];
      for (let j = 0; j < SIZE; j++) {
        board[i][j] = 0;
      }
    }

    return board;
  }

  attack(player, [x, y]) {
    return player.board[x][y] === 0
      ? (player.board[x][y] = 1)
      : Error("Already attacked this position!");
  }
}
