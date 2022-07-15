const setColumns = (columnLength, rowContent) => {
  const newGrid = [];
  let columnsLeft = columnLength;
  do {
    newGrid.push(rowContent);
    columnsLeft -= 1;
  } while (columnsLeft > 0);
  return newGrid;
};

const setRows = (rowLength) => {
  const newRow = [];
  let rowsLeft = rowLength;
  do {
    newRow.push(0);
    rowsLeft -= 1;
  } while (rowsLeft > 0);
  return newRow;
};

const setGrid = (rowLength, columnLength) => {
  const rowContent = setRows(rowLength);
  const newGrid = setColumns(columnLength, rowContent);

  return newGrid;
};

export { setColumns, setRows, setGrid };
