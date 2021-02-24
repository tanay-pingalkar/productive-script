export const isString=(str:string) : boolean=>{
    str=str.trim();
    if(str.startsWith(`"`) && str.endsWith(`"`)){
        return true
    }
    else return false
}