import gameData from "../gameData.js";
import { setGrid } from "../grid/grid.js";
import updateCell from "../gridUpdater/updateGrid.js";
import gridReader from "./gridReader.js";

describe("Given a function gridReader()", () => {
  describe("When it's called and the grid has 3 alive cells", () => {
    test("Then it should return an array with each found cell and its properties", () => {
      gameData.grid = setGrid(10, 10);
      updateCell(1, 1, 1);
      updateCell(4, 4, 1);
      updateCell(6, 6, 1);

      const expectedResult = [
        [1, 1, 0],
        [4, 4, 0],
        [6, 6, 0],
      ];
      const receivedResult = gridReader();

      expect(receivedResult).toStrictEqual(expectedResult);
    });
  });
});
