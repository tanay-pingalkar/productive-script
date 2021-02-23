import { readFile } from "fs/promises";
import { Split } from "./processes/split";
import { tokenizer } from "./processes/lexer";
import { Declare } from './processes/resolvers/declare'
import readline = require('readline');
import { exit } from "process";
 
const rl = readline.createInterface(process.stdin, process.stdout);

const main=async():Promise<void>=>{
    let str=new Split(await (await readFile(__dirname+`/../${fileName}.ps`,)).toLocaleString());
    let splited=str.split();
    let tokens=new tokenizer(splited);
    let lines=tokens.tokenize();
    let declare=new Declare(lines);
    console.log(declare.let)
    exit()

}
let fileName;
    rl.question('file name :- ', (name) => {
        fileName=name
        rl.close();
        main();
    });
