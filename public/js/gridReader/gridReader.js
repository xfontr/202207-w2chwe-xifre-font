import gameData from "../gameData.js";
import { getNeighbours } from "../cellRules/getNeighbours.js";

const readCell = (cell, row, column) => {
  const neighbours = getNeighbours(row, column);
  return [cell, row, column, neighbours];
};

const gridReader = () => {
  const cells = [];

  gameData.grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const currentCell = readCell(cell, rowIndex, columnIndex);
      cells.push(currentCell);
    });
  });

  return cells;
};

export default gridReader;
