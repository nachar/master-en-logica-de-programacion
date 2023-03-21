// Nota: 1/10
const palindrome = (word) => {
  const reverseWord = word.split('').reverse().join('');
  return word === reverseWord;
};


console.log(palindrome('otto'));
