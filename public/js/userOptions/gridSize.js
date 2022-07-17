import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { canvasSetUp } from "../drawCanvas/drawCanvas.js";
import { setGrid } from "../grid/grid.js";

const showSize = () => {
  selectors.currentSize.innerText = `Size: ${gameData.gridProperties.width} c.`;
};

const sizeUp = (direction) => {
  const sizeIncrase = 5;

  gameData.gridProperties.height += direction ? sizeIncrase : -sizeIncrase;
  gameData.gridProperties.width += direction ? sizeIncrase : -sizeIncrase;
};

const increaseSize = (direction) => {
  if (gameData.properties.hasBegun) {
    return;
  }

  sizeUp(direction);

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  showSize();
  canvasSetUp();
};

export { increaseSize, showSize };
