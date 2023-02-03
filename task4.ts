// Написать метод/функцию, который/которая на вход принимает целое число, а на
// выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и
// самого себя)

// 5 мин

const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const isPrime = (num: number): boolean => {
  if (num < 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(numArr.map(isPrime));
