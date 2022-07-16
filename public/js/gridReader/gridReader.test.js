import gameData from "../gameData.js";
import { setGrid } from "../grid/grid.js";
import updateCell from "../gridUpdater/updateGrid.js";
import gridReader from "./gridReader.js";

describe("Given a function gridReader()", () => {
  describe("When it's called and the grid has 3 alive cells", () => {
    test("Then it should return an array with each found cell and its properties", () => {
      gameData.gridProperties.height = 3;
      gameData.gridProperties.width = 3;
      gameData.grid = setGrid(
        gameData.gridProperties.width,
        gameData.gridProperties.height
      );

      updateCell(1, 1, 1);

      const expectedResult = [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 0, 2, 1],
        [0, 1, 0, 1],
        [1, 1, 1, 0],
        [0, 1, 2, 1],
        [0, 2, 0, 1],
        [0, 2, 1, 1],
        [0, 2, 2, 1],
      ];

      const receivedResult = gridReader();

      expect(receivedResult).toStrictEqual(expectedResult);
    });
  });
});
