import { typeCheck } from "./typeCheck/typeCheck"

export const functions={
    "*pt":{
        do:(data,variables)=>{
            const type=typeCheck(data);
            if(type==="string"){
                console.log(data.split(`"`)[1])
            }
            else if(type==="variable"){
                console.log(variables[data].val)
            }
            
        },
        des:"this will print"
    }
}