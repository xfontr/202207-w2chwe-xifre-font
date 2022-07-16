const gameData = {
  grid: undefined,
  gridProperties: {
    width: 100,
    height: 100,
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
  canvas: {
    width() {
      return gameData.gridProperties.width * 10;
    },
    height() {
      return gameData.gridProperties.height * 10;
    },
    cellColor: "rgb(150, 10, 50)",
  },
  canUserDraw: true,
};

export default gameData;
