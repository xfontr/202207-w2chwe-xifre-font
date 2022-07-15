import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import timer from "./gridUpdater/timer.js";
import updateCell from "./gridUpdater/updateGrid.js";
import getNeighbours from "./cellRules/getNeighbours.js";

const main = () => {
  const grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  gameData.grid = grid;
  updateCell(4, 4, 1);

  updateCell(5, 4, 1);
  updateCell(3, 4, 1);

  updateCell(4, 5, 1);
  updateCell(4, 3, 1);

  updateCell(5, 5, 1);
  updateCell(3, 3, 1);
  updateCell(3, 5, 1);
  updateCell(5, 3, 1);

  console.log(gameData.grid);
  console.log(getNeighbours(4, 4));
  // timer(gameData.timer.speed);
};

main();
