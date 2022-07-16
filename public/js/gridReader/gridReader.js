import gameData from "../gameData.js";
import { getNeighbours } from "../cellRules/getNeighbours.js";

const readCell = (cell, row, column) => {
  console.log(`We are sending to neigbours row ${row} and column ${column}`);
  const neighbours = getNeighbours(row, column);
  return [cell, row, column, neighbours];
};

const gridReader = () => {
  const cells = [];

  gameData.grid.forEach((row, rowIndex) => {
    console.log(`ROWS. Row ${row} and index ${rowIndex}`);
    row.forEach((cell, columnIndex) => {
      console.log(`COLUMNS. Column ${columnIndex} and cell content ${cell}`);
      const currentCell = readCell(cell, rowIndex, columnIndex);
      cells.push(currentCell);
    });
  });

  return cells;
};

export default gridReader;
