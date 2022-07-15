const setWidth = (width) => {
  const newRow = [];
  let rowsLeft = width;

  do {
    newRow.push(0);
    rowsLeft -= 1;
  } while (rowsLeft > 0);

  return newRow;
};

const setGrid = (height, width) => {
  const newGrid = [];

  let columnsLeft = height;
  let rowContent;

  do {
    rowContent = setWidth(width);
    newGrid.push(rowContent);
    columnsLeft -= 1;
  } while (columnsLeft > 0);

  return newGrid;
};

export { setWidth, setGrid };
