// Nota: 2/10

const drawRow = (steps) => {
  let row = '';
  for (let step = 1; step <= steps; step++) {
    row += '[-]';
  }
  return row;
}
const createStair = (steps) => {
  let stair = '';
  for (let step = 1; step <= steps; step++) {
    stair += drawRow(step);
    stair += (step !== steps) ? '\n' : '';
  }
  return stair;
};

console.log(createStair(4));
