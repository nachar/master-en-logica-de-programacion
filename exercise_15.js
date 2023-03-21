// // Nota: 2/10

const mostRepeated = (word) => {
  const counter = {};
  word.split('').forEach((char) => {
    counter[char] = (counter[char]) ? counter[char] + 1: 1;
  });
  return Object.keys(counter).reduce((repeated, item) => {
    if (!repeated || counter[item] > repeated.value) return { value: counter[item], item: item };
    return repeated;
  }, null);
};

console.log(mostRepeated('asdfaga'));
