// Написать метод/функцию, который/которая на вход принимает число (float), а на выходе
// получает число, округленное до пятерок.

// 5 мин

const numbers: number[] = [27, 27.8, 41.7];

const multipleTo5 = (num: number): number => {
  const round: number = Math.round(num) % 5;
  const addition: number = round >= 3 ? 5 : 0;
  return Math.round(num) - round + addition;
};

console.log(numbers.map(multipleTo5));
