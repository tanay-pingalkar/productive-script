import { readFile } from "fs/promises";
import { Split } from "./processes/split";
import { tokenizer } from "./processes/lexer";
import readline = require("readline");
import { exit } from "process";
import chalk = require("chalk");

const rl = readline.createInterface(process.stdin, process.stdout);

const main = async (): Promise<void> => {
  let str;
  try {
    str = new Split(
      await (await readFile(__dirname + `/../${fileName}.pds`)).toLocaleString()
    );
  } catch {
    console.log(chalk.red("cannot read file"));
    exit();
  }
  console.log(chalk.yellow("OUTPUT:"));
  let splited = str.split();
  let tokens = new tokenizer(splited);
  tokens.tokenize();
  exit();
};
let fileName;
rl.question("file name :- ", (name) => {
  fileName = name;
  rl.close();
  main();
});
