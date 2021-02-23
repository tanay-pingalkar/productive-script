import { dimention } from "../store/types"
export class Split{
    str: String;
    splited:any;
    constructor(str:String){
        this.str=str;
    }
    split(){
        return this.splited=this.splitWord(this.str.split(/\n/))
    }
    splitWord(ar:Array<string>){
        let dimention:dimention=[]
        ar.forEach((str)=>{
            dimention.push(str.split(/\s/))
        })
        return dimention
    }
    
}