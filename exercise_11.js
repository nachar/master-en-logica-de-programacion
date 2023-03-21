// Nota: 2/10

const censoredWords = (text, word) => {
  return text.split(' ').map((item) => (item === word) ? '[-CENSORED-]' : item).join(' ');
};

console.log(censoredWords('hola como chucha estai papi', 'chucha'));
