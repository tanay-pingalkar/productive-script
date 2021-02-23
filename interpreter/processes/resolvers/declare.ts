import { exit } from "process";
import { genericList } from "../../store/genericTypes";
import { lineProperties } from "../../store/lineProperties";
import * as chalk from 'chalk';
export class Declare{
    arr:Array<lineProperties>;
    letLine:Array<lineProperties>=[];
    constLine:Array<lineProperties>=[];
    let:object={};
    constructor(arr:Array<lineProperties>){
        this.arr=arr;
        this.getLines();
        this.declareVriable();

    }
    getLines(){
        this.arr.forEach((line,i)=>{
            if(line.lineType==='let'){
                this.letLine.push(line)
            }
            else if(line.lineType==='constant'){
                this.constLine.push(line)
            }
        });
    }
    declareVriable(){
        this.letLine.forEach((line,i)=>{
            const prefix=line.words[0]
            const data=genericList[prefix].conv(line.words);
            if(data!=false) this.let[data.name]=data.val;
            else {
                console.error(chalk.bgRed(`the error has occure on line ${line.lineNumber}`));
                exit()
            }
        })
    }
}