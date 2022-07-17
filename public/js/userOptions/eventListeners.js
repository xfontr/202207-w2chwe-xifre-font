import selectors from "../selectors.js";
import { increaseSpeed, decreaseSpeed, showSpeed } from "./gameSpeed.js";
import { increaseSize } from "./gridSize.js";
import gameData from "../gameData.js";
import renderGrid from "../renderGrid/renderGrid.js";

// eslint-disable-next-line import/no-cycle
import { restartGame, gameStatus } from "../gameInit.js";

const statusButtons = () => {
  selectors.restartButton.addEventListener("click", () => {
    restartGame();
  });

  selectors.gameStatus.addEventListener("click", () => {
    gameStatus();
  });
};

const speedSetUp = () => {
  selectors.slowGame.addEventListener("click", () => {
    decreaseSpeed();
  });

  selectors.speedUpGame.addEventListener("click", () => {
    increaseSpeed();
  });

  showSpeed();
};

const gridSetUp = () => {
  selectors.increaseGridSize.addEventListener("click", () => {
    increaseSize(true);
  });

  selectors.decreaseGridSize.addEventListener("click", () => {
    increaseSize(false);
  });
};

const gridDisplay = () => {
  selectors.showGridLines.addEventListener("change", () => {
    gameData.canvas.hasGrid = !!selectors.showGridLines.checked;
    renderGrid();
  });
};

const addEventListeners = () => {
  speedSetUp();
  gridSetUp();
  statusButtons();
  gridDisplay();
};

export default addEventListeners;
