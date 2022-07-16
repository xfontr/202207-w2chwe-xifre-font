import gameData from "../gameData.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const canvasSetUp = () => {
  canvas.setAttribute("width", gameData.canvas.height());
  canvas.setAttribute("height", gameData.canvas.width());
  context.fillStyle = gameData.canvas.cellColor;

  window.onmousemove = function (e) {
    drawCanvas(e);
  };
};

const curatePosition = (position) => {
  let curatedNumber = position.toString();

  curatedNumber = curatedNumber.slice(0, -1);
  curatedNumber = `${curatedNumber}0`;

  return +curatedNumber;
};

const drawCanvas = (e) => {
  let rect = canvas.getBoundingClientRect();
  const cellSize = 10;

  context.beginPath();

  context.fillRect(
    curatePosition(e.clientX - rect.left),
    curatePosition(e.clientY - rect.top),
    cellSize,
    cellSize
  );

  context.fill();
};

export { canvasSetUp, drawCanvas };
