import gameData from "../gameData.js";
import updateCell from "../gridUpdater/updateGrid.js";
import gridReader from "../gridReader/gridReader.js";

const cellRules = (status, row, column, neighbours) => {
  if (neighbours < gameData.rules.minCellsToDie && status === 1) {
    updateCell(row, column, 0);
  }

  if (
    neighbours === gameData.rules.cellsToLive[0] ||
    (neighbours === gameData.rules.cellsToLive[1] && status === 1)
  ) {
    updateCell(row, column, 1);
  }

  if (neighbours === gameData.rules.cellsToBeBorn && status === 0) {
    updateCell(row, column, 1);
  }

  if (neighbours > gameData.rules.maxCellsToDie && status === 1) {
    updateCell(row, column, 0);
  }
};

const applyCellRules = () => {
  const cells = gridReader();

  cells.forEach((cell) => {
    cellRules(cell[0], cell[1], cell[2], cell[3]);
  });
};

export { applyCellRules };
