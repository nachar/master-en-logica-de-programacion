// Nota: 1/10
const multiply = (num) => {
  console.log(`Tabla del ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${num} = ${i*num}`);
  }
};

multiply(7);
