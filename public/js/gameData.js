const gameData = {
  grid: undefined,
  gridProperties: {
    width: 3,
    height: 3,
  },
  timer: {
    speed: 1000,
    isOn: true,
    iterationCount: 1,
  },
  rules: {
    minCellsToDie: 2,
    maxCellsToDie: 3,
    cellsToLive: [2, 3],
    cellsToBeBorn: 3,
  },
};

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

export default gameData;
