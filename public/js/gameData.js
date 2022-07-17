const gameData = {
  properties: {
    hasBegun: false,
    isPaused: false,
  },

  grid: undefined,

  gridProperties: {
    width: 50,
    height: 50,
  },

  timer: {
    setUp: undefined,
    speed: 200,
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

    cellOutterColor: "rgb(150, 10, 50)",
    cellInnerColor: "white",
    gridColor: "rgba(0, 0, 0, 0.3)",
  },

  canUserDraw: true,
  userDrawings: [],
};

export default gameData;
