import gameData from "../gameData.js";
import selectors from "../selectors.js";
import { timer, stopTimer } from "../gridUpdater/timer.js";

const showSpeed = () => {
  selectors.currentSpeed.innerText = `Speed ${(
    gameData.timer.speed / 1000
  ).toFixed(2)}s`;
};

const increaseSpeed = () => {
  if (gameData.timer.speed >= 25) {
    gameData.timer.speed -= 25;
    stopTimer();
    timer(gameData.timer.speed);
    showSpeed();
  }
};

const decreaseSpeed = () => {
  gameData.timer.speed += 25;
  stopTimer();
  timer(gameData.timer.speed);
  showSpeed();
};

export { increaseSpeed, decreaseSpeed, showSpeed };
