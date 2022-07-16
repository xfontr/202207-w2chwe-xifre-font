import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { startGame, restartGame } from "../gameInit.js";
import { increaseSpeed, decreaseSpeed, showSpeed } from "./gameSpeed.js";
import { increaseSize, decreaseSize, showSize } from "./gridSize.js";

const statusButtons = () => {
  selectors.restartButton.addEventListener("click", () => {
    restartGame();
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

  selectors.gameStatus.addEventListener("click", function () {
    startGame();
    gameData.properties.hasBegun = true;
  });
};

export default addEventListeners;
