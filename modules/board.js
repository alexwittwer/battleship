export default class Gameboard {
  constructor() {
    this.board = this.drawBoard();
  }

  drawBoard() {
    const board = [];
    const SIZE = 10;

    for (let i = 0; i < SIZE; i++) {
      board[i] = [];
      for (let j = 0; j < SIZE; j++) {
        board[i][j] = 0;
      }
    }

    return board;
  }

  placeShipV(ship, [x, y]) {
    const length = ship.length;
    if (length + x > 9) return;

    ship.start = x;
    ship.end = y;

    for (let i = x; i < length + x; i++) {
      this.board[i][y] = ship;
    }
  }

  placeShipH(ship, [x, y]) {
    const length = ship.length;
    if (length + y > 9) return;

    ship.start = x;
    ship.end = y;

    for (let i = y; i < length + y; i++) {
      this.board[x][i] = ship;
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] !== 0 && this.board[x][y] !== 1) {
      this.board[x][y].hit();
      this.board[x][y] = 1;
    } else {
      this.board[x][y] = 1;
    }
  }
}
