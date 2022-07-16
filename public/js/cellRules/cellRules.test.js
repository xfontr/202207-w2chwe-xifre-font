import gameData from "../gameData.js";
import { applyCellRules } from "./cellRules.js";
import updateCell from "../gridUpdater/updateGrid.js";
import { setGrid } from "../grid/grid.js";

describe("Given a function applyCellRules()", () => {
  describe("When there's a 6x6 grid with 3 cells", () => {
    test("With the first iteration the grid should update aplying the rules to the cells", () => {
      gameData.gridProperties.height = 6;
      gameData.gridProperties.width = 6;
      gameData.grid = setGrid(
        gameData.gridProperties.width,
        gameData.gridProperties.height
      );

      updateCell(0, 0, 1);
      updateCell(0, 1, 1);
      updateCell(0, 2, 1);
      updateCell(0, 3, 1);

      const expectedResult = [
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];

      applyCellRules();
      const receivedResult = gameData.grid;

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
