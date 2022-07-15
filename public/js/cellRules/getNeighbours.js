import gameData from "../gameData.js";

const neighboursAxisY = (row, column, rowPosition) => {
  let totalValue = 0;
  let position = -1;

  do {
    if (rowPosition === 0 && position === 0) {
      position += 1;
    } else {
      totalValue += gameData.grid[row + rowPosition][column + position];
      position += 1;
    }
  } while (position < 2);

  return totalValue;
};

const neighboursAxisX = (row, column) => {
  let position = -1;
  let totalValue = 0;

  do {
    totalValue += neighboursAxisY(row, column, position);
    position += 1;
  } while (position < 2);

  return totalValue;
};

const getNeighbours = (row, column) => neighboursAxisX(row, column);

export default getNeighbours;
