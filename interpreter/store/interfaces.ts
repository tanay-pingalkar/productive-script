import { name } from "./types";

interface identifier{
    name:name,
    symbol:string
}

export interface identifiersInterface{
    "$":identifier
    "#":identifier
    "*":identifier
    "_":identifier
}

export interface intInterface{
    name:String,
    val:number | boolean,
    path:string,
}
