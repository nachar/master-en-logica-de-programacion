// Nota: 1/10
const reverseNumber = (num) => {
  return parseInt(num
    .toString()
    .split('')
    .reverse()
    .join('')) * Math.sign(num);
};

console.log(reverseNumber(67));
