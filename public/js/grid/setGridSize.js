import gameData from "../gameData.js";

const curateSize = (size) => {
  let curatedNumber = size.toString();

  curatedNumber = curatedNumber.slice(0, -1);

  return +curatedNumber;
};

const setGridSize = () => {
  const width = curateSize(window.innerWidth);
  const heigth = curateSize(window.innerHeight);
  const size = width > heigth ? width : heigth;

  gameData.gridProperties.width = size;
  gameData.gridProperties.height = size;

  return [width, heigth];
};

export default setGridSize;
