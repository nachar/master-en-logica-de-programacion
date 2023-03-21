// Nota: 1.5/10

const countOdds = (from, to) => {
  let odds = 0;
  for (let num = from; num <= to; num++) {
    if (num % 2 !== 0) odds++;
  }
  return odds;
};

console.log(countOdds(1, 100));
