// Nota: 2/10
const commonsElement = (element1, element2) => {
  return element1.filter((item) => element2.includes(item));
};


console.log(commonsElement([1,2,3,4,5,6], [4,5,6,7,8]))
