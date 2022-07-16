import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { canvasSetUp } from "../drawCanvas/drawCanvas.js";
import { setGrid } from "../grid/grid.js";

const increaseSize = () => {
  if (gameData.properties.hasBegun) {
    return;
  }

  gameData.gridProperties.height += 5;
  gameData.gridProperties.width += 5;

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  showSize();
  canvasSetUp();
};

const decreaseSize = () => {
  if (gameData.properties.hasBegun) {
    return;
  }

  gameData.gridProperties.height -= 5;
  gameData.gridProperties.width -= 5;

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  showSize();
  canvasSetUp();
};

const showSize = () => {
  selectors.currentSize.innerText = `Size: ${gameData.gridProperties.width} c.`;
};

export { increaseSize, decreaseSize, showSize };
