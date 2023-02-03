// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах
// в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два
// массива. На выходе массив с необходимыми совпадениями.

// 15 мин

const arr1: number[] = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const arr2: number[] = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

const findDoubled = (nubmerArray: number[]): number[] => {
  const arr: number[] = [];
  const obj: any = {};

  for (let i: number = 0; i < nubmerArray.length; i++) {
    if (obj[nubmerArray[i]] !== undefined) {
      obj[nubmerArray[i]] += 1;
    } else {
      obj[nubmerArray[i]] = 1;
    }
  }
  for (let item in obj) {
    if (obj[item] >= 2) {
      arr.push(Number(item));
    }
  }
  return arr;
};

const findInCommon = (arr1: number[], arr2: number[]): any => {
  const arr: number[] = [];
  const doubled1 = findDoubled(arr1);
  const doubled2 = findDoubled(arr2);

  for (let i = 0; i < doubled1.length; i++) {
    for (let j = 0; j < doubled2.length; j++) {
      if (doubled1[i] === doubled2[j]) {
        arr.push(doubled2[j]);
        break;
      }
    }
  }
  return arr;
};

console.log(findInCommon(arr1, arr2));
