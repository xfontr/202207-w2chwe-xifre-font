import gameData from "../gameData.js";

const updateCell = (row, column, status) => {
  gameData.grid[row][column] = status;
  return `Updated cell at column ${column} and row ${row} with a status of ${
    status === 1 ? "alive" : "dead"
  }`;
};

export default updateCell;
