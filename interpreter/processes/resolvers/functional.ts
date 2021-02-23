import { functions } from "../../store/functionStore";
import { constList, genericList } from "../../store/genericTypes";
import { functionalLine, lineProperties } from "../../store/lineProperties";


export class Mind{
    lines:Array<functionalLine>;
    constructor(){
        return this
    }
    push(line:lineProperties){
        this.run(line)
    }
    run(line:lineProperties){
        this.breakdown(line.words)
    }
    breakdown(words:Array<string>){
        const word=words.join("").split(/[()]/g);
        console.log(word)
        functions[word[0]].do(word[1])
    }
}