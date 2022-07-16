import selectors from "../selectors.js";
import { restartGame, gameStatus } from "../gameInit.js";
import { increaseSpeed, decreaseSpeed, showSpeed } from "./gameSpeed.js";
import { increaseSize, decreaseSize, showSize } from "./gridSize.js";

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

  showSize();
};

const addEventListeners = () => {
  speedSetUp();
  gridSetUp();
  statusButtons();
};

export default addEventListeners;
