const dividers = (num, divider) => {
  return !(num % divider);
};

const printDividers = (num) => {
  for (let i = 1; i <= num; i++) {
    if (dividers(num, i)) console.log(i);
  }
}

printDividers(35);
