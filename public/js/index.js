import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import updateCell from "./gridUpdater/updateGrid.js";
import gridReader from "./gridReader/gridReader.js";
import { applyCellRules } from "./cellRules/cellRules.js";
import timer from "./gridUpdater/timer.js";

const main = () => {
  gameData.gridProperties.height = 10;
  gameData.gridProperties.width = 10;
  const grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  gameData.grid = grid;
  console.log("Initial grid");
  updateCell(0, 0, 1);
  updateCell(0, 1, 1);
  updateCell(0, 2, 1);
  updateCell(0, 3, 1);
  updateCell(1, 2, 1);
  updateCell(2, 2, 1);
  updateCell(1, 0, 1);
  updateCell(1, 1, 1);

  timer(gameData.timer.speed);
};

main();
