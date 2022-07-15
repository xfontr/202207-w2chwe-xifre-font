import gameData from "../gameData.js";
import updateGrid from "./updateGrid.js";

const timer = (speed) => {
  setInterval(() => {
    if (gameData.timer.isOn) {
      updateGrid();
      gameData.timer.iterationCount += 1;
    }
  }, speed);
};

export default timer;
