import gameData from "./gameData.js";
import selectors from "./selectors.js";
import { setGrid } from "./grid/grid.js";
import setGridSize from "./grid/setGridSize.js";
import { timer, stopTimer } from "./gridUpdater/timer.js";
import { canvasSetUp, canvasEventListeners } from "./drawCanvas/drawCanvas.js";
import { renderUserInput } from "./userInput/getUserInput.js";
import { showSize } from "./userOptions/gridSize.js";

// eslint-disable-next-line import/no-cycle
import addEventListeners from "./userOptions/eventListeners.js";

const startGame = () => {
  renderUserInput();
  gameData.properties.hasBegun = true;

  timer(gameData.timer.speed);
  selectors.sizeBox.style = "opacity: 0.6";
};

const pauseOption = () => {
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

const gameStatus = () => {
  if (!gameData.properties.hasBegun) {
    startGame();
    selectors.gameStatus.innerHTML = '<i class="fa-solid fa-pause"></i>';
    return;
  }

  pauseOption();
};

const gameInit = () => {
  addEventListeners();
  canvasEventListeners();

  setGridSize();
  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  showSize();

  canvasSetUp();
};

const restartGame = () => {
  selectors.sizeBox.style = "opacity: 1";
  selectors.gameStatus.innerHTML = '<i class="fa-solid fa-play"></i>';

  stopTimer();
  gameData.properties.hasBegun = false;
  gameData.properties.isPaused = false;

  setGridSize();
  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  showSize();

  canvasSetUp();
};

export { startGame, restartGame, gameInit, gameStatus };
