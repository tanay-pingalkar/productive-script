import { functions } from "../../store/functionStore";
import { genericList } from "../../store/genericTypes";
import { functionalLine, lineProperties } from "../../store/lineProperties";


export class Mind{
    lines:Array<functionalLine>;
    variables={};
    constructor(){
        return this
    }
    push(line:lineProperties,variables){
        this.variables=variables
        this.run(line)
    }
    run(line:lineProperties){
        this.breakdown(line.words)
    }
    breakdown(words:Array<string>){
        const word=words.join(" ").split(/[()]/g);
        functions[word[0]].do(word[1],this.variables)
    }
}