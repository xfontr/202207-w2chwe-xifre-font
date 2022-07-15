import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import timer from "./gridUpdater/timer.js";

const main = () => {
  const grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  gameData.grid = grid;

  timer(gameData.timer.speed);
};

main();
