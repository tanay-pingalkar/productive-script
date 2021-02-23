import { dimention,name } from '../store/types'
import { identifier} from '../store/identities'
import { lineProperties } from "../store/lineProperties"

export class tokenizer{
    dimention:dimention;
    lines:Array<lineProperties>;
    constructor(ar:dimention){
        this.dimention=ar;
        this.lines=[];
    }
    tokenize(){
        this.dimention.forEach((words,i)=>{
            const lineType=this.lineType(words);
            this.lines.push({
                words:words,
                lineNumber:i,
                lineType:lineType
            })
        });
        return this.lines;
    }
    lineType(words:Array<string>):name{
        if(words[0].startsWith(identifier['#'].symbol)){
            return identifier['#'].name
        }
        else if(words[0].startsWith(identifier['$'].symbol)){
            return identifier['$'].name
        }
        else{
            return "functional"
        }
    }
    
}
