import gameData from "../gameData.js";
import { getNeighbours } from "../cellRules/getNeighbours.js";

const readCell = (cell, row, column) => {
  if (cell === 1) {
    const neighbours = getNeighbours(row, column);
    return [row, column, neighbours];
  }

  return undefined;
};

const gridReader = () => {
  const cells = [];

  gameData.grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const currentCell = readCell(cell, rowIndex, columnIndex);
      if (currentCell) cells.push(currentCell);
    });
  });

  return cells;
};

export default gridReader;
