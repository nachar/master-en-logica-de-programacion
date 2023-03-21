// Nota: 1/10
const reverseText = (text) => {
  const characters = text.split('');
  let reverseWord = '';
  for (let i = characters.length - 1; i >= 0; i--) {
    reverseWord += characters[i];
  }
  return reverseWord;
};

const reverseCourseSolution = (text) => {
  let reverseWord = '';
  for (let char of text) {
    reverseWord = char + reverseWord;
  }
  return reverseWord;
};

console.log(reverseText('crocodile'));
console.log(reverseCourseSolution('crocodile'));

