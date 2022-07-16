import gameData from "./gameData.js";
import selectors from "./selectors.js";
import { setGrid } from "./grid/grid.js";
import { timer } from "./gridUpdater/timer.js";
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

export { startGame, gameInit };
