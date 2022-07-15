import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";

const main = () => {
  const grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  gameData.grid = grid;
};

main();
