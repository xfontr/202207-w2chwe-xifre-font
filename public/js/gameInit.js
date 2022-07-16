import gameData from "./gameData.js";
import selectors from "./selectors.js";
import { setGrid } from "./grid/grid.js";
import { timer, stopTimer } from "./gridUpdater/timer.js";
import { canvasSetUp } from "./drawCanvas/drawCanvas.js";
import { renderUserInput } from "./userInput/getUserInput.js";
import addEventListeners from "./userOptions/eventListeners.js";

const startGame = () => {
  renderUserInput();

  timer(gameData.timer.speed);
  selectors.sizeBox.style = "opacity: 0.6";
};

const gameInit = () => {
  addEventListeners();

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  canvasSetUp();
};

const restartGame = () => {
  selectors.sizeBox.style = "opacity: 1";
  stopTimer();
  gameData.properties.hasBegun = false;

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  canvasSetUp();
};

export { startGame, restartGame, gameInit };
