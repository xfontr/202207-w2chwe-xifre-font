const selectors = {
  canvas: document.querySelector("canvas"),
  gameStatus: document.querySelector(".menu__game-status"),
  restartButton: document.querySelector(".menu__game-restart"),

  slowGame: document.querySelector(".menu__slow-game"),
  speedUpGame: document.querySelector(".menu__speed-up-game"),
  currentSpeed: document.querySelector(".menu__current-speed"),

  sizeBox: document.querySelector(".menu__grid-size-container"),
  increaseGridSize: document.querySelector(".menu__increase-size"),
  decreaseGridSize: document.querySelector(".menu__decrease-size"),
  currentSize: document.querySelector(".menu__current-size"),

  showGridLines: document.querySelector(".menu__grid-display"),
};

export default selectors;
