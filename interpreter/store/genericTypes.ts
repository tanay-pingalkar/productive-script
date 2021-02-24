import { cInt } from "./types/const/int";
import { lInt } from "./types/let/int";
import { lStr } from "./types/let/str";

export const genericList={
    "#int":lInt,
    "$int":cInt,
    "#str":lStr
}