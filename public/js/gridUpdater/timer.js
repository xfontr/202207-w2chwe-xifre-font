import applyCellRules from "../cellRules/cellRules.js";
import gameData from "../gameData.js";
import renderGrid from "../renderGrid/renderGrid.js";

const timer = (speed) => {
  gameData.timer.isOn = true;

  gameData.timer.setUp = setInterval(() => {
    if (gameData.timer.isOn) {
      gameData.timer.iterationCount += 1;
      applyCellRules();
      renderGrid();
    }
  }, speed);
};

const stopTimer = () => {
  gameData.timer.isOn = false;

  clearInterval(gameData.timer.setUp);
};

export { timer, stopTimer };
