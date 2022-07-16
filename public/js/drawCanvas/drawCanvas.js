import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { getUserInput, renderUserInput } from "../userInput/getUserInput.js";

const context = selectors.canvas.getContext("2d");
let isMouseDown = false;

const eventListeners = () => {
  window.onmousemove = function (e) {
    drawCanvas(e);
  };

  window.onmousedown = function () {
    isMouseDown = true;
    gameData.timer.isOn = false;
  };

  window.onmouseup = function () {
    isMouseDown = false;
    if (gameData.properties.hasBegun) {
      renderUserInput();
    }
    gameData.timer.isOn = true;
  };
};

const canvasSetUp = () => {
  selectors.canvas.setAttribute("width", gameData.canvas.height());
  selectors.canvas.setAttribute("height", gameData.canvas.width());
  context.fillStyle = gameData.canvas.cellColor;

  eventListeners();
};

const curatePosition = (position) => {
  let curatedNumber = position.toString();

  curatedNumber = curatedNumber.slice(0, -1);
  curatedNumber = `${curatedNumber}0`;

  return +curatedNumber;
};

const drawCanvas = (e) => {
  if (!gameData.canUserDraw || !isMouseDown) {
    return;
  }

  let rect = selectors.canvas.getBoundingClientRect();
  const cellSize = 10;

  context.beginPath();

  context.fillStyle = gameData.canvas.cellOutterColor;
  context.fillRect(
    curatePosition(e.clientX - rect.left),
    curatePosition(e.clientY - rect.top),
    cellSize,
    cellSize
  );

  context.fillStyle = gameData.canvas.cellInnerColor;
  context.fillRect(
    curatePosition(e.clientX - rect.left) + 3,
    curatePosition(e.clientY - rect.top) + 3,
    4,
    4
  );

  getUserInput(
    curatePosition(e.clientX - rect.left),
    curatePosition(e.clientY - rect.top)
  );

  context.fill();
};

export { canvasSetUp, drawCanvas };