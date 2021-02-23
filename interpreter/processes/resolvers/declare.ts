import { constList, genericList } from "../../store/genericTypes";
import { lineProperties } from "../../store/lineProperties";


export class Declare{
    let:object={};
    consts:object={};
    constructor(){
        return this
    }
    push(line:lineProperties){
        this.declareVariable(line);
    }
    declareVariable(line:lineProperties){
        if(line.lineType==="let"){
            const prefix=line.words[0]
            const data=genericList[prefix].conv(line.words, line.lineNumber);
            this.let[data.name]=data.val;
        }
        else{
            const prefix=line.words[0]
            const data=constList[prefix].conv(line.words, line.lineNumber);
            this.consts[data.name]=data.val;
        }
    }
}