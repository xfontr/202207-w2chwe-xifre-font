const gameData = {
  grid: [],
  gridProperties: {
    width: 30,
    height: 30,
  },
  speed: 300,
};

const setColumns = (columnLength, rowContent) => {
  const newGrid = [];
  let columnsLeft = columnLength;
  do {
    newGrid.push(rowContent);
    columnsLeft -= 1;
  } while (columnsLeft > -1);
  return newGrid;
};

const setRows = (rowLength) => {
  const newRow = [];
  let rowsLeft = rowLength;
  do {
    newRow.push(0);
    rowsLeft -= 1;
  } while (rowsLeft > -1);
  return newRow;
};

const setGrid = () => {
  const rowLength = gameData.gridProperties.height;
  const columnLength = gameData.gridProperties.height;

  const rowContent = setRows(rowLength);
  const newGrid = setColumns(columnLength, rowContent);

  return newGrid;
};

console.log(setGrid());
