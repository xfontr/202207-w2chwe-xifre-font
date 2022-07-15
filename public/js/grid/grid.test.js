import { setGrid } from "./grid.js";

describe("Given a function setGrid()", () => {
  describe("When it receives the values of 5 length for rows and columns", () => {
    test("It should return an array with 5 arrays with 5 values of 0 on each", () => {
      const expectedResult = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const receivedResult = setGrid(5, 5);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
