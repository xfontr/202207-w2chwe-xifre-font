import gameData from "../gameData.js";
import {
  minCellsToDie,
  cellsToLive,
  cellsToBeBorn,
  maxCellsToDie,
  applyCellRules,
} from "./cellRules.js";
import updateCell from "../gridUpdater/updateGrid.js";
import { setGrid } from "../grid/grid.js";

describe("Given a function applyCellRules", () => {
  describe("When there's a 6x6 grid with 4 cells", () => {
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

describe("Given a function minCellsToDie", () => {
  describe("When there's a cell at 0-0 with 1 neighbour", () => {
    test("When sending the cell as an argument it should return true", () => {
      const expectedResult = true;
      const receivedResult = minCellsToDie(0, 0, 1);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a function cellsToLive", () => {
  describe("When there's a cell at 0-2 with 3 neighbours and status of alive", () => {
    test("When sending the cell as an argument it should return true", () => {
      const expectedResult = true;
      const receivedResult = cellsToLive(1, 0, 2, 3);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a function cellsToBeBorn", () => {
  describe("When there's a cell at 1-2 with 3 neighbours", () => {
    test("When sending the cell as an argument, it should return true", () => {
      const expectedResult = true;
      const receivedResult = cellsToBeBorn(1, 2, 3);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a function maxCellsToDie", () => {
  describe("When there's a cell at 0-2 with 3 neighbours and status of alive", () => {
    test("When sending the cell as an argument it should return false", () => {
      const expectedResult = false;
      const receivedResult = maxCellsToDie(1, 0, 2, 3);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});
