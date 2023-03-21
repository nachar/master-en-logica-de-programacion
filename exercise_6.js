// Nota: 3/10

const drawFullRow = (sides) => {
  let row = '';
  for (let i = 1; i <= sides; i++) {
    row += '*';
  }
  return row;
};

const drawSimpleRow = (sides) => {
  let row = '';
  for (let i = 1; i <= sides; i++) {
    row += (i === 1 || i === sides) ? '*' : ' ';
  }
  return row;
}
const drawSquare = (sides) => {
  let square = '';
  for (let i = 1; i <= sides; i++) {
    square += (i === 1 || i === sides) ? drawFullRow(sides) : drawSimpleRow(sides);
    square += (i !== sides) ? '\n' : '';
  }
  return square;
}

console.log(drawSquare(8));
