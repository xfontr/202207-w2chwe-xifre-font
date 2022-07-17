import selectors from "../selectors.js";
import { restartGame, gameStatus } from "../gameInit.js";
import { increaseSpeed, decreaseSpeed, showSpeed } from "./gameSpeed.js";
import { increaseSize, decreaseSize, showSize } from "./gridSize.js";
import gameData from "../gameData.js";
import renderGrid from "../renderGrid/renderGrid.js";

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
    increaseSize();
  });

  selectors.decreaseGridSize.addEventListener("click", () => {
    decreaseSize();
  });
};

const gridDisplay = () => {
  selectors.showGridLines.addEventListener("change", () => {
    gameData.canvas.hasGrid = selectors.showGridLines.checked ? true : false;
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
