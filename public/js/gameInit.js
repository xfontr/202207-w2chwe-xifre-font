import gameData from "./gameData.js";
import selectors from "./selectors.js";
import { setGrid } from "./grid/grid.js";
import { timer, stopTimer } from "./gridUpdater/timer.js";
import { canvasSetUp } from "./drawCanvas/drawCanvas.js";
import { renderUserInput } from "./userInput/getUserInput.js";
import addEventListeners from "./userOptions/eventListeners.js";

const startGame = () => {
  renderUserInput();
  gameData.properties.hasBegun = true;

  timer(gameData.timer.speed);
  selectors.sizeBox.style = "opacity: 0.6";
};

const gameStatus = () => {
  if (!gameData.properties.hasBegun) {
    startGame();
    selectors.gameStatus.innerHTML = '<i class="fa-solid fa-pause"></i>';
    return;
  }
  if (gameData.properties.isPaused) {
    gameData.properties.isPaused = false;
    selectors.gameStatus.innerHTML = '<i class="fa-solid fa-pause"></i>';
    timer(gameData.timer.speed);
  } else {
    gameData.properties.isPaused = true;
    selectors.gameStatus.innerHTML = '<i class="fa-solid fa-play"></i>';
    stopTimer();
  }
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
  selectors.gameStatus.innerHTML = '<i class="fa-solid fa-play"></i>';

  stopTimer();
  gameData.properties.hasBegun = false;
  gameData.properties.isPaused = false;

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  canvasSetUp();
};

export { startGame, restartGame, gameInit, gameStatus };
