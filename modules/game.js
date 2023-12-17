export default class Game {
  constructor(player1, player2) {
    this.p1 = player1;
    this.p2 = player2;
  }

  placeAIShips(ai) {
    let ships = [ai.carrier, ai.cruiser, ai.destroyer, ai.submarine, ai.pboat];

    ships.forEach((ship) => {
      if (ship.start === null) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        ai.gameboard.placeShipH(ship, [x, y]);
      }
    });

    // check to make sure the ships are not null, if they are, try again
    ships.forEach((ship) => {
      if (ship.start === null) {
        this.placeAIShips(ai);
      } else {
        return;
      }
    });
  }

  gameOver(p1 = this.p1, p2 = this.p2) {
    if (
      p1.carrier.isSunk() &&
      p1.destroyer.isSunk() &&
      p1.cruiser.isSunk() &&
      p1.submarine.isSunk() &&
      p1.pboat.isSunk()
    ) {
      p1.wins = true;
      return true;
    } else if (
      p2.carrier.isSunk() &&
      p2.destroyer.isSunk() &&
      p2.cruiser.isSunk() &&
      p2.submarine.isSunk() &&
      p2.pboat.isSunk()
    ) {
      p2.wins = true;
      return true;
    } else {
      return false;
    }
  }
}
