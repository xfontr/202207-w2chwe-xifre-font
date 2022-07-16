import gameData from "./gameData.js";
import { setGrid } from "./grid/grid.js";
import updateCell from "./gridUpdater/updateGrid.js";
import gridReader from "./gridReader/gridReader.js";

const main = () => {
  gameData.gridProperties.height = 3;
  gameData.gridProperties.width = 3;
  const grid = setGrid(
    gameData.gridProperties.width,
    gameData.gridProperties.height
  );
  gameData.grid = grid;
  console.log(grid);
  updateCell(1, 1, 1);

  console.log(gridReader());
};

main();
