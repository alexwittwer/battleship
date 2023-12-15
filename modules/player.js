import Ship from "../modules/ship";
import Gameboard from "../modules/board";

export default class Player {
  constructor(name) {
    this.name = name;
    this.carrier = new Ship(5, "Carrier");
    this.destroyer = new Ship(4, "Destroyer");
    this.cruiser = new Ship(3, "Cruiser");
    this.submarine = new Ship(3, "Submarine");
    this.pboat = new Ship(2, "Patrol Boat");
    this.gameboard = new Gameboard();
  }
}
