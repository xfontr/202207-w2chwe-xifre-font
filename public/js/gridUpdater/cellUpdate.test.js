import gameData from "../gameData.js";
import updateCell from "./updateGrid.js";
import { setGrid } from "../grid/grid.js";

describe("Given a function updateCell()", () => {
  describe("When it receives the arguments 0, 0 and 1", () => {
    test("It should return 'Updated cell at column 0 and row 0 with a status of alive'", () => {
      gameData.grid = setGrid(2, 2);

      const expectedResult =
        "Updated cell at column 0 and row 0 with a status of alive";
      const receivedResult = updateCell(0, 0, 1);

      expect(receivedResult).toBe(expectedResult);
    });

    test("It should also change the column 0 and row 0 of the grid to 1", () => {
      gameData.grid = setGrid(2, 2);
      updateCell(0, 0, 1);

      const expectedResult = 1;

      expect(gameData.grid[0][0]).toBe(expectedResult);
    });
  });
});
