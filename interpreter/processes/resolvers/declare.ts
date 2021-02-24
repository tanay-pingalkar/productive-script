import { genericList } from "../../store/genericTypes";
import { lineProperties } from "../../store/lineProperties";


export class Declare{
    variables:object={};
    constructor(){
        return this
    }
    push(line:lineProperties){
        this.declareVariable(line);
    }
    declareVariable(line:lineProperties){
        const prefix=line.words[0]
        const data=genericList[prefix].conv(line.words, line.lineNumber);
        this.variables[data.name]={
            val:data.val,
            path:data.path,
        }
    }
}