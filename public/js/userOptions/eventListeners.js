import selectors from "../selectors.js";
import { increaseSpeed, decreaseSpeed, showSpeed } from "./gameSpeed.js";

const speedSetUp = () => {
  selectors.slowGame.addEventListener("click", () => {
    decreaseSpeed();
  });

  selectors.speedUpGame.addEventListener("click", () => {
    increaseSpeed();
  });

  showSpeed();
};

const addEventListeners = () => {
  speedSetUp();
};

export default addEventListeners;
