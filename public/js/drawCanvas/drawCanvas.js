import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { getUserInput, renderUserInput } from "../userInput/getUserInput.js";
import gridLine from "./gridLine.js";

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
  context.clearRect(0, 0, selectors.canvas.width, selectors.canvas.height);

  selectors.canvas.setAttribute("width", gameData.canvas.height());
  selectors.canvas.setAttribute("height", gameData.canvas.width());

  selectors.canvas.style.height = `${gameData.canvas.height()}px`;
  selectors.canvas.style.width = `${gameData.canvas.width()}px`;

  context.fillStyle = gameData.canvas.cellColor;

  eventListeners();
  gridLine();
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
    curatePosition(e.clientX - Math.floor(rect.left)),
    curatePosition(e.clientY - Math.floor(rect.top)),
    cellSize,
    cellSize
  );

  context.fillStyle = gameData.canvas.cellInnerColor;
  context.fillRect(
    curatePosition(e.clientX - Math.floor(rect.left)) + 3,
    curatePosition(e.clientY - Math.floor(rect.top)) + 3,
    4,
    4
  );

  getUserInput(
    curatePosition(e.clientX - Math.floor(rect.left)),
    curatePosition(e.clientY - Math.floor(rect.top))
  );

  context.fill();
};

export { canvasSetUp, drawCanvas };
