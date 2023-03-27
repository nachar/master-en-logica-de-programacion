const countVowel = (text) => {
  return text.match(/[aeiou]/gi) ? text.match(/[aeiou]/gi).length : 0;
};

console.log(countVowel('hassen nachar'));

