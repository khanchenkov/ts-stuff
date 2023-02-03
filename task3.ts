// Написать метод/функцию, который/которая на вход принимает число (int), а на выходе
// выдает слово “компьютер” в падеже, соответствующем указанному количеству.
// Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

// (10 мин)

const numArr: number[] = [25, 41, 1048, 3002, 1, 0];

const decl = (num: number): string => {
  const remainder1 = Math.abs(num) % 100;
  const remainder2 = num % 10;
  
  if (remainder1 > 10 && remainder1 < 20) {
    return `${num} компьютеров`;
  }
  if (remainder2 > 1 && remainder2 < 5) {
    return `${num} компьютера`;
  }
  if (remainder2 === 1) {
    return `${num} компьютер`;
  }
  return `${num} компьютеров`;
};

console.log(numArr.map(decl));
