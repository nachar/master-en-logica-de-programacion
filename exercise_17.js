const getText = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'buzzLightYear';
  if (num % 3 === 0) return 'buzz';
  if (num % 5 === 0) return  'lightYear';
  return num.toString();
}

const buzzLightYear = (num) => {
  for (let i = 1; i <= num ; i++) {
    console.log(getText(i));
  }
};

buzzLightYear(50);
