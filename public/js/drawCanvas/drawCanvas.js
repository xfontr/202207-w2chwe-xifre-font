import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { getUserInput, renderUserInput } from "../userInput/getUserInput.js";
import gridLine from "./gridLine.js";

const context = selectors.canvas.getContext("2d");
let isMouseDown = false;
let isMobile = false;

const canvasSetUp = () => {
  context.clearRect(0, 0, selectors.canvas.width, selectors.canvas.height);

  selectors.canvas.setAttribute("width", gameData.canvas.height());
  selectors.canvas.setAttribute("height", gameData.canvas.width());

  selectors.canvas.style.height = `${gameData.canvas.height()}px`;
  selectors.canvas.style.width = `${gameData.canvas.width()}px`;

  context.fillStyle = gameData.canvas.cellColor;

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

const getPosition = (event) => {
  const rect = selectors.canvas.getBoundingClientRect();
  if (isMobile) {
    return [
      curatePosition(event.touches[0].clientX - Math.floor(rect.left)),
      curatePosition(event.touches[0].clientY - Math.floor(rect.top)),
    ];
  }
  return [
    curatePosition(event.clientX - Math.floor(rect.left)),
    curatePosition(event.clientY - Math.floor(rect.top)),
  ];
};

const drawCanvas = (event) => {
  if (!gameData.canUserDraw || !isMouseDown) {
    return;
  }

  const cellSize = 10;
  const cellInnerSize = 4;

  context.beginPath();

  context.fillStyle = gameData.canvas.cellOutterColor;
  context.fillRect(
    getPosition(event)[0],
    getPosition(event)[1],
    cellSize,
    cellSize
  );

  context.fillStyle = gameData.canvas.cellInnerColor;
  context.fillRect(
    getPosition(event)[0] + 3,
    getPosition(event)[1] + 3,
    cellInnerSize,
    cellInnerSize
  );

  getUserInput(getPosition(event)[0], getPosition(event)[1]);

  context.fill();
};

const canvasEventListeners = () => {
  window.onmousemove = (event) => {
    isMobile = false;
    drawCanvas(event);
  };

  window.onmousedown = () => {
    isMouseDown = true;
    gameData.timer.isOn = false;
  };

  window.onmouseup = () => {
    isMouseDown = false;
    if (gameData.properties.hasBegun) {
      renderUserInput();
    }
    gameData.timer.isOn = true;
  };

  selectors.canvas.ontouchmove = (event) => {
    isMobile = true;
    drawCanvas(event);
  };

  window.ontouchstart = () => {
    isMouseDown = true;
    gameData.timer.isOn = false;
  };

  window.ontouchend = () => {
    isMouseDown = false;
    if (gameData.properties.hasBegun) {
      renderUserInput();
    }
    gameData.timer.isOn = true;
  };
};

export { canvasSetUp, drawCanvas, canvasEventListeners };
