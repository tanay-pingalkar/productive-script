import { types } from "../types"
import { isString } from "./isString"

export const typeCheck=(str:string):types=>{
    if(isString(str)){
        return "string"
    }
    else{
        return "variable"
    }
}