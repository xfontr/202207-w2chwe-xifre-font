import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import timer from "./gridUpdater/timer.js";
import { canvasSetUp } from "./drawCanvas/drawCanvas.js";
import { renderUserInput } from "./userInput/getUserInput.js";

const startGame = () => {
  renderUserInput();

  timer(gameData.timer.speed);
};

const main = () => {
  const startGameButton = document.querySelector(".menu__start-game");
  startGameButton.addEventListener("click", function () {
    startGame();
    gameData.canUserDraw = false;
  });

  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );

  canvasSetUp();
};

main();
