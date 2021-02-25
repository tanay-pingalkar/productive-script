import chalk = require("chalk");
import { exit } from "process";

export const expression = (
  word: string,
  lineNumber: number
): number | boolean => {
  const numbers: Array<number> = [];
  const words = word.replace(/ /g, "").split(/[+-/* \n]/g);
  let ans: number = 0;
  words.forEach((str) => {
    const num = Number(str);
    if (isNaN(num)) {
      console.error(chalk.red(`ERROR :  CANT ASSIGN ${str}  VALUE TO INT`));
      console.error(
        chalk.bgRed(`the error has occure on line ${lineNumber + 1}`)
      );
      exit();
    } else {
      numbers.push(num);
    }
  });
  let symbols: Array<string> = word.match(/[+-/*]/g);
  if (symbols !== null) {
    symbols.unshift("+");
    for (let i = 0; i <= symbols.length; i++) {
      switch (symbols[i]) {
        case "+":
          ans = ans + numbers[i];
          break;
        case "-":
          ans = ans - numbers[i];
          break;
        case "*":
          ans = ans * numbers[i];
          break;
        case "/":
          ans = ans / numbers[i];
          break;
        default:
          break;
      }
    }
  } else {
    ans = numbers[0];
  }
  return ans;
};
