import { name } from "./types";


export interface lineProperties{
    words:Array<string>,
    lineNumber:number,
    lineType:name
}

export interface functionalLine{
    words:Array<string>,
    lineNumber:number,
    lineType:"functional"
}