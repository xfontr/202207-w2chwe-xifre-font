import gameData from "../gameData.js";

const updateGrid = () => {};

const updateCell = (column, row, status) => {
  gameData.grid[column][row] = status;
  return `Updated cell at column ${column} and row ${row} with a status of ${
    status === 1 ? "alive" : "dead"
  }`;
};

export default updateCell;
