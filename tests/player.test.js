import { describe, it, expect, test } from "vitest";
import Player from "../modules/player";

test("player has name", () => {
  const p1 = new Player("Tom");

  expect(p1.name).toBe("Tom");
});

test("player has Carrier", () => {
  const p1 = new Player("test");

  expect(p1.carrier).toBeDefined();
});

test("player has Patrol Boat", () => {
  const p1 = new Player("test");

  expect(p1.pboat).toBeDefined();
});

test("player has Submarine", () => {
  const p1 = new Player("test");

  expect(p1.submarine).toBeDefined();
});

test("player has Destroyer", () => {
  const p1 = new Player("test");

  expect(p1.destroyer).toBeDefined();
});

test("player has Cruiser", () => {
  const p1 = new Player("test");

  expect(p1.cruiser).toBeDefined();
});

test("player ship can take damage", () => {
  const p1 = new Player("test");
  p1.carrier.hit();

  expect(p1.carrier.health).toBe(4);
});

test("player ship can be sunk", () => {
  const p1 = new Player("test");
  p1.pboat.hit();
  p1.pboat.hit();

  expect(p1.pboat.status).toBe("sunk");
});

test("player can attack other players", () => {
  const p1 = new Player("Tom");
  const p2 = new Player("Bartleby");

  p1.attack(p2, [0, 0]);

  expect(p2.board[0][0]).toBe(1);
});

describe.todo("player can hit other players ships");
describe.todo("player wins if other player has no more ships");
