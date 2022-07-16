import { applyCellRules } from "../cellRules/cellRules.js";
import gameData from "../gameData.js";
import gridReader from "../gridReader/gridReader.js";
import renderGrid from "../renderGrid/renderGrid.js";

const timer = (speed) => {
  setInterval(() => {
    if (gameData.timer.isOn) {
      gameData.timer.iterationCount += 1;
      applyCellRules();
      renderGrid();
    }
  }, speed);
};

export default timer;
