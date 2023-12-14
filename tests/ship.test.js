import { expect, test } from "vitest";
import Ship from "../modules/ship";

test("ship has health", () => {
  const ship = new Ship(5, "Carrier");
  expect(ship.health).toBe(5);
});

test("ship has length", () => {
  const ship = new Ship(4, "Destroyer");
  expect(ship.length).toBe(4);
});

test("ship is alive at creation", () => {
  const newship = new Ship(3, "Submarine");
  expect(newship.status).toBe("alive");
});

test("ship registers hit", () => {
  const ship = new Ship(2, "Patrol Boat");
  ship.hit();
  expect(ship.health).toBe(1);
});

test("ship sinks after final hit", () => {
  const ship = new Ship(2, "Patrol Boat");
  ship.hit();
  ship.hit();
  expect(ship.status).toBe("sunk");
});

test("ship has ID", () => {
  const ship = new Ship(2, "Patrol Boat");

  expect(ship.id).toBe("Patrol Boat");
});
