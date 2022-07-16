import gameData from "../gameData.js";
import selectors from "../selectors.js";

const context = selectors.canvas.getContext("2d");

const renderGrid = (grid = gameData.grid) => {
  context.clearRect(0, 0, selectors.canvas.width, selectors.canvas.height);

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellSize = 10;
      if (cell === 1) {
        context.fillStyle = gameData.canvas.cellOutterColor;
        context.fillRect(columnIndex * 10, rowIndex * 10, cellSize, cellSize);
        context.fillStyle = gameData.canvas.cellInnerColor;
        context.fillRect(columnIndex * 10 + 3, rowIndex * 10 + 3, 4, 4);
      }
    });
  });
};

export default renderGrid;
