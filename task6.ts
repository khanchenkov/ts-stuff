// Написать метод, который в консоль выводит таблицу умножения. На вход метод
// получает число, до которого выводит таблицу умножения. В консоли должна появиться
// таблица.

// 50 мин

const countSpaces = (num: number, iteration: number): string => {
  const numLength: number = num.toString().length;
  const iterNumLength: number = iteration.toString().length;

  return num
    .toString()
    .substring(0, numLength - iterNumLength)
    .replace(/\w/g, " ");
};

const multiplyTable = (num: number): void => {
  let str: string = "";

  for (let i = 0; i <= num; i++) {
    const spaceFor1Column: string = countSpaces(num, i);
    const iLength: number = i.toString().length;
    const numLength: number = num.toString().length;

    if (i === 0 && iLength < numLength) {
      str += "  ";
    } else if (i === 0) {
      str += " ";
    } else {
      str += spaceFor1Column + i;
    }

    for (let j = 1; j <= num; j++) {
      const jLength: number = j.toString().length;

      const spacesForColumns: string = countSpaces(num * j, i * j);

      if (i === 0 && jLength > iLength) {
        str += " " + countSpaces(num * j, j) + j;
        continue;
      }

      if (i === 0) {
        str += " " + spacesForColumns + j;
        continue;
      }
      str += " " + spacesForColumns + j * i;
    }
    console.log(str);
    str = "";
  }

  return undefined;
};

multiplyTable(12);
