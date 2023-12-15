import "./style.css";
import Player from "./modules/player";

const p1 = new Player("tom", true);
const p2 = new Player("betty");

p2.gameboard.placeShipH(p2.carrier, [0, 0]);
p2.gameboard.placeShipH(p2.cruiser, [1, 0]);
p2.gameboard.placeShipH(p2.destroyer, [2, 0]);
p2.gameboard.placeShipH(p2.submarine, [3, 0]);
p2.gameboard.placeShipH(p2.pboat, [4, 0]);

console.log(p2.gameboard.board);
