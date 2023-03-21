// Nota: 2/10
const clearText = (word) => {
  const cleanText = word.toLowerCase().replace(/[.,-]/gi, '');
  return cleanText.split(' ');
};
const countRepeatedWords = (text, word) => {
  const cleanText = clearText(text);
  return cleanText.reduce((repeated, currentWord) =>
    (currentWord === word) ? repeated + 1 : repeated
   , 0);
};

console.log(countRepeatedWords('Testing my function. testing something', 'testing'));
