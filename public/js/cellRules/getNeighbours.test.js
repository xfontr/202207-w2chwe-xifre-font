import { hasCollided, getNeighbours } from "./getNeighbours.js";
import { setGrid } from "../grid/grid.js";
import gameData from "../gameData.js";
import updateCell from "../gridUpdater/updateGrid.js";

describe("Given a function getNeighbours()", () => {
  describe("When it receives the arguments 3 and 3 in a 5x5 grid with 2 neighbour cells", () => {
    test("It should return '2'", () => {
      gameData.grid = setGrid(5, 5);
      updateCell(4, 4, 1);
      updateCell(3, 4, 1);

      const expectedResult = 2;
      const receivedResult = getNeighbours(3, 3);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a function hasCollided()", () => {
  describe("When it receives the arguments -1 and 0 in a 5x5 grid", () => {
    test("It should return the boolean true", () => {
      gameData.grid = setGrid(5, 5);

      const expectedResult = true;
      const receivedResult = hasCollided(-1, 0);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});
