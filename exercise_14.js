// // Nota: 0.5/10

const multiplyText = (text, multiplier) => {
  let sortedText = '';
  while (multiplier > 0) {
    sortedText += text;
    multiplier--;
  }
  return sortedText;
};

console.log(multiplyText('test', 3));
