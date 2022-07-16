import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import { timer } from "./gridUpdater/timer.js";
import { canvasSetUp } from "./drawCanvas/drawCanvas.js";
import { renderUserInput } from "./userInput/getUserInput.js";
import selectors from "./selectors.js";
import addEventListeners from "./userOptions/eventListeners.js";

const startGame = () => {
  renderUserInput();

  timer(gameData.timer.speed);
};

const main = () => {
  addEventListeners();
  selectors.gameStatus.addEventListener("click", function () {
    startGame();
    gameData.properties.hasBegun = true;
  });

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  canvasSetUp();
};

main();
