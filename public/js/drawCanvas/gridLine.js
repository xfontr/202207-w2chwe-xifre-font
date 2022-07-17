import gameData from "../gameData.js";
import selectors from "../selectors.js";

const context = selectors.canvas.getContext("2d");

const horizontalLines = (initialPosition, nextLocation) => {
  context.lineTo(nextLocation, initialPosition);
  context.moveTo(nextLocation, gameData.canvas.height());
};

const verticalLines = (initialPosition, nextLocation) => {
  context.lineTo(initialPosition, nextLocation);
  context.moveTo(gameData.canvas.width(), nextLocation);
};

const paintLine = (width = 0.4) => {
  context.lineWidth = width;
  context.strokeStyle = gameData.canvas.gridColor;
  context.stroke();
};

const drawLines = (axis, spacing, initialPosition) => {
  let linesLeft = axis ? gameData.canvas.width() : gameData.canvas.height();
  linesLeft /= spacing;

  let nextLocation = 0;
  context.beginPath();
  do {
    if (axis) {
      horizontalLines(initialPosition, nextLocation);
    } else {
      verticalLines(initialPosition, nextLocation);
    }

    nextLocation += spacing;
    linesLeft -= 1;
  } while (linesLeft > 0);

  paintLine();
};

const gridLine = () => {
  const spacing = 9.5;
  const initialPosition = 1;

  drawLines(true, spacing, initialPosition);
  drawLines(false, spacing, initialPosition);
};

export default gridLine;
