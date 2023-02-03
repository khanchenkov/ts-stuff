// Написать метод/функцию, который/которая на вход принимает массив городов. В
// качестве результата возвращает строку, где города разделены запятыми, а в конце
// стоит точка.

// 5 мин

const cities: string[] = ["Москва", "Спб", "Воронеж", "Екб"];

// императивный
const citiesToStr1 = (arr: string[]): string => {
  let str: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      str += arr[i] + ", ";
      continue;
    }
    str += arr[i] + ".";
  }
  return str;
};

// функциональный
const citiesToStr2 = (arr: string[]): string => {
  return arr.join(", ") + ".";
};

console.log(citiesToStr1(cities));
console.log(citiesToStr2(cities));
