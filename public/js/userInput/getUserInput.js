import gameData from "../gameData.js";
import renderGrid from "../renderGrid/renderGrid.js";
import updateCell from "../gridUpdater/updateGrid.js";
import { hasCollided } from "../cellRules/getNeighbours.js";

const renderUserInput = () => {
  gameData.userDrawings.forEach((paintedCell) => {
    updateCell(paintedCell[0], paintedCell[1], 1);
  });

  renderGrid();
  gameData.userDrawings = [];
};

const getUserInput = (positionX, positionY) => {
  const row = positionY / 10;
  const column = positionX / 10;

  if (!hasCollided(row, column)) {
    gameData.userDrawings.push([row, column]);
  }
};

export { getUserInput, renderUserInput };
