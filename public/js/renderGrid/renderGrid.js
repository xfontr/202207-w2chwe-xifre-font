import gameData from "../gameData.js";
import selectors from "../selectors.js";
import gridLine from "../drawCanvas/gridLine.js";

const context = selectors.canvas.getContext("2d");

const paintCell = (rowIndex, columnIndex) => {
  const cellSize = 10;

  context.fillStyle = gameData.canvas.cellOutterColor;
  context.fillRect(columnIndex * 10, rowIndex * 10, cellSize, cellSize);

  context.fillStyle = gameData.canvas.cellInnerColor;
  context.fillRect(columnIndex * 10 + 3, rowIndex * 10 + 3, 4, 4);
};

const render = (grid) => {
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 1) {
        paintCell(rowIndex, columnIndex);

        gameData.properties.totalAliveCells += 1;
        gameData.properties.aliveCells += 1;
      }
    });
  });
};

const clearCanvas = () =>
  context.clearRect(0, 0, selectors.canvas.width, selectors.canvas.height);

const displayData = (deathCells) => {
  selectors.showAliveCells.innerText = `Alive: ${gameData.properties.aliveCells} c. | Generations ${gameData.timer.iterationCount} | Difference: ${deathCells} c.`;
};

const renderGrid = (grid = gameData.grid) => {
  let deathCells = gameData.properties.aliveCells;
  gameData.properties.aliveCells = 0;

  clearCanvas();
  render(grid);
  if (gameData.canvas.hasGrid) gridLine();

  deathCells = gameData.properties.aliveCells - deathCells;
  displayData(deathCells);
};

export default renderGrid;
