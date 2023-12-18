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

  gameOver(player1, player2) {
    if (
      player1.carrier.isSunk() &&
      player1.destroyer.isSunk() &&
      player1.cruiser.isSunk() &&
      player1.submarine.isSunk() &&
      player1.pboat.isSunk()
    ) {
      alert(player2.name + " wins!");
      return (player2.wins = true);
    } else if (
      player2.carrier.isSunk() &&
      player2.destroyer.isSunk() &&
      player2.cruiser.isSunk() &&
      player2.submarine.isSunk() &&
      player2.pboat.isSunk()
    ) {
      alert(player1.name + " wins!");
      return (player1.wins = true);
    } else {
      return false;
    }
  }
}
