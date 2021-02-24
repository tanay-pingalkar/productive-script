import chalk = require("chalk");
import { exit } from "process";

export const throwEr=(error:string,lineNumber:number)=>{
    console.error(chalk.red(error));
    console.error(chalk.bgRed(`the error has occure on line ${lineNumber+1}`));
    exit();
}