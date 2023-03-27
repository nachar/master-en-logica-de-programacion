const fibonacciSeries = (num) => {
  let fibonacci = [];
  for (let i = 0; i <= num; i++) {
    if (fibonacci.length >= 2) {
      fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1])
    } else fibonacci.push(i);
  }
  return fibonacci;
}

console.log(fibonacciSeries(10));
