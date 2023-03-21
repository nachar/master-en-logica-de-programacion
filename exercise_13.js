// // Nota: 4/10
const splitArray = (elements, divider) => {
  return elements.reduce((total, item, index) => {
    if (!(index % divider)) return [...total, [...[item]]];
    const totalLastIndex = total.length - 1;
    total[totalLastIndex] = [...total[totalLastIndex], item];
    return total;
  }, []);
};

console.log(splitArray([1,6,2,7,3,5,8,9], 2))
