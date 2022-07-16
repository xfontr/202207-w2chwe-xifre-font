import gameData from "../gameData.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const renderGrid = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  gameData.grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const cellSize = 10;
      if (cell === 1) {
        context.fillRect(columnIndex * 10, rowIndex * 10, cellSize, cellSize);
      }
    });
  });
};

export default renderGrid;
