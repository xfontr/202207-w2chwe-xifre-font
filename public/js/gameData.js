const gameData = {
  properties: {
    hasBegun: false,
  },

  grid: undefined,

  gridProperties: {
    width: 200,
    height: 200,
  },

  timer: {
    speed: 100,
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
  },

  canUserDraw: true,
  userDrawings: [],
};

export default gameData;
