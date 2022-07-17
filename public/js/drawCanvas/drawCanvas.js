import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { getUserInput, renderUserInput } from "../userInput/getUserInput.js";
import gridLine from "./gridLine.js";

const context = selectors.canvas.getContext("2d");
let isMouseDown = false;
let isMobile = false;

const eventListeners = () => {
  window.onmousemove = function (e) {
    isMobile = false;
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

  selectors.canvas.ontouchmove = function (e) {
    isMobile = true;
    drawCanvas(e);
  };

  window.ontouchstart = function () {
    isMouseDown = true;
    gameData.timer.isOn = false;
  };

  window.ontouchend = function () {
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
  let curatedNumber;

  if (isMobile) {
    curatedNumber = position.toFixed(0);
    curatedNumber = curatedNumber.toString();

    curatedNumber = curatedNumber.slice(0, -1);
    curatedNumber = `${curatedNumber}0`;
  } else {
    curatedNumber = position.toString();

    curatedNumber = curatedNumber.slice(0, -1);
    curatedNumber = `${curatedNumber}0`;
  }

  return +curatedNumber;
};

const getPosition = (e) => {
  const rect = selectors.canvas.getBoundingClientRect();
  if (isMobile) {
    return [
      curatePosition(e.touches[0].clientX - Math.floor(rect.left)),
      curatePosition(e.touches[0].clientY - Math.floor(rect.top)),
    ];
  } else {
    return [
      curatePosition(e.clientX - Math.floor(rect.left)),
      curatePosition(e.clientY - Math.floor(rect.top)),
    ];
  }
};

const drawCanvas = (e) => {
  if (!gameData.canUserDraw || !isMouseDown) {
    return;
  }

  const cellSize = 10;
  const cellInnerSize = 4;

  context.beginPath();

  context.fillStyle = gameData.canvas.cellOutterColor;
  context.fillRect(getPosition(e)[0], getPosition(e)[1], cellSize, cellSize);

  context.fillStyle = gameData.canvas.cellInnerColor;
  context.fillRect(
    getPosition(e)[0] + 3,
    getPosition(e)[1] + 3,
    cellInnerSize,
    cellInnerSize
  );

  getUserInput(getPosition(e)[0], getPosition(e)[1]);

  context.fill();
};

export { canvasSetUp, drawCanvas };
