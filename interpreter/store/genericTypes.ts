import { intInterface } from "./interfaces"
import * as chalk from 'chalk';
import { expression } from "../processes/resolvers/expression";

export const genericList={
    "#int":{
        type:"int",
        conv:(sentence:Array<string>):boolean | intInterface=>{
            const ar=sentence[1].split("=")
            return{
                name:ar[0],
                val:expression(ar[1])
            };
            

        }
    }
}