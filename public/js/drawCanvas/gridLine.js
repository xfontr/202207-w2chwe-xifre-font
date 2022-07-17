import gameData from "../gameData.js";
import selectors from "../selectors.js";

const context = selectors.canvas.getContext("2d");

const drawVerticalLines = (spacing, initialPosition) => {
  let linesLeft = gameData.canvas.height() / spacing;
  let nextLocation = 0;

  context.beginPath();

  do {
    context.lineTo(nextLocation, initialPosition);
    context.moveTo(nextLocation, gameData.canvas.height());

    nextLocation += spacing;
    linesLeft -= 1;
  } while (linesLeft > 0);

  context.lineWidth = 1;
  context.strokeStyle = gameData.canvas.gridColor;
  context.stroke();
};

const drawHorizontalLines = (spacing, initialPosition) => {
  let linesLeft = gameData.canvas.width() / spacing;
  let nextLocation = 0;

  context.beginPath();

  do {
    context.lineTo(initialPosition, nextLocation);
    context.moveTo(gameData.canvas.width(), nextLocation);

    nextLocation += spacing;
    linesLeft -= 1;
  } while (linesLeft > 0);

  context.lineWidth = 0.4;
  context.strokeStyle = gameData.canvas.gridColor;
  context.stroke();
};

const gridLine = () => {
  const spacing = 9.5;
  const initialPosition = 1;

  drawVerticalLines(spacing, initialPosition);
  drawHorizontalLines(spacing, initialPosition);
};

export default gridLine;
