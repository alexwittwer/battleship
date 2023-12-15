import Player from "../modules/player";
import { test, expect } from "vitest";

test("can place ship on board horizontally", () => {
  const p1 = new Player("tom");

  p1.gameboard.placeShipH(p1.carrier, [0, 0]);

  expect(p1.gameboard.board[0][0]).toBe(p1.carrier);
  expect(p1.gameboard.board[0][1]).toBe(p1.carrier);
  expect(p1.gameboard.board[0][2]).toBe(p1.carrier);
  expect(p1.gameboard.board[0][3]).toBe(p1.carrier);
  expect(p1.gameboard.board[0][4]).toBe(p1.carrier);
  expect(p1.gameboard.board[0][5]).toBe(0);
});

test("can place ship on board vertically", () => {
  const p1 = new Player("tom");

  p1.gameboard.placeShipV(p1.carrier, [0, 0]);

  expect(p1.gameboard.board[0][0]).toBe(p1.carrier);
  expect(p1.gameboard.board[1][0]).toBe(p1.carrier);
  expect(p1.gameboard.board[2][0]).toBe(p1.carrier);
  expect(p1.gameboard.board[3][0]).toBe(p1.carrier);
  expect(p1.gameboard.board[4][0]).toBe(p1.carrier);
  expect(p1.gameboard.board[5][0]).toBe(0);
});

test("unable to place ships out of bounds horizontally", () => {
  const p1 = new Player("tom");

  p1.gameboard.placeShipH(p1.carrier, [6, 6]);

  expect(p1.gameboard.board[6][6]).toBe(0);
  expect(p1.gameboard.board[6][7]).toBe(0);
  expect(p1.gameboard.board[6][8]).toBe(0);
  expect(p1.gameboard.board[6][9]).toBe(0);
  expect(p1.gameboard.board[6][10]).toBe(undefined);
});

test("unable to place ships out of bounds vertically", () => {
  const p1 = new Player("tom");

  p1.gameboard.placeShipV(p1.carrier, [6, 6]);

  expect(p1.gameboard.board[6][6]).toBe(0);
  expect(p1.gameboard.board[7][6]).toBe(0);
  expect(p1.gameboard.board[8][6]).toBe(0);
  expect(p1.gameboard.board[9][6]).toBe(0);
  expect(p1.gameboard.board[10]).toBe(undefined);
});

test("ship can receive attack", () => {
  const p1 = new Player("tom");

  p1.gameboard.placeShipV(p1.carrier, [0, 0]);
  p1.gameboard.receiveAttack(0, 0);
  p1.gameboard.receiveAttack(1, 0);

  expect(p1.carrier.health).toBe(3);
});

test("attacked ship sinks", () => {
  const p1 = new Player("tom");
  p1.gameboard.placeShipV(p1.pboat, [0, 0]);
  p1.gameboard.receiveAttack(0, 0);
  p1.gameboard.receiveAttack(1, 0);

  expect(p1.pboat.status).toBe("sunk");
});

test("misses update board", () => {
  const p1 = new Player("tom");
  p1.gameboard.placeShipV(p1.pboat, [0, 0]);
  p1.gameboard.receiveAttack(0, 0);
  p1.gameboard.receiveAttack(0, 1);

  expect(p1.pboat.status).toBe("alive");
  expect(p1.gameboard.board[0][0]).toBe(1);
});

test("ship updated start and end", () => {
  const p1 = new Player("tom");
  p1.gameboard.placeShipV(p1.carrier, [0, 0]);
  p1.gameboard.placeShipV(p1.pboat, [4, 4]);

  expect(p1.carrier.start).toStrictEqual([0, 0]);
  expect(p1.carrier.end).toStrictEqual([0, 4]);
  expect(p1.pboat.start).toStrictEqual([4, 4]);
  expect(p1.pboat.end).toStrictEqual([4, 5]);
});

test("unable to place ship on top of ship", () => {
  const p1 = new Player("tom");
  p1.gameboard.placeShipV(p1.carrier, [0, 0]);
  p1.gameboard.placeShipV(p1.pboat, [0, 0]);

  expect(p1.pboat.start).toBe(null);
  expect(p1.pboat.end).toBe(null);
  expect(p1.carrier.start).toStrictEqual([0, 0]);
});
