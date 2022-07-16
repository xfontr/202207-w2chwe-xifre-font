import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import updateCell from "./gridUpdater/updateGrid.js";
import gridReader from "./gridReader/gridReader.js";
import { applyCellRules } from "./cellRules/cellRules.js";
import timer from "./gridUpdater/timer.js";
import { canvasSetUp } from "./drawCanvas/drawCanvas.js";

const main = () => {
  canvasSetUp();
  gameData.gridProperties.height = 6;
  gameData.gridProperties.width = 6;
  gameData.grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  updateCell(0, 0, 1);
  updateCell(0, 1, 1);
  updateCell(0, 2, 1);
  updateCell(0, 3, 1);
  applyCellRules();
  console.log(gameData.grid);
  // timer(gameData.timer.speed);
};

main();
