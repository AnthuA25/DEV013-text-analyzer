const text = 'Hola 45 66.7 5ajdjf6 kgk67';
const numbers = text.split(/\s+/);
const arrayNumbers = numbers.filter((number) => {
  return /^\d+(\.\d+)?$/g.test(number);
});
console.log(arrayNumbers)